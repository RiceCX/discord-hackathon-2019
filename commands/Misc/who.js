const Discord = require("discord.js");
const randomHex = require("../../utils/randomHex");
exports.run = async (Bot, message, args) => {
  const member = message.mentions.members.first() || message.member;
  const roles = [];
  await member.roles.map(c => {
    roles.push(c.name);
  });
  const embed = new Discord.RichEmbed();
  embed.setAuthor(member.user.username, member.user.displayAvatarURL);
  embed.setColor(member.displayHexColor);
  embed.setThumbnail(member.user.displayAvatarURL);
  embed.addField(
    "Username",
    member.user.username + "#" + member.user.discriminator
  );
  embed.addField(
    "Nickname",
    member.nickname === null ? "None" : member.nickname
  );
  embed.addField("User ID", member.id);
  embed.addField("Joined Server At", member.joinedAt);
  embed.addField("Joined Discord on", member.user.createdAt);
  embed.addField("Roles", roles.join(", "));
  embed.addBlankField();
  embed.setTimestamp();
  message.channel.send(embed);
};
exports.help = {
  name: "who",
  category: "Productivity",
  description: "Bans the member specified.",
  usage: "ban [member]",
  permission: "None",
  alias: "whois"
};
module.exports.settings = {
  disabled: false
};
