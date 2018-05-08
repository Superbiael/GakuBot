const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#a0a0a0")
  .addField("g!commands:", "mafia (alias:maf) || sobaman || dab")
  .addField("Other commands:", "udon || gakkyun")
  .addField("8ball command:","g!gaku <this isn't a command yet>");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "gakuhelp"
}
