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

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');

const client = new discord.Client();
const keepAlive = require('./server.js');
const config = require('./config.json');

const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/${file}`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.token);



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