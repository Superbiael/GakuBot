const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("Did you say something?");
   let replies = [
  "Yes... no... looks like I said too much (lol).",
   "That's the way it should be (lol)",
   "Of course. Who do you think I am?",
   "That won't be necessary.",
   "Hm... wait a second, you shouldn't be asking me about this!",
   "Wouldn't it be better if you decided on your own (lol).",
   "Hell no!",
   "Huh... What's with that (lol)",
   "Huh? leave it to me.",
   "No, don't be ridiculous.",
   "That's right (lol).",
   "My answer is \nIt's a secret.",
  ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setColor("#a0a0a0")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   let botschannel = message.guild.channels.find(`name`, "idolbot7");
   if(!botschannel) return message.channel.send("Couldn't find bot channel.");
   message.channel.send(ballembed);
}

module.exports.help = {
  name:"gaku"
}
