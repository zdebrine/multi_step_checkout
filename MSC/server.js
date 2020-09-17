const path = require('path');
const fs = require('fs');
/* const App = require('./frontend/src/App'); */

const express = require('express');
const app = express();
const port = 3001;
const queries = require('./queries');
const bodyParser = require('body-parser');
/* const ReactDOMServer = require('react-dom/server'); */

var jsonParser = bodyParser.json();

app.use(express.static(('public')));

app.get('/customer', (req, res) => {
    queries.getCustomerData((err, data) => {
        if (err) {
            console.log('Error getting customer data');
        } else {
            console.log('Got customer data and things');
            res.send(data);
        }
    });
});

/* app.get('/', (req, res) => {
    const index = path.resolve('./server/index.html');
    fs.readFile(index, 'utf8', (err, data) => {
        if (err) {
            console.log('Danger Will Robinson');
            res.status(500).send('No way Jose');
        } else {
            return res.send(`<div id="app">Hello world</div>`);
        }
    });
}); */

app.post('/customer', jsonParser, (req, res) => {
    params = [
        req.body.name, 
        req.body.email,
        req.body.password,
        req.body.address_line_1,
        req.body.address_line_2,
        req.body.city,
        req.body.state,
        req.body.zip_code,
        req.body.card_number,
        req.body.expiration,
        req.body.cvv,
        req.body.billing_zip,
    ];
    console.log(req.body);
    queries.createCustomer(params, (err, data) => {
        if(err) {
            console.log('Error adding new customer');
        } else {
            console.log('New customer added successfully');
            res.send(data);
        }
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});