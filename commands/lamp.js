exports.run = (client, message, [mention, ...reason]) => {
  let punches = [
                "https://cdn.discordapp.com/attachments/383290304402423809/498168331774459925/Fancy-Lamp-PNG-Picture.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498168364406013954/latest.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498168603569553408/Lamp-PNG-Clipart.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498168532136361985/Lamp-PNG-File.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498168461483180042/Lamp-PNG.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498168423168344104/Decorative-Lamp-PNG-Photo.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169567378407424/TristenFloorLamp.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169615784869888/eglo-90873-firmo.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169664346783754/001-02101-bl2_black_product.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169758727012375/png-oil-lamp-catalog-petrol-lamps-2935.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169790058201108/50092m-Table-Lamp-png.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169878713466900/elegant-table-lamps-5.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169947877539850/0001.png",
                "https://cdn.discordapp.com/attachments/383290304402423809/498169978508410880/Redstone_Lamp.png",
                "https://static1.fjcdn.com/thumbnails/comments/Open+this+pit+up+_49776d944aefbceeb152713ded2918ce.gif"
  ];

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
  name: "lamp",
  category: "Images",
  description: "lamp",
  usage: "lamp"
};
