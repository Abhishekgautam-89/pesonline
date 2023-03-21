
const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//     dialect: 'mssql',
//     dialectModulePath: 'sequelize-msnodesqlv8',
//     dialectOptions: {
//       driver: 'SQL Server Native Client 10.0',
//       instanceName: 'SQLEXPRESS',
//       trustedConnection: true
//     },
//     host: 'localhost',
//     database: 'pesonline'
//   });
const sequelize = new Sequelize("pesonline","sa","123456",{
    dialect:'mssql',
    host:'localhost',
    port: 53558, // Default port
    logging: false, // disable logging; default: console.log

    dialectOptions: {
        requestTimeout: 30000 // timeout = 30 seconds
    }
   
})
// console.log(process.env.DB_NAME);

module.exports=sequelize;