module.exports = async (client, guild) => {
  let channelID;
  let channels = guild.channels;
  channelLoop: for (let c of channels) {
    let channelType = c[1].type;
    if (channelType === "text") {
      channelID = c[0];
      break channelLoop;
    }
  }

  let channel = client.channels.get(guild.systemChannelID || channelID);
  channel.send(
    `Thanks for inviting me into this server! I'm **${
      client.user.username
    }**. \nYou can view my commands by doing \`show me help\`. Every command starts with \`show me\`.\nI try my best to increase the server's activity by providing **music**, **meme commands**, and many more. \nAll bot settings can be accessed by \`show me settings\` or online at: https:// \n**|** Check out my music commands with \`show me help\`\n`
  );
};
