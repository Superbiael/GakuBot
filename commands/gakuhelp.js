const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands.")
  .setColor("#a0a0a0")
  .addField("g!commands:", "mafia (alias:maf) || sobaman || dab ")
  .addField("Other commands:", "Udon || Good morning Gaku || Good night Gaku || Hey gays")
  .addField("8ball command:","g!gaku <question> | Disabled")
  .addField("Send DM:", "g!send @user <message> | Requires administrator permissions to delete command message after sending DM");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "gakuhelp"
}
