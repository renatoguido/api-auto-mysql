import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();


const DB_NAME = "automobile"
const DB_USER = "root";
const DB_PASSWORD = "1234";
const DB_HOST="localhost"

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	dialect: "mysql",
	host: DB_HOST,
});


async function hasConnection() {
  try {
    await db.authenticate();
    console.log("DB connect");
  } catch (error) {
    console.log("Failed to connect to DB");
  }
}

Object.assign(db, { hasConnection });

export default db;