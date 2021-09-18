const path = require('path');

require( "dotenv" ).config({ path: path.join(__dirname, '.env')});

const config = {
    client: "mysql",
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        charset: "utf8mb4"
    }
};

module.exports = config;