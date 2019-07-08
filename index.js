require("dotenv").config();
const Discord = require("discord.js");
const chalk = require("chalk");
const fs = require("fs");
const client = new Discord.Client();
const Enmap = require("enmap");
// Utils
const handleCommands = require("./utils/handleCommands");

// Ill be using a simple commands and event loader
client.commands = new Enmap();
client.aliases = new Enmap();
client.categories = new Enmap();
client.servercfg = new Enmap({
  name: "Server configs",
  fetchAll: false,
  autoFetch: true
}); // Persistant
client.modules = new Enmap({
  name: "Modules",
  fetchAll: false,
  autoFetch: true
});
client.youtubeQueue = new Enmap();
// Event Loader
fs.readdir("./events", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  console.log(chalk.green(`Loaded ${files.length} events!`));
});
handleCommands(client);
client.login(process.env.DISCORD_TOKEN);
