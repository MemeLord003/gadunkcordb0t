exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var images = ["h","h2"];
  var rand = Math.floor(Math.random() * images.length);
  var randomImage = images[rand];

  console.log( randomImage ) // The one to send
  message.channel.send(randomImage);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "img",
  category: "Miscelaneous",
  description: "Posts a random image [WIP]",
  usage: "img"
};
