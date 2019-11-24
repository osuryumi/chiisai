const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", message => {
        if (message.content.startsWith(config.bot.prefix + "faq")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "faq ");
            msg = msg[1];
            if (msg === "") { return message.channel.send("This is not a valid option, please do -faq help to view all options!") }
            if (msg === undefined) { return message.channel.send("This is not a valid option, please do -faq help to view all options!") }

            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const embed = new Discord.RichEmbed()
                .setColor(hex)
                .setImage("https://ryumi.pw/images/logos/logo.png")

            if (msg.toLowerCase() == "email") {
                embed.setTitle("Email Verification")
                .addField("**Description**", "As the verification page says, Ryumi does not use verification emails. To verify your account, simply install the switcher, install the certificate, click the server you\'d like to play on, and click On/Off, then login to osu! to complete the verification process.")
            } else if (msg.toLowerCase() == "appeals") {
                embed.setTitle("Appealing Your Restriction")
                .addField("**Description**", "Ryumi accepts restriction appeals within 1 (one) month of restriction. Although staff are very confident in their decision when restricting users they are willing to accept proof of legitimacy if it was in error.")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Ryumi's Staff")
                .addField("**Description**", "Depending on the situation there's many ways to contact the Ryumi staff (email, discord). The main email for support is james@ryumi.pw, however you can message a staff member in-game or on discord if the issue is urgent or not about restrictions.")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s' while connecting to Ryumi")
                .addField("**Description**", "This usually means that the certificate was not installed correctly. Check the pinned messages within #general, download the ryumi.crt file and click install certificate, set the store location to Local Machine, Place all certificates in the following store, click browse and choose Trusted Root Certification Authorities. Then next and finish.")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "If the switcher says it is in read only, or you are still connected to bancho (or another server), open C:\Windows\System32\drivers\etc\hosts with notepad (running as admin) and go to https://ryumi.pw/static/hosts.txt and copy paste the text that you get from there into the hosts file and save it.")
            } else if (msg.toLowerCase() == "linux/mac") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "If the switcher says it is in read only, or you are still connected to bancho (or another server), open /etc/hosts or /private/etc/hosts with your text editor of choice (running as sudo/admin) and go to https://ryumi.pw/static/hosts.txt and copy paste the text that you get from there into the hosts file and save it then install the certificate that is pinned within #general")
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("Do -faq (field title) to use it. However, ensure you do these commands in #bot-commands")
                .addField("Email", "Explains why you haven't recieved the email verification :facepalm:")
                .addField("Appeals", "Explains how appeals works within osu!Ryumi")
                .addField("Contact", "Lists ways to contact the osu!Ryumi staff")
                .addField("Cert", "How to insstall the certificate manually")
                .addField("Hosts", "How to edit hosts file manually.")
                .addField("linux/mac", "How to connect on linux or mac.")
                .addField("help", "Shows this")

            } else {
                return message.channel.send("This is not a valid option, maybe try -faq help?") 
            }
            return message.channel.send(embed)
        }
    })
}