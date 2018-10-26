exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var images = ["hug1","hug2"];
  var rand = Math.floor(Math.random() * images.length);
  var randomImage = images[rand];

  console.log( randomImage ) // The one to send
      const taggedUser = message.mentions.users.first();

    message.channel.send(`You hugged: ${taggedUser.username}`)
    message.channel.send(randomImage);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hug",
  category: "Images",
  description: "Why did you ask for this? [WIP]",
  usage: "hug"
};
