const djs = require('discord.js');

module.exports = {
    name: "ping",
    description: "Botun gecikme süresini görebilirsin.",
    options: [],
    async exe(client, interaction) {
        const ping =  client.ws.ping;
        const embed = new djs.EmbedBuilder()
        .setTitle('Gecikme Süresi')
        .setTimestamp()
        .setColor('#2F3136')
        .setDescription(`Botun kısa süreli gecikme süresi: **${ping}ms**`);
        interaction.reply({ embeds: [embed], ephemeral: false });
    }
}