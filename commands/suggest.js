exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send({embed: {
  color: 3447003,
  description: "Want to suggest a command? DM either @Navag8r#7510 or @Gadunk#6114."
}});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "suggest",
  category: "Miscelaneous",
  description: "Details on suggesting your own commands.",
  usage: "suggest"
};
