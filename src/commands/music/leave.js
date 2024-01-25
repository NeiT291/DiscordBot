const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('leave').setDescription('Wren Evans left voice channel'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchRely: true
        });
        client.distube.voices.leave(interaction);
        await interaction.editReply({
            content: 'Bái bai em'
        })
    }
}