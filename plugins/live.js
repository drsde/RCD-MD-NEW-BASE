const { smd, Config } = require('../lib');
const xvideos = require('xvideosx');

// Existing 'live' command
smd({
        pattern: "live",
        desc: "Show Live Time Of Pakistan",
        category: "fun",
        filename: __filename,
        use: '<group link.>',
    },
    async(message) => {
        try {
            var time = `${message.time}`.replace("am", 'ᴀᴍ').replace("pm", 'ᴘᴍ');
            var date = message.date;
            const [hours, minutes, seconds, ampm] = `${message.time}`.split(/:| /);
            const hrs = parseInt(hours, 10);

            var wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙';
            if (ampm == "am") {
                if (hrs >= 0 && hrs < 5) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ, ᴇᴀʀʟʏ ʙɪʀᴅ! 🌄';
                else if (hrs >= 5 && hrs < 12) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅';
            } else {
                if (hrs >= 0 && hrs < 5) wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞';
                else if (hrs >= 5 && hrs < 8) wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥';
                else wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙';
            }

            const q = await message.bot.fakeMessage("order");
            let contextInfo = { ...(await message.bot.contextInfo()) };
            let timenow = `
╭────────────────╮
│    *${wish}* 
│     *ᴛɪᴍᴇ* ⌚ ${time} 
│     *Date* 🎲   ${date} 
│   ${Config.caption}
╰────────────────╯
`;
            await message.send(timenow, { contextInfo: contextInfo }, "asta", q);
        } catch (e) {
            await message.error(`${e}\n\ncommand: live`, e, false);
        }
    }
);

// New 'xvideos' command for fetching video details
smd({
        pattern: "xvideos",
        desc: "Fetch Xvideos details by URL",
        category: "adult",
        filename: __filename,
        use: '<video_url>',
    },
    async(message) => {
        const args = message.text.split(' ');

        if (args.length < 2) {
            await message.send("Please provide a video URL.");
            return;
        }

        const url = args[1];

        try {
            const detail = await xvideos.videos.details({ url });
            let response = `
*Video Details:*\n
Title: ${detail.title}\n
Duration: ${detail.duration} mins\n
Views: ${detail.views}\n
Watch here: ${url}
            `;
            await message.send(response);
        } catch (error) {
            await message.error(`Failed to retrieve video details: ${error.message}`, error, false);
        }
    }
);
