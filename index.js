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
  bot.user.setActivity("Score: -1", {type:0});

});


bot.on('message', message => {
  if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = 'g!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    msg = message.content.toLowerCase();
    mention = message.mentions.users.first();

    let botschannel = message.guild.channels.find(`name`, "idolbot7");
    if(!botschannel) return message.channel.send("Couldn't find bot (idolbot7) channel.");

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
//        return message.channel.send ("Message sent.");
      }

      if(msg.startsWith (prefix + "scout")) {
        number = 58;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: botschannel.send ({files:["./images/gaku_birthday_sr.png"]}); break;
          case 2: botschannel.send ({files:["./images/gaku_birthday_ssr.png"]}); break;
          case 3: botschannel.send ({files:["./images/gaku_endofyear_sr.png"]}); break;
          case 4: botschannel.send ({files:["./images/gaku_endofyear_ssr.png"]}); break;
          case 5: botschannel.send ({files:["./images/gaku_gothichalloween_ssr.png"]}); break;
          case 6: botschannel.send ({files:["./images/gaku_lasdim_ssr.png"]}); break;
          case 7: botschannel.send ({files:["./images/gaku_linked_ssr.png"]}); break;
          case 8: botschannel.send ({files:["./images/gaku_matsuri_ssr.png"]}); break;
          case 9: botschannel.send ({files:["./images/gaku_newyear_ssr.png"]}); break;
          case 10: botschannel.send ({files:["./images/gaku_rehearsal_r.png"]}); break;
          case 11: botschannel.send ({files:["./images/gaku_rehearsal_sr.png"]}); break;
          case 12: botschannel.send ({files:["./images/gaku_rehearsal_ssr.png"]}); break;
          case 13: botschannel.send ({files:["./images/gaku_rehearsal_ur.png"]}); break;
          case 14: botschannel.send ({files:["./images/gaku_sweets_ssr.png"]}); break;
          case 15: botschannel.send ({files:["./images/gaku_wishes_sr.png"]}); break;
          case 16: botschannel.send ({files:["./images/gaku_wishes_ssr.png"]}); break;
          case 17: botschannel.send ({files:["./images/gaku_work_sr.png"]}); break;
          case 18: botschannel.send ({files:["./images/gaku_work_ssr.png"]}); break;
          case 19: botschannel.send ({files:["./images/gaku_xmasmagic_ssr.png"]}); break;
          case 20: botschannel.send ({files:["./images/gaku_academy_r.png"]}); break;
          case 21: botschannel.send ({files:["./images/gaku_academy_sr.png"]}); break;
          case 22: botschannel.send ({files:["./images/gaku_academy_ssr.png"]}); break;
          case 23: botschannel.send ({files:["./images/gaku_blackside_ssr.png"]}); break;
          case 24: botschannel.send ({files:["./images/gaku_daybreak_ssr.png"]}); break;
          case 25: botschannel.send ({files:["./images/gaku_kingpudding_ssr.png"]}); break;
          case 26: botschannel.send ({files:["./images/gaku_leopa_sr.png"]}); break;
          case 27: botschannel.send ({files:["./images/gaku_leopa_ssr.png"]}); break;
          case 28: botschannel.send ({files:["./images/gaku_marchen_ssr.png"]}); break;
          case 29: botschannel.send ({files:["./images/gaku_order_ssr.png"]}); break;
          case 30: botschannel.send ({files:["./images/gaku_rabbit_sr.png"]}); break;
          case 31: botschannel.send ({files:["./images/gaku_rabbit_ssr.png"]}); break;
          case 32: botschannel.send ({files:["./images/gaku_valentine_ssr.png"]}); break;
          case 33: botschannel.send ({files:["./images/gaku_valentinegreatescape_ssr.png"]}); break;
          case 34: botschannel.send ({files:["./images/gaku_whitedaysp_sr.png"]}); break;
          case 35: botschannel.send ({files:["./images/gaku_whitedaysp_ssr.png"]}); break;
          case 36: botschannel.send ({files:["./images/gaku_winterwonderland_sr.png"]}); break;
          case 37: botschannel.send ({files:["./images/gaku_winterwonderland_ssr.png"]}); break;
          case 38: botschannel.send ({files:["./images/gaku_xmasrock_ssr.png"]}); break;
          case 39: botschannel.send ({files:["./images/gaku_christmas_ssr.png"]}); break;
          case 40: botschannel.send ({files:["./images/gaku_gardentea_ssr.png"]}); break;
          case 41: botschannel.send ({files:["./images/gaku_mlullaby_ssr.png"]}); break;
          case 42: botschannel.send ({files:["./images/gaku_monster_sr.png"]}); break;
          case 43: botschannel.send ({files:["./images/gaku_monster_ssr.png"]}); break;
          case 44: botschannel.send ({files:["./images/gaku_ordinarydays_r.png"]}); break;
          case 45: botschannel.send ({files:["./images/gaku_ordinarydays_sr.png"]}); break;
          case 46: botschannel.send ({files:["./images/gaku_ordinarydays_ssr.png"]}); break;
          case 47: botschannel.send ({files:["./images/gaku_outdoorlive_sr.png"]}); break;
          case 48: botschannel.send ({files:["./images/gaku_outdoorlive_ssr.png"]}); break;
          case 49: botschannel.send ({files:["./images/gaku_outdoorlive_ur.png"]}); break;
          case 50: botschannel.send ({files:["./images/gaku_sparkle_ssr.png"]}); break;
          case 51: botschannel.send ({files:["./images/gaku_taiko_ssr.png"]}); break;
          case 52: botschannel.send ({files:["./images/gaku_taisho_ssr.png"]}); break;
          case 53: botschannel.send ({files:["./images/gaku_trgpolice_r.png"]}); break;
          case 54: botschannel.send ({files:["./images/gaku_trgpolice_sr.png"]}); break;
          case 55: botschannel.send ({files:["./images/gaku_trgpolice_ssr.png"]}); break;
          case 56: botschannel.send ({files:["./images/gaku_whiteday_ssr.png"]}); break;
          case 57: botschannel.send ({files:["./images/gaku_zodiac_ssr.png"]}); break;
         case 58: botschannel.send ({files:["./images/gaku_heavenlynut_ur.png"]}); break;
        }
      }

      if(msg.startsWith (prefix + "quote")) {
        number = 9;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: botschannel.send ("Yuki-san's good-looking and dainty. People's eyes are naturally drawn to him, and he's good at making an emotional impact. Compared to him, I'm not much of an actor at all..."); break;
          case 2: botschannel.send ("So, first I think I'll try stealing your attention. \nIf I shine brighter than Re:vale or anyone else, I should be able to capture the attention of a young producer like you.\nJust you wait."); break;
          case 3: botschannel.send ("You got the wrong person, I'm not as handsome as him."); break;
          case 4: botschannel.send ("No one else is this handsome, are they?"); break;
          case 5: botschannel.send ("Tenn and Ryuu are my precious partners, so of course we're out to win"); break;
          case 6: botschannel.send ("In other words, I guess he was trying to say my skin's so pale that even the decorations in the store stand out more? I don't think he's one to talk, though."); break;
          case 7: botschannel.send ("I want to talk to you more. Is that a burden?"); break;
          case 8: botschannel.send ("What I like about myself is everything.\nDon't get me wrong, I'm not narcissist. I just have a hard time dealing with self-hate, so I try to like myself as much as possible.\nNobody enjoys hating themselves, right?"); break;
          case 9: botschannel.send ("I'm sure there's people out there who hate me, but I'll still make the effort to like myself."); break;
          // case 10: botschannel.send (""); break;
          // case 11: botschannel.send (""); break;
       }
     }

    if (msg.startsWith ("i love you gaku")) {
        return botschannel.send("I love you too. I really mean it too, I wouldn't say it to anyone else.");
  }

    if (msg.startsWith ("i hate you gaku")) {
      return botschannel.send("Huh? Did I do something to make you mad at me?");
    }

  if (msg.includes ("udon")) {
    return botschannel.send("In my soba household?");
  }
  
  if (msg.startsWith ("gaku do not interact")) {
    return botschannel.send("<:puddibutsad:454874546735153153>");
  }
  
  if (msg.startsWith ("good morning gaku")) {
    return botschannel.send("Good morning. You were talking in your sleep, weren't you?");
  }

  if (msg.startsWith ("good night gaku")) {
    return botschannel.send("Good night. From now on, I want you to think of me.");
  }

  if (msg.startsWith ("gaku no")) {
    return botschannel.send("Gaku, yes.");
  }

  if (msg.startsWith ("hey gays")) {
    return botschannel.send("What about me?");
  }

  if(cmd ===`${prefix}help`){
  let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#a0a0a0")
    .addField("Commands:","**g!gaku** *<question>* | Ask him anything. \n**g!send** *<@user> <message>* | Send a DM to the mentioned user\n**g!scout** | Solo Yolo \n**g!quote** | Random quote\n**g!say** *<message>* | Have the bot say anything you want\n**g!help** | Displays this help message")
    .addField("Basic g!commands:", "mafia (alias:maf) || sobaman || dab || bothbomb || cat")
    .addField("Other commands:", "I love you Gaku  || I hate you Gaku || Udon || Good morning Gaku || Good night Gaku || Hey gays || Gaku do not interact")
    return botschannel.send(helpembed);
}

  if(cmd ===`${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#a0a0a0")
    .setThumbnail(bicon)
    .addField("Name:", bot.user.username)
    .addField("Twitter:", "https://twitter.com/Superbiael")
  return botschannel.send(botembed);
  }

  if(cmd === `${prefix}cat`){
    botschannel.send ({files:["./images/nya.png"]});
  }
  
  if(cmd === `${prefix}say`){
  let botmessage = args.join(" ");
  message.delete().catch();
  botschannel.send(botmessage);
}

  if(cmd === `${prefix}smooch`){
  return botschannel.send("I, uh, I didn't expect you to be bold like that. Here, let me show you how it's done.");
}

  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return botschannel.send("maf maf");
  }

  if(cmd === `${prefix}sobaman`){
    return botschannel.send("You got the wrong person, I'm not as handsome as him.");
  }

  if(cmd === `${prefix}dab`){
    return botschannel.send("//dabs away my worries while sitting in a Mercedes-Benz®");
  }

  if(cmd === `${prefix}bathbomb`){
    return botschannel.send("Delicous. Finally, some good fucking food.");
  }

});

bot.login(process.env.token);
