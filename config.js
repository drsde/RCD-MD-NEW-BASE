const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94720797915,94763621705";
global.owner = process.env.OWNER_NUMBER || "94720797915";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09SY2J1VFBzUzVRei84NTZXYTl0V0tDdFlyODJDZXU5OGlnRE5sbG8zQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTI4ZGxySm42eVJWVGRETHlOcDBQUnRnTHdFU01JZnY4OWhwV2MrNnFsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQVpnYjVsZ0w0a3FaSzMySUZaaFFVbDdVVVJDRDlIOExCWUFETnZjM1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzaVRPdXFCaGZleUR3RnpZbUR0UkdtbWNLNmlybmNFeFdjQ3A1TmRJWDFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQb3E0RmhQWVI1Z05PT2Jmb1hkNnZSbzEzeDBERVhDWXlwTStLWjk0bFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii80ZDVpQkM0Q011WisvbTh3L1Vpb0Z6VGR3ZmJ2QVdrN2ZIN0ZudjJBQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0w0SVFia1dDRmZpS0lJcU03bEFKaDNxNERRSy90T2VCU2k1VGtFYVlrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibndCS1gwZVhGNFdWL0xyVHFBcFJ0Y3lKUktYRSt0NVZCRlVQV1NKTXQydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY1cmVac29UcmM5NTFYTGlEcVVobmgrZDZ3Ly95dm50SmpaL09BUGFERzB0c2k5VTBTMzIrMytGVmFSdDdrLzBGd0N4dGF0ZWp4MXdwMXd3b3FtUWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJuTnM1cEV5VjIrbmRENWQwRlA1UkY0NjlKVmdMR1RlWGIwb05FK3h1V0ZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5OTU4MjI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE5NzM2ODk5MkJGQkY1QjUzMzEyREQyMDExQTg5MjQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU0MzAyMzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFGM2JmdHhuUldxT1Q0MVc2ZVAxblEiLCJwaG9uZUlkIjoiYjFlYWZiOTgtOGFjYi00Mjc4LTg5MzEtOWEyODhlY2E0ZTM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImowMmZCeWhnR3dNS1FGbytud0xTblZSejJNUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaTk1IMUdVdUo4bDgvcHlBcEhvR1BoWkhLemc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEZIVjZMMUoiLCJtZSI6eyJpZCI6Ijk0Nzg5OTU4MjI1OjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkTNn0XNn1jNn1TNn0XNn1LNnyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDdpdXYwQ0VNanozN1lHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnFJc3p2YXFnanZJQ01LSHlYYWFxb2pJb3JmbjR2RHFzN1lMc25rN29DOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL3IwdGt2YlluSms0ZG9RcUxoQisxeEJ3eUtyVW0yMlUxVnVNMXpISThWOUVlM3AvaHlUQmxuZ1E3d3daTkhGdGM4ZzRsc1Q1WExONE9qS0xtQzRoQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZncnpsaGpKb1F1a1A3TGsvMFhOVC9mM0JkOWhSSDlSWGpMT3RsVVdiYnF0NWVZZnR5aklpRWwwVUJ2TnZmeTB4SGVYTGRKWEhOMStOVEE3UVNrdmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODk5NTgyMjU6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmFpTE03MnFvSTd5QWpDaDhsMm1xcUl5S0szNStMdzZyTzJDN0o1TzZBdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQzMDIzMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMSmEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Sahan",
  packname: process.env.PACK_NAME || "MASTER-MD",
  botname: process.env.BOT_NAME || "•ᴍᴀꜱᴛᴇʀ-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "Sahan",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
