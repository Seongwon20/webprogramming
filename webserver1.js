const http = require('http');


const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("Hi! My name is seong-won");
    res.end("<h1>Hello World!</h1>");
});



server.listen(1000,()=>{
    console.log("server listens on port 1000 !");
});