const djs = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Kendinin ya da bir başkasının Profil Fotoğrafına bakabilirsin.",
    options: [
        {
            name: "user",
            type: 6,
            description: "Profil Fotoğrafına bakmak istediğin kişiyi etiketleyebilirsin.",
            required: false
        }
    ],
    async exe(client, interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatar = user.displayAvatarURL({ dynamic: true });
        const embed = new djs.EmbedBuilder()
        .setTitle(` ${user.tag} kişisinin Profil Fotoğrafı`)
        .setImage(avatar)
        .setTimestamp()
        .setColor('#2F3136');
        interaction.reply({ embeds: [embed], ephemeral: false });
    }
}