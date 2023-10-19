const u = require('util');

module.exports = {
    name: "eval",
    description: "Bir kod girerek deneme yapabilirsin.",
    options: [
        {
            name: "code",
            type: 3,
            description: "Çalıştıracağın kodu girerek deneyebilirsin.",
            required: true
        }
    ],
    async exe(client, interaction) {
        if (interaction.user.id == "idniz") {
            try {
                const code = interaction.options.getString('code');
                const CODE = eval(code);
                const CODE_CIKTI = (`\`\`\`js\n${CODE}\`\`\``);
                interaction.reply({ content: CODE_CIKTI, ephemeral: false });
              } catch (e) {
                const CODE_CIKTI = (`\`\`\`js\n${e}\`\`\``);
                interaction.reply({ content: CODE_CIKTI, ephemeral: false });
              }
        } else {
            return interaction.reply(`:x: Bu komutu kullanmaya yetkin yetmiyor.`);
        }
    }
}