let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
โญโ[ *๐๐๐๐ช๐ฎ๐ช-๐๐ค๐ฉ  แทฆ - MD* ]
โ *โค ๐ท๐พ๐ป๐ฐ ${name}*
โ
โ *ใ๐ค ๐ด๐๐๐ฐ๐ณ๐พ ๐ณ๐ด๐ป ๐ฑ๐พ๐ ๐คๅฝก*
โ *=> ๐ฑ๐พ๐ ๐ฐ๐ฒ๐๐ธ๐๐พ โ*
โ *=> ๐ฑ๐พ๐ ๐ณ๐ด ๐๐๐พ ๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐พ โ*
โ *=> ๐๐ธ๐ด๐ผ๐ฟ๐พ ๐ฐ๐ฒ๐๐ธ๐๐พ: ${uptime}*
โฐโโโโโโโโโโโโโโโ
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/Jooell1/Mafuyu-bot', '๐ถ๐ธ๐๐ท๐๐ฑ', null, null, [
['๐ผ๐ด๐ฝ๐ ๐ฟ๐๐ธ๐ฝ๐ฒ๐ธ๐ฟ๐ฐ๐ป', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
