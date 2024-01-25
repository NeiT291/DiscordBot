const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('stop').setDescription('Wren Evans stop sing'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchRely: true
        });
        var newMessage;
        const queue = client.distube.getQueue(interaction)
        if (!queue) {
            newMessage = `Hổng có hát nha`;
        } else {
            newMessage = `OK EM!!!`
            queue.stop()
        }

        await interaction.editReply({
            content: newMessage
        })
    }
}