const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("I'm gay, and can't read.");
   let replies = ["Yes... Wait no. Maybe I’ve said too much. ","That’s the way it should be (lol)","That won't be necessary.","Of course. Who do you think I am?", "What a sec, absolutely not!", "That's right, there's no way I could be wrong.","Hell no!", "Not in this soba household."];

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
