import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?

*PAYMENT ↓*
_*Pulsa(3):*_ ${pulsa}

_*Dana/ovo:*_ ${dana}
*DONASI DENGAN FOLLOW IG OWNER JUGA BOLEH*
https://instagram.com/itz.reza_official_
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/Rezaofc', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
