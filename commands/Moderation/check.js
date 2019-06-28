const Discord = require("discord.js");
const randomHex = require("../../utils/randomHex");
exports.run = async (Bot, message, args) => {
  const action = args[1];
  const user = message.mentions.members.first();

  switch (action) {
    case "warns":
      const info = Bot.modules.get(`${message.guild.id}-${user.id}`);
      console.log(info);
      const a = info.warns.warnings.map((val, index) => {
        return `${index}-${val.reason}`;
      });
      console.log(a);
      message.channel.send(`\`\`\`${info.warns.warnings} \`\`\``);
      break;
    default:
      message.channel.send("nein");
  }
};
exports.help = {
  name: "check",
  category: "Moderation",
  description: "Bans the user specified.",
  usage: "ban [user]",
  permission: "MANAGE_MEMBERS",
  alias: "None"
};
module.exports.settings = {
  disabled: false
};
