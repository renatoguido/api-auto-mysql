import { DataTypes } from 'sequelize';
import db from '../database.js';

const AutomobileDetails = db.define(
  "automobiledetails", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  classify: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  horses: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  kilometers: { 
    type: DataTypes.DOUBLE.UNSIGNED,
  allowNull: false
  }
},
  {
    tableName: "automobiledetails",
    timestamps: false
  },
);


export default AutomobileDetails;