const IV = "765575f17de159ca0c0f51cf10ac7bd0";

async function aes256encrypt(text: string, key: string) {
    const res = await Promise.resolve(
        fetch('http://localhost:3000/api/encrypt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: text, key, iv: IV })
        })
    )
    // convert to string
    const json = await res.json();
    return json.encrypted;
}

export { aes256encrypt };
