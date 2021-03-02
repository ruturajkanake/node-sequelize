var Sequelize = require("sequelize");
var db_mode = process.env.NODE_ENV || "development";
var env = require("./env.json")[db_mode];
var db = {};

var sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  logging: false, // Disable the logging. It is consuming the time on lambda function.
  dialect: env.dialect,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 20000,
    idle: 10000,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
