
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Students', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            address: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            faculty: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            phone_no: {
                type: Sequelize.STRING(15),
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('Students');
    }
};
