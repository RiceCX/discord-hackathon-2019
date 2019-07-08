const Discord = require("discord.js");
const snekfetch = require("snekfetch");
exports.run = async (Bot, message, args) => {
  const user = message.mentions.members.first();
  if (!user) return message.channel.send("Mention a user!");
  const url = user.user.displayAvatarURL;
  console.log(url);
  const get = await snekfetch.get("https://dankmemer.services/api/airpods", {
    query: {
      avatar1: url
    },
    headers: {
      Authorization:
        "7bedf5abd36c6dd16addc9522b3193e75250bafe22e820fd9aa5361e10a10e85"
    }
  });
  message.channel.send(new Discord.Attachment(get.body));
};
exports.help = {
  name: "airpods",
  description: "Dank™",
  usage: "[User]",
  permission: "None",
  alias: ""
};

module.exports.settings = {
  disabled: false
};
