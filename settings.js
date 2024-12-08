/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VIUk9jaFUrZE9XakdNeWVqbjc3a3NKY1hTc2JWaiszNkR2ZjJUMnBVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREVXc3NRNTFCT0hsNThtdTRpUmQwOEZNaC9iZ0NLZ2x4bzJNSlVWYzBRVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TkdqVGYyRkxHejlNeW5qSkh3a1l0UHUrbURLa2tQL2dFc3lJaS8xbzNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSmxTQk55ZkRzN3RVa09pZGUvYkxuVmdWdXpPSTQ4MWc0b1MxQW1uZHlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBZ1ZuS0E3eWtDNDNtTy9pQWVjWWo3dkFFSUloT1hlUFRHT0tCT0pNVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik04SmloMk15aDRTUWRYM1JLMTIrTy95eHFFL2ZqYiszN24wTTByUVJjMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFTcllOSnJrS2Y0VzA2OExLZ0tWNFEwNjQwRjhZajJMSTlpeFBObFVtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidERZUmVZaCt3M01XMktvb24wZjRjZTJVVmpoL24rcXFkWkJ0aGJIQWFHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBZlF0b1lLak1mUU5RNGFucGt3ZU0za0NuR1RrM3dyd3V1WS85enl5ZW9qRnM5MFc3YjBxUWlYREpsVy9ueFRtdlBVN1Y3ZWNYUmIvU29jdElaTGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJZVUZFeWJVUGZFM0pMM0dhL2V0ODJCN2FYODI1UHlPSXMyWW1Pd2pyY01vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYSkZ5OThoY1NXU1lnY21lWjBldmZ3IiwicGhvbmVJZCI6Ijg5NjE3NGQ0LWE3NjgtNDViMS1iZDA2LTNmMjgxODY2N2I0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMHpuRVhrR1g5TmFoQXkvRnlaa0FES1A3YWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialgxYTUvb2h4UFMxb011Zjc2NExGZlhkSlljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNUUFc3VzVNIiwibWUiOnsiaWQiOiIyMzQ4MTA5NTQ3NzY3OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Isqcc+OFpOG0gOG0mOG0h3jjhaTogZYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012KzhJVUNFUFcrMUxvR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlPWTRlUDAxUEx4WlpWaWxjd3pyZTRKdG5pUTl0K1ZsTk1qOVByeVlDamM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdrOFdhcFN5NmlvU3FvS0I4NWozUlN3dkNjT0JuY3dhVlI1QTR2bGR1cExGTWY4T1YyNUJERlVIdnBCeUNPTzlYWjBsQmpPOHdVN3NCT3d4M1BpWkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSS1lpM2JHa3YvSmh3OGxHY1NVblNqTDUyK3lPZmpUTCs1N2xCdlBKY3A2STROdXhhSGR5eFVuOEZIckRGcnZBdW4zVDg2b2dYNGFOTVIrSHVWQ3NpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDk1NDc3Njc6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlRtT0hqOU5UeThXV1ZZcFhNTTYzdUNiWjRrUGJmbFpUVEkvVDY4bUFvMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzYzMTg3NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMeEUifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'Apex';
const packname = process.env.PACKNAME || 'Apex';
const dev = process.env.DEV || '2348109547767';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'Hsapex';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
