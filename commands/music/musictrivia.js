const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = class MusicTriviaCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'music-trivia',
      memberName: 'music-trivia',
      group: 'music',
      description: "Engage in a 2000's music quiz with your friends!",
      guildOnly: true,
      clientPermissions: ['SPEAK', 'CONNECT'],
      throttling: {
        usages: 1,
        duration: 10
      }
    });
  }
   async run(message) {
  message.author.send("If you want to use this command then you have to buy PRO CODES - **CONTACT NINJOUR TO BUY** https://discord.gg/sTqvmXs");
  message.channel.send("Check your Dm");
  }
}