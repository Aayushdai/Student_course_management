import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Faculty = sequelize.define("Faculty", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});
export default Faculty;
