const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "album",
  version: "10.0.0",
  hasPermssion: 0,
  credits: "SAHU",
  description: "Advanced Album System",
  usePrefix: true,
  cooldowns: 5,
};

const cooldown = new Map();

const categories = {
  funny: "🤣 Funny Video",
  sad: "🥺 Sad Video",
  anime: "🌸 Anime Video",
  lofi: "🎧 Lofi Video",
  football: "⚽ Football Video",
  cricket: "🏏 Cricket Video",
  cat: "🐱 Cat Video",
  aesthetic: "🌌 Aesthetic Video",
  islamic: "🕌 Islamic Video",
  sigma: "🦁 Sigma Video",
  lyrics: "🎶 Lyrics Video",
  flower: "🌹 Flower Video",
  boy: "🧑 Boy Video",
  girl: "👧 Girl Video",
  friend: "🤝 Friends Video",
  ff: "🎮 Free Fire Video"
};

function checkCooldown(uid, time = 5000) {

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
