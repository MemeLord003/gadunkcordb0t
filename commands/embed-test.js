exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "embed-test",
  category: "Miscelaneous",
  description: "uu2.",
  usage: "embed-test"
};
