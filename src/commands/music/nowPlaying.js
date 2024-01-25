const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('nowplaying').setDescription('Wren Evans stop sing'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchRely: true
        });
        var newMessage;
        const queue = client.distube.getQueue(interaction)

        if (!queue) {
            newMessage = `Hổng có hát nha`;
        } else {
            const song = queue.songs[0]
            newMessage = `Playing ${song.name}`;
        }

        await interaction.editReply({
            content: newMessage
        })
    }
}