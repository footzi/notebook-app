import Sequelize from 'sequelize';
import config from './config';

const connectionDB = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    },
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

export default connectionDB;