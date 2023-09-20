import db from './src/data/database.js';
import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3333;

db.hasConnection();
app.listen(3000, () =>console.log(`Port is contacted at: ${PORT}`));