import Sequelize from 'sequelize';
import config from './config';

const connectionDB = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

export default connectionDB;