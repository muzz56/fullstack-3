const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 4000;

var amount;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello world\n');
    // let URL = url.parse(req.url,true); 
    let abc = url.parse(req.url,true).query; 
    
    if(req.url === '/spin'){
        console.log('spinning')
        console.log('amount lost:' + amount);
        res.end('Slot Machine')
    }

    if(abc.amount){  
        amount = abc.amount;
        console.log('playing....amount:' + abc.amount)
        res.end('Slot Machine')
    }
    if(req.url === '/play'){
        console.log('playing')
        res.end('Slot Machine')
    }
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
})