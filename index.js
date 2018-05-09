const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "g!";

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
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Ashley love bot", {type:0});

});


bot.on('message', message => {
  if (message.author.bot) return;

     msg = message.content.toLowerCase();
 
     mention = message.mentions.users.first();

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.sendMessage (mentionMessage);
//        return message.channel.send ("Message sent.");
      }

  if (msg.startsWith ("gakkyun")) {
    return message.channel.send("Yuppi.");
  }

  if (msg.includes ("udon")) {
    return message.channel.send("In my soba household?");
  }

  if (msg.startsWith ("good morning gaku")) {
    return message.channel.send("Good morning. You were talking in your sleep, weren't you?");
  }

  if (msg.startsWith ("good night gaku")) {
    return message.channel.send("Good night. From now on, I want you to think of me.");
  }
  
  if (msg.startsWith ("gaku no")) {
    return message.channel.send("Gaku, yes.");
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

  if(cmd === `${prefix}sobaman`){
    return message.channel.send("You got the wrong person, I'm not as handsome as him.");
  }

  if(cmd === `${prefix}dab`){
    return message.channel.send("//dabs away my worries while sitting in a Mercedes-Benz®");
  }

  if(cmd === `${prefix}bathbomb`){
    return message.channel.send("Delicous. Finally, some good fucking good.");
  }
  
});

bot.login(process.env.token);
