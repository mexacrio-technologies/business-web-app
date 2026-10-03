import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Consultation = sequelize.define('Consultation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(254),
    allowNull: false
  },
  company: {
    type: DataTypes.STRING(160),
    allowNull: false
  },
  serviceInterest: {
    type: DataTypes.STRING(32),
    allowNull: false
  },
  goalsAndScope: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'consultations'
});

export default Consultation;
