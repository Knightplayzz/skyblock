const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(botEmbedError1);

    var botEmbedError1 = new discord.MessageEmbed()
        .setTitle("**An error has occurred!**")
        .setColor("RED")
        .setDescription(`No permissions`)
        .setFooter(`© created by philippe#0354`)
        .setTimestamp();

    var infoEmbed = new discord.MessageEmbed()
    .setTitle("**Hypixel Skyblock**")
    .setColor("BLUE")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`Welkom bij onze Skyblock community. \n Voor toegang DM @philippe#0354. \n Traden in #〔🧍〕traden  kan. \n Doe je bot commands in #〔🤖〕bot-commands. \n Dit is een gesloten groep, niet IEDEREEN krijgt toegang. \n\n || @everyone ||`);

    message.channel.send(infoEmbed)

}

module.exports.help = {
    name: "info",
    aliases: []
}