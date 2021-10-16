const Discord=require("discord.js");
const colors=require("colors");
const fs=require("fs");

const client=new Discord.Client({
    messageCacheLifetime:60,
    fetchAllMembers:true,
    messageCacheMaxSize:10,
    restTimeOffset:0,
    restWsBridgeTimeout:100,
    disableEveryone:true,
    partials:["MESSAGE","CHANNEL","REACTION"],
});

client.commands=new Discord.Collection();
client.aliases=new Discord.Collection();
client.categories=fs.readdirSync("./commands/");

["command"].forEach((handler)=>{
    require(`./handlers/${handler}`)(client);
});

client.login(require("./botconfig/config.json").token);