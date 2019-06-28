module.exports = async (Bot, action, message, msg, user) => {
  switch (action) {
    case "firstTimeMsg":
      ftm(Bot, message);
      break;
    case "warn":
      console.log("///// GOT TO WARN");
      warn(Bot, message, msg, user);
      break;
    case "check":
      check(Bot, message);
      break;
    default:
  }
};

const ftm = async () => {};

const warn = async (Bot, message, msg, user) => {
  // Bot.modules.ensure(`${msg.guild.id}-${user.id}`, {
  //   xp: {
  //     user: msg.author.id,
  //     guild: msg.guild.id,
  //     points: 0,
  //     level: 1
  //   },
  //   warns: {
  //     warnings: []
  //   }
  // });
  const auser = Bot.modules.get(`${msg.guild.id}-${user.id}`);
  console.log(auser);
  const json = JSON.stringify({
    time: Date.now().toLocaleString(),
    user: user.id,
    guild: msg.guild.id,
    reason: message
  });

  console.log(auser);
  if (
    auser.warns.warnings.length >
    Bot.servercfg.get(msg.guild.id, "moduleConfigs").warning.timesBeforeKick
  ) {
    let text =
      "⚠⚠⚠⚠⚠⚠ \nUh oh! You've been kicked off **" +
      msg.guild.name +
      "** !\n Don't fear though! You can still join back if you get an invite!\n \nHere are the reasons why you've been kicked from the server.\n \n";
    let counter = 1;
    auser.warns.warnings.forEach(e => {
      const b = JSON.parse(e);
      console.log(b);
      var a = text.concat(`**${counter}**. ${b.reason}\n`);
      text = a;
      counter++;
    });
    await user.send(text);
    Bot.modules.get(`${msg.guild.id}-${user.id}`, "warns.warnings").length = 0;
    return setTimeout(() => user.kick(), 5000);
  } else {
    const i = Bot.modules.get(`${msg.guild.id}-${user.id}`, "warns.warnings");
    i.push(json);
    console.log(auser.warns.warnings);
  }
};

const check = async () => {};
/* 
  
  Warnings {
    time: [Date]
    user: [Discord.js User] 
    userID: [Discord.js User.ID]
    guild: [Guild.ID]
    reason: [String]
  }
  
  */
