const { Utils } = require("discord.js");
const Youtube = require("simple-youtube-api");
const youtube = new Youtube(process.env.API_YOUTUBE);
const handleVideo = require("../../utils/handleVideos");
exports.run = async (Bot, msg, args) => {
  const searchString = args.slice(0).join(" ");
  const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
  Bot.youtubeQueue.ensure(msg.guild.id, new Map());
  const queue = Bot.youtubeQueue.get(msg.guild.id);
  const voiceChannel = msg.member.voiceChannel;
  if (!voiceChannel)
    return msg.channel.send(
      "I'm sorry but you need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(msg.client.user);
  if (!permissions.has("CONNECT")) {
    return msg.channel.send(
      "I cannot connect to your voice channel, make sure I have the proper permissions!"
    );
  }
  if (!permissions.has("SPEAK")) {
    return msg.channel.send(
      "I cannot speak in this voice channel, make sure I have the proper permissions!"
    );
  }

  if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    const playlist = await youtube.getPlaylist(url);
    const videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
      const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
      await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }
    return msg.channel.send(
      `✅ Playlist: **${playlist.title}** has been added to the queue!`
    );
  } else {
    try {
      var video = await youtube.getVideo(url);
    } catch (error) {
      try {
        var videos = await youtube.searchVideos(searchString, 10);
        let index = 0;
        msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join("\n")}
Please provide a value to select one of the search results ranging from 1-10.
					`);
        // eslint-disable-next-line max-depth
        try {
          var response = await msg.channel.awaitMessages(
            msg2 => msg2.content > 0 && msg2.content < 11,
            {
              maxMatches: 1,
              time: 10000,
              errors: ["time"]
            }
          );
        } catch (err) {
          console.error(err);
          return msg.channel.send(
            "No or invalid value entered, cancelling video selection."
          );
        }
        const videoIndex = parseInt(response.first().content);
        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
      } catch (err) {
        console.error(err);
        return msg.channel.send("🆘 I could not obtain any search results.");
      }
    }
    return handleVideo(Bot, video, msg, voiceChannel);
  }
};

exports.help = {
  name: "play",
  description: "Dank™",
  usage: "dank.",
  permission: "None",
  alias: "commands"
};

module.exports.settings = {
  disabled: false
};
