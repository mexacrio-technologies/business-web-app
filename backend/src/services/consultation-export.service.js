import { access, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import ExcelJS from 'exceljs';

const workbookPath = fileURLToPath(
  new URL('../../data/consultations.xlsx', import.meta.url)
);
const worksheetName = 'Consultations';
let pendingWrite = Promise.resolve();
const pendingExports = new Map();
let retryTimer;
let lastRetryError;

const appendToWorkbook = async (consultations) => {
  if (consultations.length === 0) {
    return;
  }

  await mkdir(dirname(workbookPath), { recursive: true });

  const workbook = new ExcelJS.Workbook();
  let workbookExists = true;
  try {
    await access(workbookPath);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    workbookExists = false;
  }

  if (workbookExists) {
    await workbook.xlsx.readFile(workbookPath);
  }

  const worksheet = workbook.getWorksheet(worksheetName)
    || workbook.addWorksheet(worksheetName);

  if (worksheet.rowCount === 0) {
    worksheet.columns = [
      { header: 'ID', key: 'id', width: 12 },
      { header: 'Full name', key: 'fullName', width: 24 },
      { header: 'Email', key: 'email', width: 32 },
      { header: 'Company', key: 'company', width: 24 },
      { header: 'Service interest', key: 'serviceInterest', width: 22 },
      { header: 'Goals and scope', key: 'goalsAndScope', width: 60 },
      { header: 'Submitted at', key: 'createdAt', width: 24 }
    ];
    worksheet.getRow(1).font = { bold: true };
    worksheet.autoFilter = 'A1:G1';
  }

  const exportedIds = new Set(
    worksheet.getColumn(1).values.map((id) => Number(id)).filter(Number.isFinite)
  );
  let appendedCount = 0;

  for (const consultation of consultations) {
    if (exportedIds.has(Number(consultation.id))) {
      continue;
    }

    worksheet.addRow([
      consultation.id,
      consultation.fullName,
      consultation.email,
      consultation.company,
      consultation.serviceInterest,
      consultation.goalsAndScope,
      consultation.createdAt
    ]);
    exportedIds.add(Number(consultation.id));
    appendedCount += 1;
  }

  if (appendedCount > 0) {
    await workbook.xlsx.writeFile(workbookPath);
  }
};

const writeConsultations = (consultations) => {
  const write = pendingWrite.then(() => appendToWorkbook(consultations));
  pendingWrite = write.catch(() => undefined);
  return write;
};

const retryPendingExports = async () => {
  retryTimer = undefined;
  const pending = [...pendingExports.values()];

  if (pending.length === 0) {
    return;
  }

  try {
    await writeConsultations(pending);
    for (const consultation of pending) {
      pendingExports.delete(consultation.id);
    }
    console.info(`[Excel Export] Retried and exported ${pending.length} pending consultation(s).`);
    lastRetryError = undefined;
  } catch (error) {
    const errorCode = error.code || error.name || 'WORKBOOK_FAILURE';
    if (lastRetryError !== errorCode) {
      console.error(`[Excel Export Retry] ${errorCode}: ${error.message}`);
      lastRetryError = errorCode;
    }
  }

  if (pendingExports.size > 0) {
    retryTimer = setTimeout(retryPendingExports, 5000);
    retryTimer.unref();
  }
};

const scheduleRetry = () => {
  if (retryTimer) {
    return;
  }

  retryTimer = setTimeout(retryPendingExports, 5000);
  retryTimer.unref();
};

export const appendConsultationsToWorkbook = async (consultations) => {
  try {
    await writeConsultations(consultations);
    for (const consultation of consultations) {
      pendingExports.delete(consultation.id);
    }
    return true;
  } catch (error) {
    for (const consultation of consultations) {
      pendingExports.set(consultation.id, consultation);
    }
    console.error(
      `[Excel Export] ${error.code || error.name || 'WORKBOOK_FAILURE'}: ${error.message}. ` +
      'Consultations remain saved in SQLite and will be retried.'
    );
    scheduleRetry();
    return false;
  }
};

export const appendConsultationToWorkbook = async (consultation) => (
  appendConsultationsToWorkbook([consultation])
);
