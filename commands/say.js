exports.run = (client, message, [mention, ...reason]) => {
if(command === "say"){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Makes the bot say something.",
  usage: "say"
};
