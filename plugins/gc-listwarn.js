let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let imagewarn = './src/warn.jpg'
let caption = `β­βγππΌππππ-π½ππγββ· 
β β₯β οΈ ππππ°ππΈπΎπ π°π³ππ΄πππΈπ³πΎπ
β β₯ββ«·α­α΄α΄κ°α΄Κα΄-Κα΄α΄οΉβ
β β₯β *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
β β₯β 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\nβ\nβ - - - - - - - - -`.trim()).join('\n') : ''}
β β₯β°βββββββββββ
β°ββββββββββββββ·`
await conn.sendButton(m.chat, caption, wm, imagewarn, [['π π π π π ', '#menu']], m, {mentions: await conn.parseMention(caption)})}
handler.command = /^(listwarn)$/i 
handler.group = true
handler.admin = true
handler.limit = 1
export default handler
