const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  var resMsg = await message.channel.send(
    "Ping is being appreciated... :bar_chart:"
  );
  const embed = new Discord.RichEmbed();
  embed.addField("❤ " + client.ping + "ms", "\u200B");
  embed.addField(
    "⌚ " +
      Math.round(
        resMsg.createdTimestamp - message.createdTimestamp - client.ping
      ) +
      "ms",
    "\u200B"
  );
  embed.setColor("#23272A");
  await resMsg.delete();
  message.channel.send(embed);
};
exports.help = {
  name: "ping",
  description: "Ping? ... Pong!",
  usage: "ping",
  permission: "None",
  alias: "heartbeat",
  icon:
    "https://library.kissclipart.com/20181005/ahe/kissclipart-ping-icon-png-clipart-computer-icons-fea67d8408cb0f86.png"
};

module.exports.settings = {
  disabled: false
};
