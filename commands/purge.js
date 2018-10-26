const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "purge",
  category: "Administration",
  description: "Purges X Messages.",
  usage: "purge <number>"
};