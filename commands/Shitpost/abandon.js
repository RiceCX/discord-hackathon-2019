const Discord = require("discord.js");
const snekfetch = require("snekfetch");
exports.run = async (Bot, message, args) => {
  const text = args.slice(0).join(" ");
  if (text.length > 100 || text.length < 1)
    return message.channel.send(
      "Enter text that is greater than 1 letter but less than 100."
    );
  const get = await snekfetch.get("https://dankmemer.services/api/abandon", {
    query: {
      text: text
    },
    headers: {
      Authorization:
        "7bedf5abd36c6dd16addc9522b3193e75250bafe22e820fd9aa5361e10a10e85"
    }
  });
  message.channel.send(new Discord.Attachment(get.body));
};
exports.help = {
  name: "abandon",
  description: "Dank™",
  usage: "[text]",
  permission: "None",
  alias: ""
};

module.exports.settings = {
  disabled: false
};
