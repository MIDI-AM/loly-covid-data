const {Pool} = require("pg");
const pool = new Pool({
    user: 'opwzdocunvsstd', 
    host: 'ec2-3-222-150-253.compute-1.amazonaws.com',
    database: 'd7e66bigsjosgl', 
    password: 'a700cf41df82949f521c478246d56dc34e095fbe18c235258314518c04aee89d',
    port: 5432,
    ssl: true,
})

module.exports = pool;