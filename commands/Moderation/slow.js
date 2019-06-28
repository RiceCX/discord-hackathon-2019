const Discord = require("discord.js");
const moment = require("moment");
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
        `This channel has been slowed down to: ${moment()
          .startOf("day")
          .seconds(secs)
          .format("H")}hrs:${moment()
          .startOf("day")
          .seconds(secs)
          .format("m")}minutes:${moment()
          .startOf("day")
          .seconds(secs)
          .format("s")}seconds per user. `
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
  usage: "slow [on/off] [seconds]",
  permission: "MANAGE_CHANNELS",
  alias: "None"
};
module.exports.settings = {
  disabled: false
};
