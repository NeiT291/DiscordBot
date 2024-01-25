const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Return my ping!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchRely: true
        });

        const newMessage = `API Letency: ${client.ws.ping}\nClient ping: ${message.createdTimestamp - interaction.createdTimestamp}`;
        await interaction.editReply({
            content: newMessage
        })
    }
}