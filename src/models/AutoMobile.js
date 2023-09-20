import { DataTypes } from 'sequelize';
import db from '../database.js';

const Automobile = db.define(
  "automobile", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  model: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  plate: {
    type: DataTypes.STRING(7),
    allowNull: false
  }
},
  {
    tableName: "automobile",
    timestamps: false
  },
);


export default Automobile;