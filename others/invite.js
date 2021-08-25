const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using DJ Mickey? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setImage(`https://media.discordapp.net/attachments/874184545677738005/875575728291328030/standard5.gif`)
      .setAuthor('DJ Mickey','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add DJ Mickey to your discord server` `https://discord.com/api/oauth2/authorize?client_id=863338156527321120&permissions=49572160&scope=bot`, true)
      

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};