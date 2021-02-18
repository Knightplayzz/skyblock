const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Travel Information**")
    .setColor("BLUE")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`/visit portalhub | For all portals.`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "fasttravel",
    aliases: ["ftavel"]
}