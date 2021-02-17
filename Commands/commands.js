const discord = require('discord.js');



module.exports.run = async (client, message, args) => {

    try{
      
var botEmbed = new discord.MessageEmbed()
    .setTitle(`_***Skyblock Commands***_`)
    .setDescription(`Ping is ${Date.now() - message.createdTimestamp}ms.`)
    .setColor("#001366")
    .addField('**Server Commands**', [
        `**!commands** | Shows all commands.`,
        `**!howcommand** | Shows how to do a command.`,
        `**!serverinfo** | Information of the server.`,
        `**!ping** | Shows the ping of the bot.`,
        `**!tinfo** | See all ticket commands.`,
        `**!music** | See all music commands.`,
        `**!review** | Makes a review.`,
        `**!members** | Show all members.`,
        
        '\u200b'
    ])
    .addField(`**Moderator Commands**`, [
        `**!kick** | Kick a user.`,
        `**!ban** | Get a user banned.`,
        `**!tempmute** | Mutes a player for given minutes.`,
        `**!clear** | Deletes the given amount of messages at a time.`,
        `**!announce** | Makes a announcement.`,
        `**!addrole** | Adds a role to a player.`,
        `**!removerole** | Removes the role of a player.`,
        `**!warn** | Warns a player.`,

        `\u200b`

    ])
    

    .setFooter(`© created by philippe#0354`)

    message.author.send(botEmbed);

    var dms = new discord.MessageEmbed()
        .setTitle("**commands**")
        .setColor("GREEN")
        .setDescription("All commands are send into your dm.")
        .setFooter(`© created by philippe#0354`)

        message.channel.send(dms).then(msg => msg.delete({ timeout: 5000 }));

    

    }catch(error){
    message.reply("something has gone wrong?");
    }


}



  
  module.exports.help = {
    name: "commands",
    aliases: ["cmds", "cmd"]
}

