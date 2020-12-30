exports.run = async(client, message, args) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const channel = message.member.voice.channel;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!channel) return message.channel.send('You should join a voice channel before using this command!');// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const queue = message.client.queue.get(message.guild.id)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if(!queue) return message.channel.send('There are no songs in queue to shuffle')// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let songs = queue.songs;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    for (let i = songs.length - 1; i > 1; i--) {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      let j = 1 + Math.floor(Math.random() * i);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      [songs[i], songs[j]] = [songs[j], songs[i]];// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    queue.songs = songs;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.client.queue.set(message.guild.id, queue);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    message.channel.send(`Shuffled the current queue 🔀`).catch(console.error);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}
