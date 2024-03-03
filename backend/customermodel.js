const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_harika',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

//get all merchants our database
const getCustomer = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM  customer", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
};

module.exports = {
    getCustomer
};