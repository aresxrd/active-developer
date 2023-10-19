const djs = require('discord.js');

module.exports = {
    name: "yardım",
    description: "Yardım menüsünü gösterir.",
    options: [],
    async exe(client, interaction) {
        const embed = new djs.EmbedBuilder()
        .setTitle(' Yardım Menüsü')
        .addFields(
            { name: "istatistik", value: "Kaç sunucuda olduğumu veya kaç kişiye hizmet verdiğimi görebilirsin.", inline: false },
            { name: "avatar", value: "Kendinin ya da bir başkasının Profil Fotoğrafına bakabilirsin.", inline: false },
            { name: "ping", value: "Botun gecikme süresini görebilirsin.", inline: false },
        )
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#2F3136');
        interaction.reply({ embeds: [ embed ], ephemeral: false });
    }
}