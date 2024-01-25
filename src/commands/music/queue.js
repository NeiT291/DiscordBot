const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('queue').setDescription('Wren Evans stop sing'),
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
            const q = queue.songs
                .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
                .join('\n');
            newMessage = `**Server Queue**\n${q}`;
        }

        await interaction.editReply({
            content: newMessage
        })
    }
}