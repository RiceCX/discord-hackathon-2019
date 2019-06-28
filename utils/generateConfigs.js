module.exports = (Bot, msg, user) => {
  // check if server has config if not generate one.
  Bot.servercfg.ensure(msg.guild.id, {
    guild: {
      name: msg.guild.name,
      id: msg.guild.id,
      owner: msg.guild.ownerID,
      joinedGuild: msg.guild.joinedAt
    },
    modules: {
      xp: true,
      warning: true
    },
    moduleConfigs: {
      xp: {},
      warning: {
        timesBeforeKick: 5,
        timesBeforeBan: 10
      }
    }
  });
  Bot.modules.ensure(`${msg.guild.id}-${user.id}`, {
    xp: {
      user: msg.author.id,
      guild: msg.guild.id,
      points: 0,
      level: 1
    },
    warns: {
      warnings: []
    }
  });

  /* 
  
  Warnings {
    time: [Date]
    user: [Discord.js User] 
    userID: [Discord.js User.ID]
    guild: [Guild.ID]
    reason: [String]
  }
  
  */
};
