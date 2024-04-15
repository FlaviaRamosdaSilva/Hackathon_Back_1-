'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('classes', {
      id: {
        type: Sequelize.INTEGER, // número inteiro
        allowNull: false, // campo nulo = não
        autoIncrement: true, // ele vai dar sequencia no id, cria automatico
        primaryKey: true // chave primaria
      },
      course: {
        type: Sequelize.STRING,
        allowNull: false // campo nulo = não, todos tem que ter o curso
      },
      module: {
        type: Sequelize.STRING,
        allowNull: false // campo nulo = não, todos tem que ter modulo
      },
      lesson: {
        type: Sequelize.STRING,
        allowNull: false // campo nulo = não, todos tem que ter nome da aula
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false // campo nulo = não, todos tem que ter tempo de duração
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('classes')
  }
}