module.exports = (sequelize, Sequelize) => {
    return sequelize.define("users", {
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        }
    });
};