import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*NYARI SC BANG? :V*\ncari sendiri lah bg `
conn.sendHydrated(m.chat, str, wm, pepe, 'https://instagram.com/itz.reza_official_', 'IG OWNER', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = handler.help = ['sc']
handler.tags = ['fun']

export default handler
