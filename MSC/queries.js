var mysql = require('mysql');

// create db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'customerdatabase'
});

connection.connect()

///////
// Create queries
///////
var getCustomerData = (callback) => {
    var sql = `SELECT * FROM checkoutdata`;
    connection.query(sql, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

var createCustomer = (params, callback) => {
    var sql = `INSERT INTO checkoutdata (name, email, password, address_line_1, address_line_2, city, state, zip_code, card_number, expiration, cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(sql, params, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}


module.exports = {
    getCustomerData,
    createCustomer
}