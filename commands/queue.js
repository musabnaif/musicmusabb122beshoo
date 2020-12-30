const { MessageEmbed } = require('discord.js')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho

exports.run = async (client, message) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const queue = message.client.queue.get(message.guild.id)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let status;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!queue) status = 'There is nothing in queue!'// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    else status = queue.songs.map(x => '• ' + x.title + ' -Requested by ' + `<@${x.requester.id}>`).join('\n')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!queue) np = status// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    else np = queue.songs[0].title// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(queue) thumbnail = queue.songs[0].thumbnail// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    else thumbnail = message.guild.iconURL()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let embed = new MessageEmbed()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    .setTitle('Queue')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    .setThumbnail(thumbnail)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    .setColor('GREEN')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    .addField('Now Playing', np, true)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    .setDescription(status)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.channel.send(embed)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho