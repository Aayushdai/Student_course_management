
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Subjects', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            code: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false
            },
            credit_hours: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            semester: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            course_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Courses',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
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
        await queryInterface.dropTable('Subjects');
    }
};
