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

const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async(client) => {
  const small = await rpc.getRpcImage(config.applicationid, config.smallimgname);
  
  rpc.getRpcImage(config.applicationid, config.imagename)
  .then(large => {
    let presence = new rpc.Rpc()
    .setName(config.name)
    .setType(config.type)
    .setApplicationId(config.applicationid)
    .setAssetsLargeImage(large.id)

.setAssetsSmallImage(small.id)   
      .setAssetsLargeText(large.name)
    .setStartTimestamp(config.time || Date.now())
    console.log(presence.toDiscord())
    client.user.setStatus("dnd");
    client.user.setPresence(presence.toDiscord()).catch(console.error);
  })
  console.log(chalk.hex("#ff0000")("Succesfully enabled rpc"))
           }


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