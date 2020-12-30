const ytdl = require('ytdl-core-discord');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
var scrapeYt = require("scrape-yt");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
const discord = require('discord.js')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
exports.run = async (client, message, args) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!args[0]) return message.channel.send('You didn\'t provide a song to play!')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!channel) return message.channel.send('You need to join a voice channel to play a music!')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel.permissionsFor(message.client.user).has("CONNECT")) return message.channel.send('I don\'t have permission to join the voice channel')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel.permissionsFor(message.client.user).has("SPEAK"))return message.channel.send('I don\'t have permission to speak in the voice channel')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const server = message.client.queue.get(message.guild.id);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let video = await scrapeYt.search(args.join(' '))// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let result = video[0]// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const song = {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        id: result.id,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        title: result.title,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        duration: result.duration,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        thumbnail: result.thumbnail,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        upload: result.uploadDate,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        views: result.viewCount,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        requester: message.author,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        channel: result.channel.name,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        channelurl: result.channel.url// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      };// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    var date = new Date(0);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    date.setSeconds(song.duration); // Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    var timeString = date.toISOString().substr(11, 8);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      if (server) {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        server.songs.push(song);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        console.log(server.songs);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        let embed = new discord.MessageEmbed()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .setTitle('Added to queue!')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .setColor('#00fff1')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Name', song.title, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .setThumbnail(song.thumbnail)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Views', song.views, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Reqeusted By', song.requester, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Duration', timeString, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        return message.channel.send(embed)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const queueConstruct = {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        textChannel: message.channel,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        voiceChannel: channel,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        connection: null,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        songs: [],// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        volume: 2,// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        playing: true// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    };// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.client.queue.set(message.guild.id, queueConstruct);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    queueConstruct.songs.push(song);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const play = async song => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        const queue = message.client.queue.get(message.guild.id);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        if (!song) {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            queue.voiceChannel.leave();// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            message.client.queue.delete(message.guild.id);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            message.channel.send('There are no songs in queue, I\'m leaving the voice channel!')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            return;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        const dispatcher = queue.connection.play(await ytdl(`https://youtube.com/watch?v=${song.id}`, {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            filter: format => ['251'],// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            highWaterMark: 1 << 25// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }), {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            type: 'opus'// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            .on('finish', () => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
                queue.songs.shift();// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
                play(queue.songs[0]);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            .on('error', error => console.error(error));// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        dispatcher.setVolumeLogarithmic(queue.volume / 5);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        let noiceEmbed = new discord.MessageEmbed()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .setTitle('Started Playing')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .setThumbnail(song.thumbnail)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Name', song.title, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Requested By', song.requester, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Views', song.views, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        .addField('Duration', timeString, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        queue.textChannel.send(noiceEmbed);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    };// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    try {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        const connection = await channel.join();// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        queueConstruct.connection = connection;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        play(queueConstruct.songs[0]);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    } catch (error) {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        console.error(`I could not join the voice channel`);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        message.client.queue.delete(message.guild.id);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        await channel.leave();// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        return message.channel.send(`I could not join the voice channel: ${error}`);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho