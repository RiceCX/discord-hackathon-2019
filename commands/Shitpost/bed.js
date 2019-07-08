const Discord = require("discord.js");
const snekfetch = require("snekfetch");
exports.run = async (Bot, message, args) => {
  const user1 = message.mentions.members.first();
  const user2 = message.mentions.members.last();
  if (user1 == user2) return message.channel.send("Mention second user");
  const get = await snekfetch.get("https://dankmemer.services/api/bed", {
    query: {
      avatar1: user1.user.displayAvatarURL,
      avatar2: user2.user.displayAvatarURL
    },
    headers: {
      Authorization:
        "7bedf5abd36c6dd16addc9522b3193e75250bafe22e820fd9aa5361e10a10e85"
    }
  });
  message.channel.send(new Discord.Attachment(get.body));
};
exports.help = {
  name: "bed",
  description: "Dank™",
  usage: "[User] | [User2]",
  permission: "None",
  alias: ""
};

module.exports.settings = {
  disabled: false
};
