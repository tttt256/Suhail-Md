const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_30_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUE4ya2hxU0pzU2RrZUZvZXY3MXhXVzJ2ZEdWUDludFMrRVFxOUQ5Zm1sMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRHl0OExpVWhSbm1RdUk1Mk9FSVpzUVwiLFxuICBcInBob25lSWRcIjogXCJhMmY5NDdkMi0xOWY5LTQwZjItOGVjZS1jOTUxMzgxYTZlNGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAxMDEsXG4gICAgICAxODYsXG4gICAgICA5LFxuICAgICAgMjA0LFxuICAgICAgNDgsXG4gICAgICAyNixcbiAgICAgIDUzLFxuICAgICAgMTg0LFxuICAgICAgMTE0LFxuICAgICAgMTQ1LFxuICAgICAgNjksXG4gICAgICAyMCxcbiAgICAgIDE2OSxcbiAgICAgIDEyMSxcbiAgICAgIDE1MyxcbiAgICAgIDIxNSxcbiAgICAgIDIzMCxcbiAgICAgIDU0LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDIxMCxcbiAgICAgIDMwLFxuICAgICAgMjI0LFxuICAgICAgMzcsXG4gICAgICAxNjcsXG4gICAgICA2MixcbiAgICAgIDEyMSxcbiAgICAgIDE1MSxcbiAgICAgIDI1MyxcbiAgICAgIDE5MyxcbiAgICAgIDE4NyxcbiAgICAgIDQ4LFxuICAgICAgNTQsXG4gICAgICAxMDIsXG4gICAgICAxMTMsXG4gICAgICA4NixcbiAgICAgIDczLFxuICAgICAgMTI4LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1kzNkVRRVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc2Mjc5Mzc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NoX0dyYXBoaWNzZGVzaWduLkZyYW1lcyBMdGRcIixcbiAgICBcImxpZFwiOiBcIjE3OTg3MzIzMDM3NzE3OToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbk1wczhGRUlMSys3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9WaWNlNCt6YSt4WHdSSnpWc0crWnRLYVhVdnJvcjhtcDhVcG1ySDRxams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXRiMkpEemNBKzFUMEZ6QWlGUjNNc0pzTGVJYTcxc2ZOWGRUWE9mYzdCVmtXZE53VzlTQ3FGZzVPSHJKdnliVFE1T3pPQ2xGS3dWRk5QU0pDWE9SRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTUNjMVRoYnRVd1pEZE9BMDVNa21pMFdYOUsrcklaRUFKS0ZwRmVRNDQrNzFsY0lRYi85VE5mWUF2TjN2dG94SUQ3MUxuUlVBbVk5UXhDRloxKzZMQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NzYyNzkzNzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU5MjE5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA2V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDZXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUdQZGZ3YTQrRS9menlIcktiK0pTSE5jcHFoRno0bDF2TXV3SHcrNkZGST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA4NDg0NjAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NzEwODM4MzEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
