import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const rawbody = await request.text();
    const body = JSON.parse(rawbody.toString());
    const { message, key } = body;
    return json({ encrypted: message, key });
}
