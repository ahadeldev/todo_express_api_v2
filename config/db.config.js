import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("==> Database connection successfully established.");
  } catch (err) {
    console.log("==> Error connecting to database.")
  }
}

export const dbConnectioSync = async () => {
  try {
    await sequelize.sync({force: false});
    console.log('==> Database connected and synced.');
  } catch (err) {
    console.log("==> Error while trying to connect and sunc database.");
  }
}