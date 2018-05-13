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
        mention.send (mentionMessage);
//        return message.channel.send ("Message sent.");
      }

    if(msg.startsWith (prefix + "scout")) {
      number = 57; 
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
//shout
        case 1: message.channel.send ({files:["./images/gaku_birthday_sr.png"]}); break;
        case 2: message.channel.send ({files:["./images/gaku_birthday_ssr.png"]}); break;
        case 3: message.channel.send ({files:["./images/gaku_endofyear_sr.png"]}); break;
        case 4: message.channel.send ({files:["./images/gaku_endofyear_ssr.png"]}); break;
        case 5: message.channel.send ({files:["./images/gaku_gothichalloween_ssr.png"]}); break;
        case 6: message.channel.send ({files:["./images/gaku_lasdim_ssr.png"]}); break;
        case 7: message.channel.send ({files:["./images/gaku_linked_ssr.png"]}); break;
        case 8: message.channel.send ({files:["./images/gaku_matsuri_ssr.png"]}); break;
        case 9: message.channel.send ({files:["./images/gaku_newyear_ssr.png"]}); break;
        case 10: message.channel.send ({files:["./images/gaku_rehearsal_r.png"]}); break;  
        case 11: message.channel.send ({files:["./images/gaku_rehearsal_sr.png"]}); break;
        case 12: message.channel.send ({files:["./images/gaku_rehearsal_ssr.png"]}); break;
        case 13: message.channel.send ({files:["./images/gaku_rehearsal_ur.png"]}); break;
        case 14: message.channel.send ({files:["./images/gaku_sweets_ssr.png"]}); break;
        case 15: message.channel.send ({files:["./images/gaku_wishes_sr.png"]}); break;
        case 16: message.channel.send ({files:["./images/gaku_wishes_ssr.png"]}); break;
        case 17: message.channel.send ({files:["./images/gaku_work_sr.png"]}); break;
        case 18: message.channel.send ({files:["./images/gaku_work_ssr.png"]}); break;
        case 19: message.channel.send ({files:["./images/gaku_xmasmagic_ssr.png"]}); break;
//beat
        case 20: message.channel.send ({files:["./images/gaku_academy_r.png"]}); break;
        case 21: message.channel.send ({files:["./images/gaku_academy_sr.png"]}); break;
        case 22: message.channel.send ({files:["./images/gaku_academy_ssr.png"]}); break;
        case 23: message.channel.send ({files:["./images/gaku_blackside_ssr.png"]}); break;
        case 24: message.channel.send ({files:["./images/gaku_daybreak_ssr.png"]}); break;
        case 25: message.channel.send ({files:["./images/gaku_kingpudding_ssr.png"]}); break;
        case 26: message.channel.send ({files:["./images/gaku_leopa_sr.png"]}); break;
        case 27: message.channel.send ({files:["./images/gaku_leopa_ssr.png"]}); break;
        case 28: message.channel.send ({files:["./images/gaku_marchen_ssr.png"]}); break;
        case 29: message.channel.send ({files:["./images/gaku_order_ssr.png"]}); break;  
        case 30: message.channel.send ({files:["./images/gaku_rabbit_sr.png"]}); break;
        case 31: message.channel.send ({files:["./images/gaku_rabbit_ssr.png"]}); break;
        case 32: message.channel.send ({files:["./images/gaku_valentine_ssr.png"]}); break;
        case 33: message.channel.send ({files:["./images/gaku_valentinegreatescape_ssr.png"]}); break;
        case 34: message.channel.send ({files:["./images/gaku_whitedaysp_sr.png"]}); break;
        case 35: message.channel.send ({files:["./images/gaku_whitedaysp_ssr.png"]}); break;
        case 36: message.channel.send ({files:["./images/gaku_winterwonderland_sr.png"]}); break;
        case 37: message.channel.send ({files:["./images/gaku_winterwonderland_ssr.png"]}); break;
        case 38: message.channel.send ({files:["./images/gaku_xmasrock_ssr.png"]}); break;
//melody
        case 39: message.channel.send ({files:["./images/gaku_christmas_ssr.png"]}); break;
        case 40: message.channel.send ({files:["./images/gaku_gardentea_ssr.png"]}); break;
        case 41: message.channel.send ({files:["./images/gaku_mlullaby_ssr.png"]}); break;
        case 42: message.channel.send ({files:["./images/gaku_monster_sr.png"]}); break;
        case 43: message.channel.send ({files:["./images/gaku_monster_ssr.png"]}); break;
        case 44: message.channel.send ({files:["./images/gaku_ordinarydays_r.png"]}); break;
        case 45: message.channel.send ({files:["./images/gaku_ordinarydays_sr.png"]}); break;
        case 46: message.channel.send ({files:["./images/gaku_ordinarydays_ssr.png"]}); break;
        case 47: message.channel.send ({files:["./images/gaku_outdoorlive_sr.png"]}); break;
        case 48: message.channel.send ({files:["./images/gaku_outdoorlive_ssr.png"]}); break;  
        case 49: message.channel.send ({files:["./images/gaku_outdoorlive_ur.png"]}); break;
        case 50: message.channel.send ({files:["./images/gaku_sparkle_ssr.png"]}); break;
        case 51: message.channel.send ({files:["./images/gaku_taiko_ssr.png"]}); break;
        case 52: message.channel.send ({files:["./images/gaku_taisho_ssr.png"]}); break;
        case 53: message.channel.send ({files:["./images/gaku_trgpolice_r.png"]}); break;
        case 54: message.channel.send ({files:["./images/gaku_trgpolice_sr.png"]}); break;
        case 55: message.channel.send ({files:["./images/gaku_trgpolice_ssr.png"]}); break;
        case 56: message.channel.send ({files:["./images/gaku_whiteday_ssr.png"]}); break;
        case 57: message.channel.send ({files:["./images/gaku_zodiac_ssr.png"]}); break;
      }
    }
  
  if (msg.startsWith ("i love you gaku")) {
      let modRole = message.guild.roles.find("name","A SOUTHERN GIRL.");
      if(message.member.roles.has(modRole.id)) {
        message.channel.send("I love you too, Ashley. I really mean it too, I wouldn't say it to anyone else.");
      } else {
        message.channel.send("Hey, don't say something like that out of nowhere!");
      }
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

  if (msg.startsWith ("hey gays")) {
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

     if(cmd === `${prefix}say`){
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
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
