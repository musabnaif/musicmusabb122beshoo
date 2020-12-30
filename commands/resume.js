exports.run = async(client, message) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let queue = message.client.queue.get(message.guild.id)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!queue) return message.channel.send({// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        embed: {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            description: 'There is nothing playing right now to resume!'// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(queue.playing !== false)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    queue.connection.dispatcher.resume()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.react('▶')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.channel.send('Resumed The music!')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho