const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

})

sequelize.sync()
.then(()=> {console.log('Database Connected');})
.catch((err)=>{console.error(err);});

module.exports = sequelize;