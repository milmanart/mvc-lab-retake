const http = require('http');
const routes = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/' && method === 'GET') {
        return routes.handleHome(res);
    }
    if (url === '/add-car') {
        return routes.handleAddCar(method, req, res);
    }
    if (url === '/car' && method === 'GET') {
        return routes.handleCar(res);
    }
    return routes.handlePageNotFound(res);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
