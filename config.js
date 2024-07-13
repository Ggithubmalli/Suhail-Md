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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_05_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjNkTnNzbVBwYVArcU0vcThmSG0rR01JcWZqOGxaOUNkbUJlSDZnQmM1UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieGxxWFh0Wk1TdkdKOEY1cWROUnNad1wiLFxuICBcInBob25lSWRcIjogXCJjMGZiZWU3NS1lOWI5LTRjMWUtODYxMC01N2YzZTEwNTk2ZjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMjUxLFxuICAgICAgMzgsXG4gICAgICAzNixcbiAgICAgIDkwLFxuICAgICAgMTM1LFxuICAgICAgMjI0LFxuICAgICAgMTEzLFxuICAgICAgNjMsXG4gICAgICAyMzMsXG4gICAgICAxNDEsXG4gICAgICAyNTMsXG4gICAgICAxMSxcbiAgICAgIDE3MixcbiAgICAgIDk5LFxuICAgICAgMTQ5LFxuICAgICAgMTc1LFxuICAgICAgNzAsXG4gICAgICAxNTEsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTA1LFxuICAgICAgNDIsXG4gICAgICAxMTIsXG4gICAgICA2LFxuICAgICAgNTAsXG4gICAgICAxNDAsXG4gICAgICAzNSxcbiAgICAgIDE0OSxcbiAgICAgIDIyOCxcbiAgICAgIDE4LFxuICAgICAgMTMwLFxuICAgICAgMTgzLFxuICAgICAgNDUsXG4gICAgICAxODUsXG4gICAgICAxNjgsXG4gICAgICAyNDcsXG4gICAgICAxODksXG4gICAgICAyMDYsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTU5GRUI3NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTkxNjM2MzY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZiK8J2YoPCdmInwnZiM8J2YmSAg4bWA4bS5ICAgT0ZJWkVSIPCdl5/wnZen8J2XpyDwnZiE8J2XrvCdmIbwnZeu8J2Xv1wiLFxuICAgIFwibGlkXCI6IFwiMzIzOTczNzQ1MjU1MTc6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJYbEo0REVOZUR5N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxb0VSL3hFWlhmcy8vdmNPTlFnUjhFRC9kMlY5am8xTTU0R25rQTNlRTM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkYwSlhOZEViVGY0NHRXSzVndjBOZ1VIZGdMR2xZejljWTV2cHdQVGw1TFNoNUpoaEFTTmJ1WnkrVmJmUXFtanh2eDcxeDIrQzg3cUdUMEhGQ2ZYbEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkh3dVVVUGllTjRsMTdvOFJBVFVUYm9wd25EL0dwNVVCYndORm9KK1dYVnNDRVZCcHBwaEtLbitKMm1Fa3p6UEdKMkJDY2UwSkJCOW5sUGZsbHZiS2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU5MTYzNjM2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg5MzkxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJWZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTzM1RlBRd0VzSUVOaEtMb3NmTUlOMzBPOHVuVjkvWjlMSzJwUGlkNU9rZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Njg1NTk3NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
