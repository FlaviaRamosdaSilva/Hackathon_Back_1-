import Sequelize, { Model } from 'sequelize'

class Weekdays extends Model {
  static init (sequelize) {
    super.init({ // campo Id é gerado automaticamente por isso não está aqui
      name: Sequelize.STRING
    },
    {
      sequelize
    })
    return this
  }
}

export default Weekdays
