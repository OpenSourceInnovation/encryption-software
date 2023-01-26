import { json } from "@sveltejs/kit";
import { createCipheriv, randomBytes } from "crypto";

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

    const cipher = createCipheriv('aes-256-cbc', finalKey, finalIv);  
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return json({ encrypted, key, iv });
}
