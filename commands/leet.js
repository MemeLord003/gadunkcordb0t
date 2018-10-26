exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (args.length < 1) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
     return message.reply("Please input the text you want to leet-ify");
  }

  args = args.join(' ');
  args = args.replace(/a/ig, '4');
  args = args.replace(/e/ig, '3');
  args = args.replace(/l/ig, '1');
  args = args.replace(/o/ig, '0');
  args = args.replace(/s/ig, '5');
  args = args.replace(/t/ig, '7');

  message.channel.send({
    embed: {
      color: 7410563,
      title: 'Leet Text',
      description: args
    }
  }).catch(e => {
     return message.reply("ERROR");
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "leet",
  category: "Random",
  description: "5K71P7 K1DD13.",
  usage: "leet"
};
