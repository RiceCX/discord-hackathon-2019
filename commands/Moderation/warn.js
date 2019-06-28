const Discord = require("discord.js");
const moment = require("moment");
const ensureConfigs = require("../../utils/generateConfigs");
const warn = require("../../modules/warn");
exports.run = async (Bot, message, args) => {
  const user = message.mentions.members.first(); // This might cause issues due to it being a Guild Member, not a User. (Idk might not :shrug: )
  if (!user) return message.reply("Theres no one to warn 🤷‍");
  console.log(user.kickable);
  if (!user.kickable || !user.bannable)
    return message.reply("You can't warn that person dummy");
  const reason = args.slice(1).join(" ");
  console.log(reason);
  ensureConfigs(Bot, message, user);
  warn(Bot, "warn", reason, message, user);
};
exports.help = {
  name: "warn",
  category: "Moderation",
  description: "Bans the user specified.",
  usage: "warn [action] [arguments]",
  permission: "MANAGE_CHANNELS",
  alias: "None"
};
module.exports.settings = {
  disabled: false
};
