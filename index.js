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
  bot.user.setPresence({game:{name:'Ashley love bot',type:0}});﻿
});


bot.on('message', message => {
  if (message.author.bot) return;

     msg = message.content.toLowerCase();
    
    if (msg.startsWith ("udon")) {
    return message.channel.send("In my soba household?");
   }
  
  if (msg.startsWith ("gakkyun")) {
    return message.channel.send("Yuppi.");
  }

  if (msg.startsWith ("gaku no")) {
      let modRole = message.guild.roles.find("name","Testing");
      if(message.member.roles.has(modRole.id)) {
        message.channel.sendMessage("Gaku, yes!");
      } else {
        message.cchannel.sendMessage("Foolish!");
      }
  }

  if (msg.startsWith ("hey gays.")) {
    return message.channel.send("What about me?");
  }

});

bot.on("message", async message => {
  if(message.author.box) return;
  if(message.channel.type === "dm") return;

  let prefix = 'g!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd ===`${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#a0a0a0")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

  return message. channel.send(botembed);
  }
  
  if(cmd === `${prefix}dab`){
    return message.channel.send("//dabs away my worries while sitting in a Mercedes-Benz®");
  }
  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }
  
  if(cmd === `${prefix}sobaman`){
    return message.channel.send("You got the wrong person, I'm not as handsome as him.");
  }
  
  if(cmd === `${prefix}bathbomb`){
    return message.channel.send("Finally, some good fucking food.");
  }
  
  
    if(cmd === `${prefix}testing`){
      let modRole = message.guild.roles.find("name","Pikachu");
      if(message.member.roles.has(modRole.id)) {
        message.channel.sendMessage("Works!");
      } else {
        message.reply("Foolish!");
      }
  }
  
});

bot.login(process.env.token);
