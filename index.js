const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.legnth <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setPresence({game:{name:'Ashley Love Bot,type:0}});﻿
});


// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;
  
    if (message.content.indexOf("Udon") === 0) {
    return message.channel.send("In my soba household?");
    }
  
    if (message.content.indexOf("Gakkyun") === 0) {
    return message.channel.send("Yuppi.");
    }

    if (message.content.indexOf("Gaku, no") === 0) {
    return message.channel.send("Gaku, yes.");
    }

});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = 'g!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd ===`${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#a0a0a0")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

    return message. channel.send(botembed);
  }

  if(cmd === `${prefix}sobaman`){
    return message.channel.send("You got the wrong person, I'm not as handsome as him.");
  }
  
  if(cmd === `${prefix}bathbomb`){
    return message.channel.send("Finally, some good fucking food.");
  }
  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }
  
  if(cmd === `${prefix}dab`){
    return message.channel.send("//dabs away my worries while sitting in a Mercedes-Benz®");
  }
});

bot.login(process.env.token);
