const Discord = require("discord.js");
const craft = require("../../modules/craftAPI");
exports.run = async (Bot, message, args) => {
  craft(message);
};
exports.help = {
  name: "craft",
  description: "Dank™",
  usage: "dank.",
  permission: "None",
  alias: "commands"
};

module.exports.settings = {
  disabled: false
};
