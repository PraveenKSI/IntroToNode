const fs = require('fs');
const http = require('http');
const port = 4000;

const server = http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");

    if(req.url === "/data"){
        fs.readFile('../data/studentData.json',(err,data)=>{
            if(err){
                console.log(err);
                res.end();
            }
            else res.end(data);
        })
    }
    else{
        res.end(new Error("No Data Found"));
    }
})

server.listen(port,function(error){
    if(error){
        console.log('something went wrong',error);
    }
    else{
        console.log('server is listening on port:' + port)
    }
})