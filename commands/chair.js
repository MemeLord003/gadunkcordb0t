/**
 * @file punch command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.run = (client, message, [mention, ...reason]) => {
  let punches = [
                'http://pngimg.com/uploads/chair/chair_PNG6893.png',
                "http://pngimg.com/uploads/chair/chair_PNG6843.png",
                "https://purepng.com/public/uploads/large/purepng.com-chairchairfurnituresupported-by-legsseatdeck-chairseat-of-learning-1701527929299e0w8e.png",
                "http://www.pngmart.com/files/7/Club-Chair-PNG-Image.png",
                "https://static1.squarespace.com/static/53fd9986e4b02e9c3cf583d1/53fdecade4b070b8a2ea8591/59cd8537be42d6b0846533c0/1507289511702/Front+Blond+Deer+Chair.png?format=500w",
                "https://cdn.fredericia.com/Perfion/Image.aspx?id=f269fed9-e4e1-4bbf-b4c8-cf3e3f22b7bb&size=500x500&format=png&fit=fit",
                "http://shopforclipart.com/images/chair-png/5.jpg",
                "https://d3o372dlsg9lxo.cloudfront.net/catalog/products/d4120/images/grid/56900bd3bbddbdb6fc000e4e/Z019915.png",
                "https://fritzhansen.com/~/media/images/products/chairs/drop/3110_storm_blue_lacquered_base-png.png",
                "http://www.natusgarden.com.br/wp-content/uploads/sites/1080/2017/05/banco-madeira.png",
                "https://www.outthereinteriors.com/media/catalog/category/chair.png",
                "https://purepng.com/public/uploads/large/purepng.com-chairchairfurnituresupported-by-legsseatdeck-chairseat-of-learning-1701527929120ybko1.png",
                "https://cdn.discordapp.com/attachments/464481016208424971/498167773097361413/b-pop-up-skitch-build-up-ch.png"
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
  name: "chair",
  category: "Images",
  description: "Take a seat...",
  usage: "chair"
};
