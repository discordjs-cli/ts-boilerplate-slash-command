import { SlashCommandBuilder } from 'discord.js';

export = {
    data: new SlashCommandBuilder()
        .setName('%command_name%')
        .setDescription('%command_name% slash command')
        .setDMPermission(false),

    async execute(interaction: any) {
        interaction.reply({ content: "%command_name% works!", ephemeral: false });
    }
};