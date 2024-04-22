const http = require('http');
const { getCars, getCarInformation, getCarAge } = require('./cars');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const cars = getCars();
    console.log(cars);
    res.setHeader('Content-Type', 'text/html');
    res.write(getHTMLDocumentStart());
    res.write('<body>');
    for (let car of cars) {
        res.write(`<p>${getCarInformation(car.id)}</p>`);
        res.write(`<p>${getCarAge(car.id)}</p>`);
    }
    res.write('</body>');
    res.write(getHTMLDocumentEnd());
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
