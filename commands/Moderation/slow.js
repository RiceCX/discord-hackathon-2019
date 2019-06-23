const Discord = require("discord.js");
exports.run = async (Bot, message, args) => {
  const bool = args[0];
  const secs = args[1];
  if (bool == "on") {
    console.log(secs);
    console.log(typeof secs);
    if (typeof parseInt(secs) != "number")
      return message.channel.send("Enter valid time(in seconds)!");
    message.channel.setRateLimitPerUser(secs).then(e => {
      message.channel.send(
        "This channel has been slowed down to:" + secs + "seconds per user."
      );
    });
  } else {
    message.channel.setRateLimitPerUser(0);
    message.channel.send("Slow mode has been cleared. 🎉🎉🎉");
  }
};
exports.help = {
  name: "slow",
  category: "Administration",
  description: "Bans the user specified.",
  usage: "ban [user]",
  permission: "BAN_MEMBERS",
  alias: "None"
};
module.exports.settings = {
  disabled: false
};
