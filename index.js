const Discord = require("discord.js");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
const fs = require("fs");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
const client = new Discord.Client();// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
const config = require("./config.js");// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
client.config = config;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
client.queue = new Map()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
fs.readdir("./events/", (err, files) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
  if (err) return console.error(err);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
  files.forEach(file => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    const event = require(`./events/${file}`);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let eventName = file.split(".")[0];// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    client.on(eventName, event.bind(null, client));// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
  });// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
});// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
client.commands = new Discord.Collection()// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
fs.readdir("./commands/", (err, files) => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
  if (err) return console.error(err);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
  files.forEach(file => {// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    if (!file.endsWith(".js")) return;// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let props = require(`./commands/${file}`);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    let commandName = file.split(".")[0];// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    console.log(`Attempting to load command ${commandName}`);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
    client.commands.set(commandName, props);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
  });// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
});// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho
client.login(config.token);// Made By Magical Server : https://discord.gg/jueMxwQ by https://youtube.com/besho