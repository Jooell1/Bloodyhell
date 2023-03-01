import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `¡Hola @user soy un bot privado, me llamo Bloodyhell Bot.

╔ 「 PRINCIPAL : 」 
║╭—————————
║├‣ .sticker: Transforma una imagen o video en sticker
║├‣ .attp: Transforma un texto a un sticker multicolor
║├‣ .menu: Muestra los comandos del bot
║├‣ .ping: Ver la velocidad del bot
║├‣ .owner: Dueño del bot
║╰—————————
╚══════════
╔ 「 GRUPOS : 」 
║╭—————————
║├‣  .notify: Envia un mensaje con una mencion invisible
║├‣  .todos: Envia un mensaje mencionando asi: @
║├‣  .tagall: Mencionar con texto
║├‣  .kick @user: Sacar un numero 
║├‣  .grupo: Abrir/Cerrar grupo
║├‣  .daradmin: Dar administrador
║├‣  .quitaradmin: Sacar administrador
║├‣  .formarpareja: Formar una pajera al lazar
║├‣  .warn @user: Dar advertencia a una persona
║├‣  .fantasmas: Personas inactivas en el grupo
║╰—————————
╚══════════
╔ 「 DESCARGAS/BÚSQUEDA : 」 
║╭—————————
║├‣  .play: Descargar una cancion en Mp3 o Mp4
║├‣  .ytmp3: Descarga un video en mp3
║├‣  .ytmp4: Descarga un video en mp4
║├‣  .google: Busca cualquier informacion
║╰—————————
╚══════════`.trim()
let buttons = [
{ buttonId: '.owner', buttonText: { displayText: '🧿ᴏᴡɴᴇʀ🏓' }, type: 1 },
{ buttonId: '.adquirir', buttonText: { displayText: '🔮ᴀᴅǫᴜɪʀɪʀ⛄' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '🧿𝙱𝚕𝚘𝚘𝚍𝚢𝚑𝚎𝚕𝚕🏓',
body: null,
thumbnail: img,
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙴𝚂𝚃𝙰 𝚂𝙸𝙴𝙽𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙿𝙴𝚁𝙴...*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
