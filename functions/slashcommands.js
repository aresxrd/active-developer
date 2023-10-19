class SlashCMD {
    constructor(rest, routes, client, collection, fs) {
        this.rest = rest;
        this.routes = routes;
        this.client = client;
        this.fs = fs;
        this.client.commands = new collection();
    }

    apply(token, Id) {
        const commands = [];
        const commandFiles = this.fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const cmd of commandFiles) {
            const command = require(`../commands/${cmd}`);
            commands.push({
                name: command.name,
                description: command.description,
                options: command.options || [],
                type: 1
            });
            this.client.commands.set(command.name, command);
        }
        
        const rest = new this.rest({ version: '9' }).setToken(token);
        
        (async () => {
            try {
                console.log('[ARESXRD]: Uygulama (/) komutlarını yenilemeye başladı.');
                await rest.put(this.routes.applicationCommands(Id), { body: commands });
                console.log('[ARESXRD]: Uygulama (/) komutları başarıyla yeniden yüklendi.');
            } catch (error) {
                console.error(error);
            }
        })();
    }
}

module.exports = SlashCMD;