const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", message => {
        if (message.content.startsWith(config.bot.prefix + "commands")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "commands ");
            msg = msg[1];

            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const embed = new Discord.RichEmbed()
                .setColor(hex)
                .setImage("https://ryumi.pw/images/logos/logo.png")

                embed.setTitle("Help (Commands)")
                .setDescription("Do -<command preview> to use them. However, ensure you do these commands in #bot-commands")
                .addField("FAQ (-faq help)", "Contains help to some general connection issues and contact to staff.")
                .addField("Top Relax Score (by user) (-top rx <user>)", "Shows a certain user's top play on their relax profile.")
                .addField("Top Relax Score (by user) (-top -v <user>)", "Shows a certain user's top play on their vanilla profile.")
                .addField("View Player's Relax Stats (-stats rx <user>)", "Shows a certain user's total pp on relax.")
                .addField("View Player's Vanilla Stats (-stats v <user>)", "Shows a certain user's total pp on vanilla.")
                .addField("View Player's Most Recent Relax Score (-recent rx <user>)", "Shows their most recent relax score (includes retries)")
		.addField("View Player's Most Recent Vanilla Score (-recent v <user>)", "Shows their most recent vanilla score (includes retries)")
                .addField("commands", "Shows this")
		message.channel.send(embed);
	}
    })
}