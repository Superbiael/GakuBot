const Discord = require("discord.js");

module.exports.run = async (bot,message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Do not include < > when using commands.")
  .setColor("#a0a0a0")
  .addField("y!commands:", "mafia (alias:maf) || leaf || ryo || order || car || c - ss rank")
  .addField("Other commands:", "I can't believe Ryo is dead || I'm gonna munch || Yuppi || I love you Yuki || Good morning Yuki || Good night Yuki || Yuki if you're out there || Pika~")
  .addField("8ball command:","y!yuki <question> | Disabled")
  .addField("Send DM:", "g!send @user <message> | Disabled");

  message.channel.send(helpembed);
}

module.exports.help = {
  name: "gakuhelp"
}
