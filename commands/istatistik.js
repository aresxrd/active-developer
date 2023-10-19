const djs = require('discord.js');

module.exports = {
    name: "istatistik",
    description: "Kaç sunucuda olduğumu veya kaç kişiye hizmet verdiğimi görebilirsin.",
    options: [],
    async exe(client, interaction) {
        const days = Math.floor(client.uptime / 86400000);
        const hours = Math.floor(client.uptime / 3600000) % 24;
        const minutes = Math.floor(client.uptime / 60000) % 60;
        const seconds = Math.floor(client.uptime / 1000) % 60;
        const süre = `**${days}** gün, **${hours}** saat, **${minutes}** dakika, **${seconds}** saniye`;
        const servers = client.guilds.cache.size.toLocaleString();
        const members = client.guilds.cache.reduce((users , value) => users + value.memberCount, 0).toLocaleString();
        const ping = client.ws.ping;
        const embed = new djs.EmbedBuilder()
        .setTitle('İstatistik Menüsü')
        .setColor('#2F3136')
        .addFields({name: 'Sunucu Sayısı', value: servers, inline: true})
        .addFields({name: 'Kullanıcı Sayısı', value: members, inline: true})
        .addFields({name: 'Gecikme Süresi', value: `${ping}ms`, inline: true})
        .addFields({name: 'Çalışma Süresi', value: süre, inline: false})
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
        interaction.reply({ embeds: [ embed ], ephemeral: false });
    }
}