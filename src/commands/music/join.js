const { SlashCommandBuilder } = require('discord.js');
const { Constants } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder().setName('join').setDescription('Wren Evans join in coice channel'),
    async execute(interaction, client) {
        await interaction.deferReply({
            fetchRely: true
        });
        var newMessage;

        let voiceChannel = interaction.member.voice.channel

        if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
            newMessage = `Vào phòng voice em ơi`;
        } else if (!voiceChannel) {
            newMessage = `Vào phòng voice đã chứ em`;
        } else {
            client.distube.voices.join(voiceChannel);
            newMessage = 'Anh vào phòng rồi nè';
        };
        await interaction.editReply({
            content: newMessage
        })
    }
}