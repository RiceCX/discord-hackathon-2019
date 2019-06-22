const generateInvite = require("../utils/generateInvite");
module.exports = async client => {
  console.log(await generateInvite(client));
  console.log(
    `${client.user.username}#${
      client.user.discriminator
    } has been logged into discord!`
  );
  console.log(`[INFO] Bot is hosting: ${client.guilds.size} guilds`);
  console.log(`[INFO] Bot is listening to: ${client.users.size} users`);
  client.guilds.size > 20
    ? console.log("Bot is doing great! 20+ guilds")
    : console.log(`Only ${20 - client.guilds.size} more guilds to go!`);
};
