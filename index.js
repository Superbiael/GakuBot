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
  bot.user.setActivity("Associate", {type:"LISTENING"});
});

bot.on('message', message => {
//   if (message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = 'g!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    msg = message.content.toLowerCase();
    mention = message.mentions.users.first();

    let botschannel = message.guild.channels.find(`name`, "bot-channel");
    if(!botschannel) return;

    if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        return mention.send (mentionMessage);
      }

    if (msg.startsWith (prefix + "scout")) {
        number = 71;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        return botschannel.send ({files: ["./scout/" + imageNumber + ".png"]})
      }
  
//    if (msg.startsWith (prefix + "scout")) {
//     return botschannel.send ({files:["./scout/70.png"]});
//   }

    if(msg.startsWith (prefix + "quote")) {
        number = 25;
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
          case 10: botschannel.send ("No matter how thick the fog that blocks the way is, this light will not disappear, nor will I let it. I'll clear everything that blocks the way and reach far and high."); break;
          case 11: botschannel.send ("When are you free? Make some time, I'll take you to all your favorite places."); break;
          case 12: botschannel.send ("I won't let you get bored, not even for an instant. I promise to give you the best day of your life. How about it? Sound good?"); break;
          case 13: botschannel.send ("If it's Yuki-san, he can do it. Definitely. He's a great person. \nHe's a genius. Everyone knows about it, and he knows more than anyone else, right?"); break;
          case 14: botschannel.send ("I've been working on my plans to drink with Yuki-san, but we hven't decided on a day yet.\nAppearntly he's got time on his schedule, but he's being all vague about it. He told me he should have the time, but not if he's late on their new song. \nWhen I tried getting him to at least eat dinner with me, he wouldn't be straight with me."); break;
          case 15: botschannel.send ("This light will never fade. It'll drive away everything that blogs your path, to the ends of the Earth, high and far."); break;
          case 16: botschannel.send ("As always thanks. I'm thankful you care about us. But, we won't lose!"); break;
          case 17: botschannel.send ("No matter what the future's like, I'll keep being a part of TRIGGER with Tenn and Ryuu."); break;
          case 18: botschannel.send ("*What's happen?*"); break;
          case 19: botschannel.send ("I don't trust Yuki with my Mercedes-Benz®..."); break;
          case 20: botschannel.send ("Do you like braids that much? Just remember that I'm not a huge fan myself (lol)"); break;
          case 21: botschannel.send ("I know it might be weird to you if I say this, but it's like you've given meaning to why I was born."); break;
          case 22: botschannel.send ("If I'm gonna be a man, then I want to be a cool man. As ambitious as this sounds I want to be able to protect not only TRIGGER or IDOLiSH7, bur Re:vale, too."); break;
          case 23: botschannel.send ("I want to eat noodles when they're at their best.\nThat's why I wnat to cook them right down to the exact second. The real battle begins when the kitchen timer rings.\nI immediately have to power out the boiling water, add the broth, and finish it up with toppings. Even a couple of extra hands aren't enough to do that."); break;
          case 24: botschannel.send ("When we debuted, I was more focused on keeping my old man satisfied than I was on enjoying my work.\nBut while standing on stage, spending time with my friends and fans, I learned to have fun doing it too. Now it's something I can't live without. It's the best job ever, one that really lets me feel like myself."); break;
          case 25: botschannel.send ("I'll never quit TRIGGER, or being an idol. No matter who tells me to. \nI want to keep trying until I'm at my limit, no, even past my limits.\nWith this life, and with TRIGGER."); break;
       }
     }

    if(cmd === `${prefix}cat`){
       return botschannel.send ({files:["./images/nya.png"]});
     }

    if(msg.startsWith (prefix + "cowboy")) {
       number = 16;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: botschannel.send ("tfw they always ask yeehaw but never hawyee."); break;
         case 2: botschannel.send ("Ya got the wrong fella, I ain't as handsome as 'im."); break;
         case 3: botschannel.send ("Yeehaw 🤠"); break;
         case 4: botschannel.send ("What in tarnation!"); break;
         case 5: botschannel.send ("There's a snake in my boot!"); break;
         case 6: botschannel.send ("They call me 12 guns Yaotome on the account of my 12 guns."); break;
         case 7: botschannel.send ("Ain’t nuthin’ like ridin’ a fine horse in new country."); break;
         case 8: botschannel.send ("A true cowboy knows love, pain and shame but never cares about fame."); break;
         case 9: botschannel.send ("Don't worry about bitin' off more'n you can chew; your mouth is probably a whole lot bigger'n you think"); break;
         case 10: botschannel.send ("I took to the life of a cowboy like a horse takes to oats."); break;
         case 11: botschannel.send ("First buy a cowboy hat and boots. Then you're on your way to being a Texan."); break;
         case 12: botschannel.send ("No man should have cowboys boots in his wardrobe. That's fair enough, isn't it? Unless you're a cowboy, of course."); break;
         case 13: botschannel.send ("Giddy up, I’m right behind ya'"); break;
         case 14: botschannel.send ("Well, we better head ’em up and move ’em out and get back to town. Pony up!"); break;
         case 15: botschannel.send ("The best way to describe a cowboy Is mud, blood, guts, and glory."); break;
         case 16: botschannel.send ("You've yeed your last haw."); break;
      }
    }

    if (msg.startsWith ("gaku do not interact")) {
      return botschannel.send("<:puddibutsad:454874546735153153>");
  }

  if (msg.startsWith ("rich people do not interact")) {
  return botschannel.send("I'll pay you $100 if you let me interact.");
}

    if (msg.startsWith ("i love you gaku")) {
        number = 5;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
          case 1: botschannel.send ("I love you too. I really mean it, I wouldn't say it to anyone else."); break;
          case 2: botschannel.send ("Hey, what's with that? I'm starting to feel embarrassed..."); break;
          case 3: botschannel.send ("Hold up.\nIt's not fair if you suddenly come out and say something like that...\nI don't think my heart can handle this..."); break;
          case 4: botschannel.send ("This feels...\nkind of embarrassing..."); break;
          case 5: botschannel.send ("Thanks, let's spend another awesome year together. I promise to take you to even greater heights. Just keep on following me!"); break;
        }
      }

    if (msg.startsWith ("i hate you gaku")) {
      number = 2;
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
      case 1: botschannel.send ("Huh? Did I do something to make you mad at me?"); break
      case 2: botschannel.send ("That's harsh..."); break;
    }
  }

    if (msg.startsWith ("hey hetero")) {
      return botschannel.send("I beg your pardon?");
    }

    if (msg.startsWith ("then beg")) {
      return botschannel.send ("What? No way.");
    }

    if (msg.startsWith ("udon")) {
      return botschannel.send("In my soba household?");
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
  
//   if (msg.startsWith ("And Yaotome.")) {
//       return botschannel.send("What about me?");
//   }

    if(cmd ===`${prefix}help`){
      let helpembed = new Discord.RichEmbed()
      .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
      .setColor("#a0a0a0")
      .addField("Commands:","**g!gaku** *<question>* | Ask him anything. \n**g!send** *<@user> <message>* | Send a DM to the mentioned user\n**g!scout** | Solo Yolo \n**g!quote** | Random quote\n**g!say** *<message>* | Have the bot say anything you want\n**g!help** | Displays this help message")
      .addField("Basic g!commands:", "mafia (alias:maf) || sobaman || dab || bathbomb || cat || cowboy")
      .addField("Other commands:", "I love you Gaku  || I hate you Gaku || Udon || Good morning Gaku || Good night Gaku || Hey gays || Gaku do not interact || Hey Hetero")
    return botschannel.send(helpembed);
}

    if(cmd ===`${prefix}botinfo`){
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#a0a0a0")
      .setThumbnail(bicon)
      .addField("# of quotes:", "21")
      .addField("Scout:", "66 cards")
    return botschannel.send(botembed);
  }

   if (msg.startsWith (prefix + "say")) {
      let botmessage = args.join(" ");
      message.delete().catch();
      return message.channel.send(botmessage);
    }

   if(msg.startsWith (prefix + "smooch")) {
    return botschannel.send("I, uh, I didn't expect you to be bold like that. Here, let me show you how it's done.");
}

  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return botschannel.send("maf maf");
  }

  if(cmd === `${prefix}sobaman`){
    number = 5;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
    case 1: botschannel.send ("You got the wrong person, I'm not as handsome as him."); break;
    case 2: botschannel.send ("Hello! It's soba yanamura!"); break;
    case 3: botschannel.send ("Do you like Gaku Yaotome? \nI'm sure someone like you would be able to get Yaotome to fall for you."); break;
    case 4: botschannel.send ("Thank you for your continued patronage."); break;
    case 5: botschannel.send ("I won't let you be bored, not even for an instant.\nI, a plain old soba shop worker, promise to give you the best day of your life. How about it? Sound good?")
  }
}

   if(msg.startsWith (prefix + "dab")) {
    return botschannel.send("//dabs away my worries while sitting in a Mercedes-Benz®");
  }

   if(msg.startsWith (prefix + "bathbomb")) {
    return botschannel.send("Delicous. Finally, some good fucking food.");
  }

});
bot.login(process.env.token);
