const User = require('./user')
module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define(
    "order",
    {
      orderName: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      classMethods: {
        associate: function (models) {
          models.order.belongs(models.user, {
            onDelete: "CASCADE",
            foreignKey: {
              name: 'userId',
            },
          });
          models.user.hasMany(models.order)
        },
      },
    }
  );
  return Order;
};