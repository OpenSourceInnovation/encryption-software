import { json } from "@sveltejs/kit";
import { createDecipheriv } from "crypto";

export async function POST({ request }: any) {
    const rawbody = await request.text();
    const body = JSON.parse(rawbody.toString());
    const { message, key, iv } = body;
    let finalKey = key;
    let finalIv = iv;

    // check key size
    if (key.length !== 32) {
        finalKey = Buffer.alloc(32, key);
    }

    // check iv size
    if (iv.length !== 16) {
        finalIv = Buffer.alloc(16, iv);
    }

    const decipher = createDecipheriv('aes-256-cbc', finalKey, finalIv);
    let decrypted = decipher.update(message, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return json({ decrypted, key, iv });
}
