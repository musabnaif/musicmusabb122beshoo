const { MessageEmbed } = require("discord.js");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
const lyricsFinder = require("lyrics-finder");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
exports.run = async(client, message, args) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const queue = message.client.queue.get(message.guild.id);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!queue) return message.channel.send("There is nothing playing.").catch(console.error);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let lyrics = null;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    try {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      lyrics = await lyricsFinder(queue.songs[0].title, "");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title} :(`;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    } catch (error) {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      lyrics = `No lyrics found for ${queue.songs[0].title} :(`;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    }// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let lyricsEmbed = new MessageEmbed()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      .setTitle(`Lyrics For ${queue.songs[0].title}`)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      .setDescription(lyrics)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      .setColor("GREEN")// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      .setTimestamp();// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (lyricsEmbed.description.length >= 2048)// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    return message.channel.send(lyricsEmbed).catch(console.error);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
}// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
