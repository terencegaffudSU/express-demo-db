const { Sequelize } = require("sequelize");

// DB Connection Configuration
const sequelize = new Sequelize("ecommerce_tw1a", "admin", "k1SzD36aWyD3x38H3ya4GNvOh0siCzp7", {
    host: "dpg-cgh672o2qv23kcop9fv0-a.singapore-postgres.render.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: true
    }
});

// Test connection function
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}

module.exports = {sequelize, testConnection}