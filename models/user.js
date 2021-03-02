module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        }
    });
    return User;
};
