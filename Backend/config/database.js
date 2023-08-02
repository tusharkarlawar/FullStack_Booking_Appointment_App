const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Tushar@9921', {
  host: 'localhost',
  dialect: 'mysql',
});

/*async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Database connection successful!');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  testConnection();*/ 

module.exports=sequelize;