const IV = '765575f17de159ca0c0f51cf10ac7bd0';

const PROD_URL = 'https://encryption-software.vercel.app';
const ENDPOINT = process.env.NODE_ENV === 'production' ? PROD_URL : 'http://localhost:3000';

async function aes256encrypt(text: string, key: string) {
	const res = await Promise.resolve(
		fetch(ENDPOINT + '/api/encrypt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: text, key, iv: IV })
		})
	);
	// convert to string
	const json = await res.json();
	return json.encrypted;
}

async function aes256decrypt(text: string, key: string) {
	const res = await Promise.resolve(
		fetch(ENDPOINT + '/api/decrypt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: text, key, iv: IV })
		})
	);
	// convert to string
	const json = await res.json();
	return json.decrypted;
}

export { aes256encrypt, aes256decrypt };
