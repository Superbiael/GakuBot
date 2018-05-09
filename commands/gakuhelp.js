const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .addDescription("Do not include < > when using commands.")
  .setColor("#a0a0a0")
  .addField("g!commands:", "mafia (alias:maf) || sobaman || dab")
  .addField("Other commands:", "udon || gakkyun || good morning gaku || good night gaku")
  .addField("8ball command:","g!gaku <this isn't a command yet>")
  .addField("Send DM:", "g!send <@user> <message> | Currently disabled ");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "gakuhelp"
}
