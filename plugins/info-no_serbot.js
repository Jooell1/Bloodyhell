let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
*[โ๐๐๐๐โ] ๐ป๐ฐ๐ ๐ต๐๐ฝ๐ฒ๐ธ๐พ๐ฝ๐ด๐ ๐ฟ๐ฐ๐๐ฐ ๐๐ด๐ ๐ฑ๐พ๐ (#๐๐๐๐๐๐, #๐๐๐๐๐๐๐, #๐๐๐๐, #๐๐๐๐๐๐๐, #๐๐๐๐๐๐๐, #๐๐๐๐๐๐๐๐๐) ๐ฝ๐พ ๐ด๐๐๐ฐ๐ฝ ๐ฐ๐ฒ๐๐๐ฐ๐ป๐ผ๐ด๐ฝ๐๐ด ๐ต๐๐ฝ๐ฒ๐ธ๐พ๐ฝ๐ฐ๐ป๐ด๐ ๐ฟ๐ฐ๐๐ฐ ๐ด๐๐๐ด ๐ฑ๐พ๐ (๐๐๐๐ช๐ฎ๐ช-๐๐ค๐ฉ)*

*โโ ๐ฟ๐๐ด๐ณ๐ด ๐ฟ๐๐พ๐ฑ๐ฐ๐ ๐ธ๐ฝ๐๐๐ฐ๐ป๐ฐ๐ ๐ณ๐ด๐๐ณ๐ด ๐ฒ๐ด๐๐พ ๐ด๐ป ๐ฑ๐พ๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐ณ๐พ ๐๐ฝ๐พ ๐ณ๐ด ๐ป๐พ๐ ๐๐๐๐พ๐๐ธ๐ฐ๐ป๐ด๐ ๐๐๐ด ๐ท๐ฐ๐ ๐ด๐ฝ ๐ด๐ป ๐ฒ๐ฐ๐ฝ๐ฐ๐ป ๐ณ๐ด ๐น๐ท๐๐*
*โ https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw*`
let buttonMessage= {
'document': { url: `https://github.com/Jooell1/Mafuyu-bot` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Jooell1/Mafuyu-bot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCVffcsDwUR2iVXeC-b4yprw' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalabot`, buttonText: {displayText: '๐ธ๐ฝ๐๐๐ฐ๐ป๐ฐ๐ ๐ฑ๐พ๐'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler

