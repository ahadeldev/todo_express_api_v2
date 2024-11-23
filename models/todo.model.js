import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

// Define the Todo model.
const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }, 
}, {
  timestamps: true // Automatically add "createdAt" and "updatedAt" columns.
});

export default Todo;