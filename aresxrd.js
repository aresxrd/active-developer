const djs = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const SlashCMD = require('./functions/slashcommands');
const fs = require('fs');
const client = new djs.Client({
    intents: [
        'Guilds',
        'GuildMembers',
        'GuildBans',
        'GuildEmojisAndStickers',
        'GuildIntegrations',
        'GuildWebhooks',
        'GuildInvites',
        'GuildVoiceStates',
        'GuildPresences',
        'GuildMessages',
        'MessageContent',
        'GuildScheduledEvents',
        'AutoModerationConfiguration',
        'AutoModerationExecution',
    ]
});
const slash = new SlashCMD(REST, Routes, client, djs.Collection, fs);
const token = "BOT_TOKEN";
const Id = "BOT_ID";

client.on('ready', async () => {
    console.log('[ARESXRD]: Bot Hazır!');
});

slash.apply(token, Id);
  
client.on('interactionCreate', async (interaction) => {
    const cmdz = client.commands.get(interaction.commandName);
    return cmdz.exe(client, interaction);
});

client.login(token);