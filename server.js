///////////////////////////////////

//๐ Credit Infos 
//๐ This Project Made By Aditya Codez
//๐ Must Give Credits While Using 
//๐ Support Server 
//โฅ๏ธ https://discord.gg/z6RMrphPXE
//๐ฅ Youtube 
//๐ https://youtube.com/adityacodez
//๐๏ธ ยฉAditya Codezโข

///////////////////////////////////

const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT 3 MINUTES TO SEE YOUR RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("ADITYA CODEZ RPC IS READY")});
}
module.exports = keepAlive


///////////////////////////////////

//๐ Credit Infos 
//๐ This Project Made By Aditya Codez
//๐ Must Give Credits While Using 
//๐ Support Server 
//โฅ๏ธ https://discord.gg/z6RMrphPXE
//๐ฅ Youtube 
//๐ https://youtube.com/adityacodez
//๐๏ธ ยฉAditya Codezโข

///////////////////////////////////