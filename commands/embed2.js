exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
const embed = {
  "title": "This is a Test Embed, Woah",
  "description": "Super Cool Epic Woah",
  "url": "https://discordapp.com",
  "color": 15158185,
  "timestamp": "2018-05-13T10:13:29.150Z",
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "Sent by Blunt-Bot"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "image": {
    "url": "https://t7.rbxcdn.com/4e5d35afec7fc4dbad4c72e03e0fad4d"
  },
  "author": {
    "name": "author name",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  }
channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "embed2",
  category: "Miscelaneous",
  description: "another embed test, woah.",
  usage: "embed2"
};
