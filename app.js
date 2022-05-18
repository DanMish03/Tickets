const http = require('http');
const fs = require('fs');
const path = require('path');


const app = http.createServer((req, res) =>{
    console.log("Server")
    console.log("For test")
    res.setHeader('Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

    let basePath = '';

    switch (req.url){
        case '/' :
            basePath = createPath('index');
            break;
        case '/admin' :
            basePath = createPath('admin');
            break;
        case '/request' :
            basePath = createPath('request');
            break;
        default:
            basePath = createPath('index');
            break;
    }
        fs.readFile(basePath, (err,data) =>{
            if (err){
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })

})
const PORT = 3000;
app.listen(PORT,'localhost', (error) =>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});