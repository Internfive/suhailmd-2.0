const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349046334318";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_21_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjBJM21vUEdvMWdydXBWSExmSEJZQlFDeTBxajU5K01rSlZ1MnpoQk9zUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ2MzM0MzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RjJDMzcxQzVGRUUzODFCNEI0RjJBMDYwMDc3OTlCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzNzg5MDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ2MzM0MzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMzZEMTBDMDMyRUZGMkRDMDUxNjU4MEJCNDM2REI3QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzNzg5MDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ2MzM0MzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNEJDNDM1NDA2RTBGRDU4NDA5MUMzMkQzQjIyRTlCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzNzg5MDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ2MzM0MzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxREZGQUEzRTEwMDU4NUY0ODIyQkU5QjQ0OTlFNkI0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzNzg5MDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicWxDR1lBMUdUZzJveXVoOFNPRklBUVwiLFxuICBcInBob25lSWRcIjogXCJkOTYwNzQ0OC05MGVmLTQzM2MtOWY5NC1iNDE5YjNhM2IzMzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMSxcbiAgICAgIDEzNCxcbiAgICAgIDE2MCxcbiAgICAgIDExMixcbiAgICAgIDY1LFxuICAgICAgMTQ2LFxuICAgICAgMTkxLFxuICAgICAgNjMsXG4gICAgICAyMjMsXG4gICAgICAxMzUsXG4gICAgICA1OCxcbiAgICAgIDMyLFxuICAgICAgMTU5LFxuICAgICAgMjYsXG4gICAgICAxMDEsXG4gICAgICA1NyxcbiAgICAgIDI0OCxcbiAgICAgIDEwOSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMjA2LFxuICAgICAgMTc1LFxuICAgICAgMTE3LFxuICAgICAgMjQyLFxuICAgICAgMTI1LFxuICAgICAgMTYxLFxuICAgICAgMTIxLFxuICAgICAgNTksXG4gICAgICAxNjEsXG4gICAgICAxNzAsXG4gICAgICA5NixcbiAgICAgIDI0MyxcbiAgICAgIDEwMyxcbiAgICAgIDYzLFxuICAgICAgNjUsXG4gICAgICA1MCxcbiAgICAgIDE2MSxcbiAgICAgIDQsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDMjg1Skw0S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NjMzNDMxODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTgyMDUzOTc1NzM2NTk6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYWRkbGVwcmltZSAzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExQcnRRREVKQ0NpTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLOGIveFpKQUZWK1JIMmtZbHI3RzlDMDRoRzVjUGFzYU9EdjJYc1FEeWlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNqVzJMQVh4bzZYVkdnb1FoQkJqM1h2WG8yVVV4SWRaQmJqTDZYTWk1UU9Fcld0VFBaZWc1TDIxMWlhRGVRcnJsZGJvZ1lLRk4xZGVLbWRTTWZlS0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRqajRwa0dPUy81TkZBNDVvT2FDRC9LUVEwRnFkRkxuMlhtWXNVM2UvNU1CNEJrMDltMHA4SXpFRUozb3JjMytPbHZXRGpaZFltVGQyQzZHNFpvWEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDYzMzQzMTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzNzg4OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLb01cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvTS5qc29uIjogIntcImtleURhdGFcIjpcIjArc0hWU0tXdVVGay9MeE1hcTluNjNRbGluN0lCcGRWdGdDUENiYXRBTFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTgyMjMwOTYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIzNzg5MDAwNjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
