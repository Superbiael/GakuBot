const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("I'm gay, and can't read.");
   let replies = ["Not in this soba household."];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("#a0a0a0")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   message.channel.send(ballembed);
}

module.exports.help = {
  name:"gaku"
}
