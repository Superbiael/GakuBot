const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#a0a0a0")
  .addField("g!commands:", "mafia (alias:maf) || sobaman || dab")
  .addField("Other commands:", "Udon || ")
  .addField("8ball command:","g!gaku <I haven't put in Gaku's 8ball command yet>");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "gakuhelp"
}
