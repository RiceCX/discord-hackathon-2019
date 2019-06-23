const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  client.emit(args[0]);
};
exports.help = {
  name: "triggerevents",
  description: "Ping? ... Pong!",
  usage: "ping",
  permission: "ADMINISTRATOR",
  alias: "te"
};

module.exports.settings = {
  disabled: false
};
