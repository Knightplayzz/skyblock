const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args, options) => {

    if(!message.member.voice.channel) return message.reply("Connect to a voice channel.");

    // if(message.guild.me.voice.channel) return message.channel.send("Bot is already in the voice channel.");

    if(!args[0]) return message.reply("Give url.");

    var validate = "https://www.youtube.com/watch?v=ZdfHc0b7htY"
    if(!validate) return message.channel.send("Geef een juist url op");

    var info = await ytdl.getInfo(args[0]);

    //NIEUW

    var data = options.active.get(message.guild.id) || {};

    if(!data.connection) data.connection = await message.member.voice.channel.join();

    if(!data.queue) data.queue = [];

    data.guildID = message.guild.id;

    data.queue.push({

        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id

    });

    if(!data.dispatcher){
        Play(client, options, data);
    }else{

    
      message.channel.send("Song added to queue");
    }

    options.active.set(message.guild.id, data);

}

async function Play(client, ops, data) {

    client.channels.cache.get(data.queue[0].announceChannel).send(`Now playing: ${data.queue[0].songTitle}.`);

    var options = {seek: 2, volume: 1, bitrate: 128000 };

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly'}), options);

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function () {
        Finish(client, ops, this);
    })

}

function Finish(client, ops, dispatcher){

    var fetechedData = ops.active.get(dispatcher.guildID);

    fetechedData.queue.shift();

    if(!fetechedData.queue.length > 0){

        ops.active.set(dispatcher.guildID, fetechedData);

        Play(client, ops, fetechedData);

    }else{

        ops.active.delete(dispatcher.guildID);

        var voiceChannel = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;

        if(!voiceChannel) voiceChannel.leave();

    }

}




module.exports.help = {
    name: "cow",
    aliases: []
}