exports.run = (client, message, [mention, ...reason]) => {
  let punches = ["https://static1.fjcdn.com/thumbnails/comments/Open+this+pit+up+_49776d944aefbceeb152713ded2918ce.gif"];

  message.channel.send({
    embed: {
      color: 7410563,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    return console.log("You broke it you egg.");
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "moth",
  category: "Images",
  description: "*angry moth noises*",
  usage: "moth"
};
