exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var images = ["h","h2"];
  var rand = Math.floor(Math.random() * images.length);
  var randomImage = images[rand];

  console.log( randomImage ) // The one to send

const embed = new Discord.RichEmbed()
  .setTitle("Hug")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(2500748)
  .setFooter("die :^)", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField(".");

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hugembed",
  category: "Images",
  description: "Doesn't work, give me time. [WIP]",
  usage: "hugembed"
};
