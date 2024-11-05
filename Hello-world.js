const http =require('http');
 http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':'text/plain'});
    
     res.end('Hello Node!!' );

 })
 .listen(8080,function(){
     console.log('Server is running on port 8080');
 })