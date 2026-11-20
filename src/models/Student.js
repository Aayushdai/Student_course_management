import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Student = sequelize.define('Student',{
    
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    faculty: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    
    phone_no : {
        type: DataTypes.STRING(15),
        allowNull: false
    },
},{
        tableName: 'Students',
        timestamps: true
    }
);
export default Student;