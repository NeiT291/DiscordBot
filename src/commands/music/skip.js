const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('skip').setDescription('Wren Evans stop sing'),
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
            try {
                const song = await queue.skip()
                newMessage = `Bài tiếp theo nè\n${song.name}`;
            } catch (e) {
                newMessage = e;
            }
        }
        await interaction.editReply({
            content: newMessage
        })
    }
}