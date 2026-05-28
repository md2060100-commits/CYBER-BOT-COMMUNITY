const axios = require("axios");
const path = require("path");
const fs = require("fs");

const baseApiUrl = async () => {
 const base = await axios.get(
 "https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json"
 );
 return base.data.api;
};

module.exports.config = {
 name: "album",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Dipto Modified By SAHU", 
 description: "Displays album options for selection.",
 usePrefix: true,
 prefix: true,
 category: "Media",
 commandCategory: "Media",
 usages:
 "Only or add [cartoon/photo/lofi/sad/islamic/funny/horny/anime/aesthetic/cat/lyrics/love/sigma]",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
 if (!args[0]) {
 api.setMessageReaction("😘", event.messageID, (err) => {}, true);
 const albumOptions = [
 "𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼", "𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼", "𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼", "𝗔𝗻𝗶𝗺𝗲 𝘃𝗶𝗱𝗲𝗼",
 "𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼", "𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼", "𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼", "𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼",
 "𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗶𝗱𝗲𝗼", "𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼", "𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼", "𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲",
 "𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼", "𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼", "18+ 𝘃𝗶𝗱𝗲𝗼", "𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝘃𝗶𝗱𝗲𝗼",
 "𝗙𝗼𝗼𝘁𝗕𝗮𝗹𝗹 𝘃𝗶𝗱𝗲𝗼", "𝗚𝗶𝗿𝗹 𝘃𝗶𝗱𝗲𝗼", "𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗶𝗱𝗲𝗼", "𝗖𝗿𝗶𝗰𝗸𝗲𝘁 𝘃𝗶𝗱𝗲𝗼",
 ];

 const message =
 "╔══════════════════════╗\n" +
 "║ 🎵 𝗔𝗹𝗯𝘂𝗺 𝗩𝗶𝗱𝗲𝗼 𝗟𝗶𝘀𝘁 🎶\n" +
 "╠══════════════════════╣\n" +
 "║ 🎬 𝟬𝟭. 𝗙𝘂𝗻𝗻𝘆 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🌙𝟬 𝟮. 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 💔𝟬 𝟯. 𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🎎 𝟬𝟰. 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🐾𝟬 𝟱. 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🎧 𝟬𝟲. 𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🔥 𝟬𝟳. 𝗛𝗼𝗿𝗻𝘆 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 💑 𝟬𝟴. 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🌹 𝟬𝟵. 𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🖼️ 𝟭𝟬. 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼 🐤\n" +
 "║ 🌌 𝟭𝟭. 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🦁 𝟭𝟮. 𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲 🐤\n" +
 "║ 🎶 𝟭𝟯. 𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🐱 𝟭𝟰. 𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🚫 𝟭𝟱. 18+ 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🎮 𝟭𝟲. 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ ⚽ 𝟭𝟳. 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 👧 𝟭𝟴. 𝗚𝗶𝗿𝗹 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🤝 𝟭𝟵. 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "║ 🏏 𝟮𝟬. 𝗖𝗿𝗶𝗰𝗸𝗲𝘁 𝗩𝗶𝗱𝗲𝗼 🐤\n" +
 "╠══════════════════════╣\n" +
 "║ 🔰আপনি যে ক্যাটাগরির ভিডিও\n" +
 "║ দেখতে চান সেটির নাম্বার লিখুন!\n" +
 "║ ◀️ উদাহরণস্বরূপ: 11\n" +
 "╚══════════════════════╝";

 await api.sendMessage(
 { body: message },
 event.threadID,
 (error, info) => {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: event.senderID,
 link: albumOptions,
 });
 },
 event.messageID
 );
 return;
 }

 // ------------ Video Add via URL ------------
 const d1 = args[1] ? args[1].toLowerCase() : "";
 const validCommands = [
 "cartoon", "photo", "lofi", "sad", "islamic", "funny", "horny",
 "anime", "love", "baby", "lyrics", "sigma", "aesthetic",
 "cat", "flower", "ff", "sex", "football", "girl", "friend", "cricket",
 ];
 if (!d1 || !validCommands.includes(d1)) return;
 if (!event.messageReply || !event.messageReply.attachments) return;

 const attachment = event.messageReply.attachments[0].url;
 const URL = attachment;
 let queryMap = {
 cartoon: "addVideo",
 photo: "addPhoto",
 lofi: "addLofi",
 sad: "addSad",
 funny: "addFunny",
 islamic: "addIslamic",
 horny: "addHorny",
 anime: "addAnime",
 love: "addLove",
 lyrics: "addLyrics",
 flower: "addFlower",
 sigma: "addSigma",
 aesthetic: "addAesthetic",
 cat: "addCat",
 ff: "addFf",
 sex: "addSex",
 football: "addFootball",
 girl: "addGirl",
 friend: "addFriend",
 cricket: "addCricket",
 };
 const query = queryMap[d1];

 try {
 const response = await axios.get(
 `${await baseApiUrl()}/drive?url=${encodeURIComponent(URL)}`
 );
 const fileUrl = response.data.fileUrl;
 const fileExt = path.extname(fileUrl) || ".mp4";

 let queryType = [".jpg", ".jpeg", ".png"].includes(fileExt) ? "addPhoto" : query;

 const saveRes = await axios.get(
 `${await baseApiUrl()}/album?add=${queryType}&url=${fileUrl}`
 );

 api.sendMessage(
 `✅ | ${saveRes.data.data}\n🔰 | ${saveRes.data.data2}\n🔥 | URL: ${fileUrl}`,
 event.threadID,
 event.messageID
 );
 } catch (error) {
 console.error(error);
 api.sendMessage(
 `Failed to upload media.\nError: ${error.message || error}`,
 event.threadID,
 event.messageID
 );
 }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
 api.unsendMessage(handleReply.messageID);
 const admin = "100001039692046";

 if (event.type !== "message_reply") return;

 const reply = parseInt(event.body);
 if (isNaN(reply) || reply < 1 || reply > 20) {
 return api.sendMessage(
 "Please reply with a number between 1 and 20",
 event.threadID,
 event.messageID
 );
 }

 let queryMap = {
 1: ["funny", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼 <🤣"],
 2: ["islamic", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼 <😇"],
 3: ["sad", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼 <🥺"],
 4: ["anime", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗮𝗻𝗶𝗺 𝘃𝗶𝗱𝗲𝗼 <😘"],
 5: ["cartoon", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼 <😇"],
 6: ["lofi", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗟𝗼𝗳𝗶 𝘃𝗶𝗱𝗲𝗼 <😇"],
 7: ["horny", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼 <🥵"],
 8: ["love", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗟𝗼𝘃𝗲 𝘃𝗶𝗱𝗲𝗼 <😍"],
 9: ["flower", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗹𝗼𝘄𝗲𝗿 𝘃𝗶𝗱𝗲𝗼 <🌷🌸"],
 10:["photo", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼 <😙"],
 11:["aesthetic", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼 <😙"],
 12:["sigma", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗦𝗶𝗴𝗺𝗮 𝘃𝗶𝗱𝗲𝗼 <🐤"],
 13:["lyrics", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗟𝘆𝗿𝗶𝗰𝘀 𝘃𝗶𝗱𝗲𝗼 <🥰"],
 14:["cat", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼 <😙"],
 15:["sex", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗦𝗲𝘅 𝘃𝗶𝗱𝗲𝗼 <😙"],
 16:["ff", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼 <😙"],
 17:["football", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝘃𝗶𝗱𝗲𝗼 <😙"],
 18:["girl", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗚𝗶𝗿𝗹 𝘃𝗶𝗱𝗲𝗼 <😙"],
 19:["friend", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝘃𝗶𝗱𝗲𝗼 <😙"],
 20:["cricket", "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗖𝗿𝗶𝗰𝗸𝗲𝘁 𝘃𝗶𝗱𝗲𝗼 <😙"],
 };

 let [query, cp] = queryMap[reply];

 
 if ((reply === 7 || reply === 15) && event.senderID !== admin) {
 return api.sendMessage("Only admin can use it!", event.threadID, event.messageID);
 }

 try {
 const res = await axios.get(`${await baseApiUrl()}/album?type=${query}`);
 const imgUrl = res.data.data;

 const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", headers: { 'User-Agent': 'Mozilla/5.0' } });
 const filename = path.join(__dirname, `cache/dipto_${Date.now()}.mp4`);
 fs.writeFileSync(filename, Buffer.from(imgRes.data, "binary"));

 api.sendMessage(
 { body: cp, attachment: fs.createReadStream(filename) },
 event.threadID,
 () => fs.unlinkSync(filename),
 event.messageID
 );
 } catch (error) {
 console.error(error);
 api.sendMessage(
 `An error occurred while fetching the media.\n${error.message || error}`,
 event.threadID,
 event.messageID
 );
 }
};
  if (cooldown.has(uid)) {

    const expire = cooldown.get(uid);

    if (Date.now() < expire) {

      return Math.ceil((expire - Date.now()) / 1000);
    }
  }

  cooldown.set(uid, Date.now() + time);

  return false;
}

module.exports.run = async function ({
  api,
  event,
  args
}) {

  const cd = checkCooldown(event.senderID);

  if (cd) {

    return api.sendMessage(
      `⏳ Wait ${cd}s`,
      event.threadID,
      event.messageID
    );
  }

  // menu
  if (!args[0]) {

    let msg = "╔════『 ALBUM MENU 』════╗\n\n";

    let i = 1;

    for (const key in categories) {

      msg += `${i++}. ${categories[key]}\n`;
    }

    msg += "\n╚══════════════════════╝";

    return api.sendMessage(
      msg,
      event.threadID,
      (err, info) => {

        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
        });
      },
      event.messageID
    );
  }

  const type = args[0].toLowerCase();

  if (!categories[type]) {

    return api.sendMessage(
      "❌ Invalid Category",
      event.threadID,
      event.messageID
    );
  }

  return sendMedia(api, event, type);
};

module.exports.handleReply = async function ({
  api,
  event,
  handleReply
}) {

  if (event.senderID != handleReply.author) return;

  const index = parseInt(event.body);

  const keys = Object.keys(categories);

  const type = keys[index - 1];

  if (!type) {

    return api.sendMessage(
      "❌ Invalid Number",
      event.threadID,
      event.messageID
    );
  }

  return sendMedia(api, event, type);
};

async function sendMedia(api, event, type) {

  try {

    // YOUR API
    const apiUrl =
      `https://example.com/album?type=${type}`;

    const res = await axios.get(apiUrl);

    const mediaUrl = res.data.url;

    const ext =
      path.extname(mediaUrl).split("?")[0] || ".mp4";

    const filePath = path.join(
      __dirname,
      "cache",
      `${Date.now()}${ext}`
    );

    // stream download
    const response = await axios({
      url: mediaUrl,
      method: "GET",
      responseType: "stream",
    });

    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    writer.on("finish", async () => {

      await api.sendMessage(
        {
          body:
            `✅ ${categories[type]}\n\n` +
            `🎬 Enjoy Your Video`,
          attachment: fs.createReadStream(filePath),
        },
        event.threadID,
        () => {

          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        },
        event.messageID
      );
    });

    writer.on("error", () => {

      api.sendMessage(
        "❌ Download Failed",
        event.threadID,
        event.messageID
      );
    });

  } catch (e) {

    console.log(e);

    api.sendMessage(
      `❌ Error:\n${e.message}`,
      event.threadID,
      event.messageID
    );
  }
}
