import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false},
    code: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
    description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    faculty_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Faculties',
            key: 'id'
        }
    }
});
export default Course;