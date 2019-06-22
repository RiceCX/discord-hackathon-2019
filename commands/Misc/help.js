const Discord = require("discord.js");
exports.run = async (Bot, message, args) => {
  if (args[0]) {
    return showCommandHelp(Bot, message, args);
  } else {
    return showHelp(Bot, message);
  }
};
exports.help = {
  name: "help",
  description: "Dank™",
  usage: "dank.",
  permission: "None",
  alias: "commands"
};

module.exports.settings = {
  disabled: false
};
const showCommandHelp = async (Bot, message, args) => {
  const command = args[0];
  console.log(command);
  // making discord embed
  const embed = new Discord.RichEmbed();
  // FInd command
  try {
    Bot.commands
      .filter(c => c.command.help.name === args[0])
      .map(e => {
        const command = e.command.help;

        embed.setAuthor("Command Name: " + command.name, command.icon);
        embed.setThumbnail(command.icon);
        embed.setColor(
          "#" +
            Math.random()
              .toString(16)
              .slice(2, 8)
              .toUpperCase()
        );
        embed.addField("Name", command.name);
        embed.addField("Description", command.description);
        embed.addField("Usage", command.usage);
        embed.addField("Permissions", command.permission);
        embed.addField("Alias", command.alias);
        embed.setTimestamp(Date.now());
      });
  } catch (e) {}
  if (embed.timestamp === undefined) {
    console.log(embed);
    return message.author.send("No command found 😥").then(msg => {
      setTimeout(() => msg.delete(), 5000);
    });
  } else {
    return message.author.send(embed);
  }
};

const showHelp = async (Bot, message) => {
  let help =
    "```Commands List``` \nUse `show me help [command_name]` for more information about that command.\n \n";
  let counter = 1;
  await Bot.categories.get("array").forEach(async e => {
    var a = help.concat(
      `**${counter}**. ${e} **-** ${commandsInCategory(e)} \n`
    );
    help = a;
    counter++;
  });
  message.author.send(help);
  function commandsInCategory(cat) {
    let string = "";
    Bot.commands
      .filter(c => c.category == cat)
      .map(c => {
        var nString = string.concat(`\`${c.command.help.name}\` `);
        string = nString;
      });
    return string;
  }
};
// if (Bot.categoryArr.includes(cat)) {
//   let cChooser = Bot.commands
//     .filter(c => c.help.category == cat)
//     .map(c => {
//       return c;
//     })
//     .forEach(c => {
//       let embed = new Discord.RichEmbed()
//         .setAuthor(`Category: ${cat}`, message.author.avatarURL)
//         .setColor(
//           "#" +
//             Math.random()
//               .toString(16)
//               .slice(2, 8)
//               .toUpperCase()
//         )
//         .addField("Command Name", c.help.name)
//         .addField("Description", c.help.description)
//         .addField("Alias", c.help.alias)
//         .addField("Category", c.help.category)
//         .addField("Permission Needed", c.help.permission)
//         .addField("Is Disabled?", c.settings.disabled)
//         .setFooter("Automatically Generated.");
//       message.author.send(embed);
//       //    console.log(`${c.help.name}-${c.help.alias}`)
//     });
// }
