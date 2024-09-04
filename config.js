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
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBtQW41OHdnTjhlN1pXL05zTHcxT3REM2ZIOWlBQmNHbWR1cGt0dmxrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjZ0V0VmL1g4NzFrM2tDN1JPSmc4SEhNVXZ1MDk1b1dmK3Blb0pORmlTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRGF4eUFuU3FPTm0yS1RHb2ZSdnhIUlJCUzU4Y0xTS0YvNkUzTFpvbFdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJub1R4ZEVORnZvSWtibzdCK3cwdFV6YzdhbENFdlAvaGVZWGFxcXhyNDJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHSSt1WTl2WEplODdNNHdRSDNheVNQSXdVcGlZblJiQXN3VFNWRS80SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ISHNzbS9YOG43V0ZhZ3BiRlpKbTlSc0tzSHBWMytNdnFCcEFlcHBObE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpkTmhSL2pudVRrck9yYU5mZmxKVmFYWDhQSlVIMVIvMUorZkp4bVNsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYS9aUFQvUHMrRlNINTh2L3h0dVQzSXVSb0oyMWphZUVYWW5EY0JGeFlRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA5eVZKTkY5bDdYZHBDWnRrWnJSL1c2SUo1czF1bkhwSnpBT0owTFFpNk9FcUp3RVVkdDY4RU9xV09IMU1wM01nd2h0MUFKS2RPWklyVTBpcEp4OUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJZRmxmSzhnWE13bGVKT0t2L0tIZG8yaVp5eWxkZnhyeHloVEZNdWNldEFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJESVM2RG9BSFQxcWJFcU9UaGJYREx3IiwicGhvbmVJZCI6Ijc5OWU2ZjcwLTg4ZWUtNDg1Yy1hYjM2LTY2ODc3NzFiNDdhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5VDFHc25lelRZeGs5T25ZdUZYV29iV2JlTFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVVIMmRhSHlLcG01NnJWemQ3U3B3SGp4VHVjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNNRTZGOUFXIiwibWUiOnsiaWQiOiI5NDc4OTk1ODIyNTo0NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEzZ9FzZ9YzZ9UzZ9FzZ9SzZ8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A3aXV2MENFSmF0NDdZR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZxSXN6dmFxZ2p2SUNNS0h5WGFhcW9qSW9yZm40dkRxczdZTHNuazdvQzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImErR2E2VVkwU2hFU1hRZ0dBang3NWkxZS85SlJRREhHckUwbjMrR1QxUE5JRGtCMStiN2VKNXVIY2d2VkZzaUJQYTRxaTVROE83eDV4N05tUFJIa0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEOWNRZS9iOUVrSTB1Tit5UTF6TWRrL0phNlpocXJHNmp1UzMxZ1JSU3VBMEJsNTVSUVBIM0NMajhPeGZKcDI2RmFoaUV6Zzh6TWl3UGNxY1p4ZE1EQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg5OTU4MjI1OjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJhaUxNNzJxb0k3eUFqQ2g4bDJtcXFJeUtLMzUrTHc2ck8yQzdKNU82QXYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU0ODY3NTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEppIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ DEXTER ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Sahan",
  packname: process.env.PACK_NAME || "MASTER-MD",
  botname: process.env.BOT_NAME || "•ᴍᴀꜱᴛᴇʀ-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "Sahan",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
