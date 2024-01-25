const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('play').setDescription('Play Wren Evans\'song').addStringOption(option =>
        option.setName('song')
            .setDescription('Wren evans\'s song')
            .setRequired(true)
            .addChoices(
                { name: 'Full Album Loi Choi', value: 'https://www.youtube.com/watch?v=A8C71-mSkAk' },
                { name: 'Tình Yêu Vĩ Mô', value: 'https://www.youtube.com/watch?v=v-q1zFZR-wY' },
                { name: 'ĐĐĐ', value: 'https://www.youtube.com/watch?v=uWPy5-4jBSE' },
                { name: 'bé ơi từ từ', value: 'https://www.youtube.com/watch?v=onM02bB0mYw' },
                { name: 'Lối Chơi (Interlude)', value: 'https://www.youtube.com/watch?v=jj0N_lzwXVE' },
                { name: 'Việt Kiều', value: 'https://www.youtube.com/watch?v=hmdJtvIyEsw' },
                { name: 'Từng Quen', value: 'https://www.youtube.com/watch?v=Vr57c5fz2i0' },
                { name: 'Quyền Anh', value: 'https://www.youtube.com/watch?v=_1g1MwoRjug' },
                { name: 'Call Me', value: 'https://www.youtube.com/watch?v=DlION6FK-Yc' },
                { name: 'Phóng đổ tim em', value: 'https://www.youtube.com/watch?v=B9otsRRe0BE' },
                { name: 'Cầu Vĩnh Tuy', value: 'https://www.youtube.com/watch?v=A5f0LBEmhVk' },
                { name: 'Tò Te Tí', value: 'https://www.youtube.com/watch?v=aCqmdPaTVSg' },
            )),
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
            content: song
        })
    }
}