const fs = require('fs');
const http = require('http');
const port = 3000;

const server = http.createServer(function(req,res){
    res.setHeader('content-type','text/html')
    let path = "./";
    console.log(req.url);
    switch(req.url){
        case "/":path = "index.html";
        break;
        case "/about":path = "about.html";
        break;
        case "/contact":path = "contact.html";
        break;
        default:path = "404.html";
        break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else res.end(data);
    })
})

server.listen(port,function(error){
    if(error){
        console.log('something went wrong',error);
    }
    else{
        console.log('server is listening on port:' + port)
    }
})