const fs = require('fs');
const querystring = require('querystring');
const home = require('../views/home');
const car = require('../views/car');
const addCar = require('../views/add-car');

exports.handleHome = function(res) {
    res.setHeader('Content-Type', 'text/html');
    res.write(home.renderPage());
    res.end();
};

exports.handleAddCar = function(method, req, res) {
    if (method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(addCar.renderPage());
        res.end();
    } else if (method === 'POST') {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            const formData = JSON.stringify(querystring.parse(body));
            fs.writeFile('formData.json', formData, err => {
                if (err) {
                    console.error(err);
                    return;
                }
                res.statusCode = 302;
                res.setHeader('Location', '/car');
                res.end();
            });
        });
    }
};

exports.handleCar = function(res) {
    fs.readFile('formData.json', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.write(car.renderPage(data));
        res.end();
    });
};

exports.handlePageNotFound = function(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('404 Page Not Found');
    res.end();
};
