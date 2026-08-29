import http from 'http'

const server=http.createServer((req,res)=>{

    const headers = {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',   
        'Access-Control-Allow-Headers': 'Content-Type',          
        'Content-Type': 'application/json'
    };
    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }
    if(req.url=='/check'){
        res.writeHead(200,headers);
        res.end(JSON.stringify({'result':'Confirmed/Working'}))
    }
    else if(req.url=='/about'){
        res.writeHead(200,headers);
        res.end(JSON.stringify({'result': 'This is manual Server'}))
    }
})

server.listen("8000",()=>{
    console.log("Server Running at 8000")
})