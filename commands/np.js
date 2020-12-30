const { MessageEmbed } = require('discord.js')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
exports.run = async(client, message) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let queue = message.client.queue.get(message.guild.id)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!queue) return message.channel.send({// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        embed:{// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            title: 'There is nothing playing right now!'// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.channel.send({// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        embed:{// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            title: 'Now Playing',// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            description: queue.songs[0].title + ' Requested By: ' + '<@' + queue.songs[0].requester + '>',// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            color: 'YELLOW',// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            thumbnail: queue.songs[0].thumbnail// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho