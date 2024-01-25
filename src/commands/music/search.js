const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('search').setDescription('Play Wren Evans\'song').addStringOption(option =>
        option.setName('song')
            .setDescription('Wren evans\'s song')
            .setRequired(true)
    ),
    inVoiceChannel: true,
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchRely: true
        });

        const song = interaction.options.getString('song');
        client.distube.play(interaction.member.voice.channel, song, {
            member: interaction.member,
            textChannel: interaction.channel,
            interaction
        })

        await interaction.editReply({
            content: `Đã thêm vào hàng chờ.`
        })
    }
}