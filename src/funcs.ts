import crypto from 'crypto';

const iv = crypto.randomBytes(16);

export function aes256encrypt(data: string, key: string): string {
	const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
	let encrypted = cipher.update(data, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	return encrypted;
}
