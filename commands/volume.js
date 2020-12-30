exports.run = async(client, message, args) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let queue = message.client.queue.get(message.guild.id)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!args[0]) return message.channel.send({// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        embed: {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            description: 'The current volume is set to: ' + queue.volume// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(args[0] > 10) return message.channel.send('Well lets hope we meet in heaven :grin:')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    queue.volume = args[0]// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.channel.send({// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        embed: {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
            description: 'Volume is set to ' + args[0]// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
        }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    })// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho