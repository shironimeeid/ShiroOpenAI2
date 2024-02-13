const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const OpenAI = require("openai");
let setting = require("./key.json");
const openai = new OpenAI({ apiKey: setting.keyopenai });
const { API } = require('nhentai-api');
const api = new API();
const ytdl = require('ytdl-core');
const fetch = require('node-fetch');
const thumb = Buffer.from('base64EncodedString', 'base64');
const { StarRail } = require("starrail.js");
const { AnimeWallpaper, AnimeSource } = require('anime-wallpaper');


// Function to handle commands; this needs to be integrated into your bot's message event listener

global.botname = "Shiro-Betav9"
global.ownernumber = '6281219244302'
global.ownername = 'renn.shiro'
global.ownerNumber = ["6281219244302@s.whatsapp.net"]
global.ownerweb = "ShiroBeta"
global.websitex = "https://renn-ezzcos.vercel.app/"
global.wagc = "https://whatsapp.com/channel/0029VaHVB5lHLHQTQ7VI723j"
global.themeemoji = '🪀'
global.wm = "Shiro-Betav9"
global.botscript = 'https://github.com/shironimeeid' //script link
global.packname = "By ShiroBot"
global.author = "OneeChan Bakaa!!"
global.creator = "6281219244302@s.whatsapp.net"


module.exports = sensekai = async (client, m, chatUpdate) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    //var prefix = "!";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    //FAKE
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, }}}
  const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, }}}
 
    async function downloadImageAsBuffer(imageUrl) {
      const response = await fetch(imageUrl);
      const buffer = await response.buffer();
      return buffer;
  }
  const starrailClient = new StarRail({ cacheDirectory: "./cache" });
starrailClient.cachedAssetsManager.cacheDirectorySetup();

// Optional: Activate auto cache updater
starrailClient.cachedAssetsManager.activateAutoCacheUpdater({
    instant: true,
    timeout: 60 * 60 * 1000, // 1 hour
    onUpdateStart: async () => console.log("Updating Star Rail Data..."),
    onUpdateEnd: async () => {
        starrailClient.cachedAssetsManager.refreshAllData();
        console.log("Updating Completed!");
    }
});
  // Usage
  downloadImageAsBuffer('https://telegra.ph/file/94ab2f02387dee19a6ce0.jpg')
      .then(buffer => {
          const thumb = buffer;
          // Now you can use `thumb` as the jpegThumbnail
      })
      .catch(err => console.error('Failed to download image:', err));

    const thumb = fs.readFileSync('img/cheemspic2.png');
    const reply2 = (from, teks) => {
      client.sendMessage(from, { text: teks,
          contextInfo: {
              forwardingScore: 9999999,
              isForwarded: true,
              externalAdReply: {
                  showAdAttribution: true,
                  title: '© ShiroBot 𝘷9',
                  thumbnailUrl: 'https://telegra.ph/file/94ab2f02387dee19a6ce0.jpg', // Thumbnail URL
              }
          }
      }, { quoted: fgclink });
  };


    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    async function handleCommand(userCommand) {
      const args = userCommand.split(' ');
      const command = args.shift().toLowerCase();
    }

    async function handleWallpaperCommand(args) {
      if (args.length < 1) {
          return "Please provide a search term. Usage: wallpaper <SearchTerm> [<Source>]";
      }
    }
    // Group
    const searchTerm = args[0];
    const source = args[1] ? args[1].toLowerCase() : "wallhaven"; // Default to WallHaven if no source is specified
    const wallpaper = new AnimeWallpaper();
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (isCmd2) {
      switch (command) {

        case "nhsearch":
          if (!text) return m.reply("Please provide a search query.");
          try {
            const searchResults = await api.search(text);
            let message = `Search results for: ${text}\n\n`;
            searchResults.books.slice(0, 5).forEach((book, index) => { // Limiting to first 5 results
              message += `${index + 1}. Title: ${book.title.english}\nID: ${book.id}\n\n`;
            });
            message += "Use the ID to get more details about a specific book.";
            m.reply(message);
          } catch (error) {
            console.error(error);
            m.reply("Failed to search nhentai.");
          }
          break;

          case 'getbook':
  if (!args.length) return m.reply('Please provide a book ID.');
  const bookId = args[0];
  api.getBook(bookId).then(book => {
    const coverUrl = api.getImageURL(book.cover);
    const message = `Title: ${book.title.pretty}\nCover: ${coverUrl}`;
    m.reply(message);
  }).catch(err => m.reply('Failed to fetch book.'));
  break;

  case 'ai': 
  case 'ask':
  case 'openai': {
      if (!text) return reply("Harap masukkan teks pertanyaan.");
      const url = `https://aemt.me/openai?text=${encodeURIComponent(text)}`;
      const fetch = require('node-fetch');
      fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data && data.result) {
              reply(data.result);
          } else {
              reply("Maaf, terjadi kesalahan saat mengambil data dari OpenAI.");
          }
      })
      .catch(error => {
          console.error(error);
          reply("Terjadi kesalahan saat melakukan request ke OpenAI.");
      });
      break;
  }
  case 'play':
    case 'song': {
        if (!text) return reply(`Example: ${prefix + command} anime whatsapp status`);
        // Asumsi modul './lib/ytdl' memiliki fungsi 'mp3' yang berfungsi sebagaimana mestinya
        const xeonplaymp3 = require('./ytdl');
        let yts = require("youtube-yts");
    
        try {
            let search = await yts(text);
            if (search.videos.length === 0) return reply("No videos found for your query.");
            let video = search.videos[0];
            const mp3Result = await xeonplaymp3.mp3(video.url);
            if (!mp3Result || !mp3Result.url) return reply("Failed to convert video to mp3.");
            await client.sendMessage(m.chat, { text: `Here's your song: ${mp3Result.url}` }, { quoted: m });
        } catch (error) {
            console.error(error);
            reply("An error occurred while processing your request.");
        }
        break;
    }


  case 'randombook':
  api.getRandomBook().then(book => {
    const coverUrl = api.getImageURL(book.cover);
    const message = `Random Book: ${book.title.pretty}\nCover: ${coverUrl}`;
    m.reply(message);
  }).catch(err => m.reply('Failed to fetch a random book.'));
  break;

        case "help": case "menu": case "start": case "info":
          m.reply(`*Whatsapp Bot OpenAI*
            
*(ChatGPT)*
Cmd: ${prefix}ai 
Tanyakan apa saja kepada AI. 

*(DALL-E)*
Cmd: ${prefix}img
Membuat gambar dari teks

*(Source Code Bot)*
Cmd: ${prefix}sc
Menampilkan source code bot yang dipakai`)
          break;
        case "ai": case "openai": case "chatgpt": case "ask":
          try {
            // tidak perlu diisi apikeynya disini, karena sudah diisi di file key.json
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: q }],
              model: 'gpt-3.5-turbo'
            });
          
            await m.reply(chatCompletion.choices[0].message.content);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;

          case "character":
          if (args.length === 0) return reply("Please provide a character name.");

          const queryName = args.join(" ").toLowerCase(); // Assuming character name can be multiple words
          const characters = starrailClient.getAllCharacters();
          const character = characters.find(c => c.name.get("en").toLowerCase() === queryName);
      
          if (!character) {
              reply("Character not found.");
              return;
          }
          const replyText = `Name: ${character.name.get("en")}\nType: ${character.type}\n...`; // Customize this part
          reply(replyText);
    break
        case "img": case "ai-img": case "image": case "images": case "dall-e": case "dalle":
          try {
            // tidak perlu diisi apikeynya disini, karena sudah diisi di file key.json
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const image = await openai.images.generate({ 
              model: "dall-e-3",
              prompt: q, 
              n: 1,
              size: '1024x1024' 
              });
            //console.log(response.data.data[0].url) // see the response
            client.sendImage(from, image.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
          case "sc": case "script": case "scbot":
           m.reply("Bot ini menggunakan script dari https://github.com/shironimeeid/ShiroOpenAI");
          break

          case "ytmp3": {
            if (!args.length) return m.reply("Please provide a YouTube video URL.");
            const videoURL = args[0];
            try {
                let info = await ytdl.getInfo(videoURL);
                let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
                let bestAudioFormat = ytdl.chooseFormat(audioFormats, { quality: 'highestaudio' });
                const audioStream = ytdl.downloadFromInfo(info, { format: bestAudioFormat });
                const tempFilePath = `./temp/${info.videoDetails.videoId}.mp3`;
                audioStream.pipe(fs.createWriteStream(tempFilePath)).on('finish', async () => {
                    const audioBuffer = fs.readFileSync(tempFilePath);
                    await client.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mp4', ptt: false }, { quoted: m });
                    fs.unlinkSync(tempFilePath); // Clean up after sending
                });
            } catch (error) {
                console.error(error);
                m.reply("Failed to download or send the audio.");
            }
            break;
        }
        
        case "ytmp4": {
          // Assuming args[0] is the YouTube video URL
          if (!args.length) return m.reply("Please provide a YouTube video URL.");
          const videoURL = args[0];
          let info = await ytdl.getInfo(videoURL);
          let format = ytdl.chooseFormat(info.formats, { quality: '480' }); // Choose a specific video quality
          
          // Download and send the video file
          const videoStream = ytdl.downloadFromInfo(info, { format: format });
          const filePath = `./temp/${info.videoDetails.videoId}.mp4`;
          videoStream.pipe(fs.createWriteStream(filePath)).on('finish', () => {
              // Send the video file to the user, this part depends on your bot's method to send files
              // Example: client.sendVideo(from, filePath, "Here's your video");
              fs.unlinkSync(filePath); // Clean up after sending
          });
          break;
        }
        default: {

          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
