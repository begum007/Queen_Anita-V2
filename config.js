//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpKbEplTnY5RHUzbEFsbVgzemIyVWVKRVdmd0pLVGdOV1ljVEFnSUpsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUZSVThqN292OFNqYUgwYWxrUVdkK2dZM3JnRlI5OGlYWkdPSXFZRmhRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSWw2UVJRRnVlSEV5djJtdnVkWG9ZcWRPa2RrM0tIVHBjbTBmQk5SdlZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTbWJ4MVYrQ0kwbWdWLzJXandmTjJCNGlRbEVuZ3BSS01UaHJrYnZCOXpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCUENCdTBiNWVqcUR6M2J3d1c1SW04QytITkVsdlVmampzZDZlVy9iV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhvU0dNODlHODRtZVEwYzlleWVNQm1MbDB4dzZFUDA2cnpISnRISHdsWE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUIrc2g3S0VhYUtPamZ0Z3MvV3ZlNUNZcGZRc3Y5d1lxSHJXR2UxSE9Gbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FSdmI3YjBrM3hwY2VWaVloTytOZVRRNkVLMS84YlB6cWNwc0RRbFh4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg3ZXpZOWxobW5xOEpvU0syUDVTZVRoU1hzVEp5SElVTmxEL0V6YVVTOGwwUWVxSmFTY0dWT3ZFS2t5eUhIMmxLVzZuS1VKalY3cXRTVnI5SlA0UWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJlUHRnUkxnOXVmeXlrSWxQZnJxa01FamRhT0lRUFp5dkhVMWNKaWZGOERvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODk1NTg5ODc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MTk4RjNDOURCNEU0NjVBNjJGQzY4Q0REQzgwNUM3NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NzE1MDc1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg5NTU4OTg3NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDE0RTQ3MEQxNUI4NjIzREVBOUNCNjU2Mzg3NDNFREYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTcxNTA3NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidDB0M0xGaGVRMnlIZVZ6VTYxbmxVUSIsInBob25lSWQiOiJkMzVjMzQzZC0zNjg1LTQzODEtYWNkNy1jZTMwZTQ3NTdiNjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVY4aUR0RlNsN3hIVEtzVXdQbEdvTXoxZkRjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlExVDVOUTNZQUp5bnNGVjVuL1dJUk5TU1R3Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBNk1UWkRDWSIsIm1lIjp7ImlkIjoiOTE4OTU1ODk4NzYzOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJHwnZCa8J2QnfCdkKHwnZCeIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON0pyY0lIRVBPSmc3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJObC9NMDdTSk9YQzhIbHg4b1Vnd3QreFd0R3ZxVnRNNzdBdERVM1l3YXljPSIsImFjY291bnRTaWduYXR1cmUiOiJMNitGWFA3VWJIMmZ4OGZKME1XSWJtVllIKytnZnhTWWFEUXVab0NadllkZHdEV053MFNHbGlxZFh1U0hjd3lZcktEa3E3L1gxdW9yNzgvTU8vVjVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRjJxc1NxUlpEeU96d0NRazN3TlBtSm9pSmtvcWRENVNMMkk4NWZjM0JGWXQyZE9kWmlUL1dKOEliaWV6SDNyZFNZSnE0WE5TMVVlVEVIV0taZHc1alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg5NTU4OTg3NjM6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFpmek5PMGlUbHd2QjVjZktGSU1MZnNWclJyNmxiVE8rd0xRMU4yTUdzbiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTcxNTA3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZ2sifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
