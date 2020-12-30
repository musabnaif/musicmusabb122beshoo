exports.run = async(client, message) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let queue = message.client.queue.get(message.guild.id)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!queue){ return message.channel.send({// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        embed: {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            description: 'There is nothing in the queue right now! add using `+play <songName>`',// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            color: 'BLACK'// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(queue.songs.length !== 0) {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        message.react('✅')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        queue.connection.dispatcher.end('Okie skipped!')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho