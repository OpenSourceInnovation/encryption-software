import { Client as Appwrite, Databases, Account, Storage } from 'appwrite';

const server = {
	endpoint: import.meta.env.VITE_APP_ENDPOINT.toString(),
	project: import.meta.env.VITE_APP_PROJECT.toString(),
	collection: import.meta.env.VITE_APP_COLLECTION_ID.toString(),
	database: import.meta.env.VITE_APP_DATABASE_ID.toString(),
	bucket: import.meta.env.VITE_APP_BUCKET_ID.toString()
};

const client = new Appwrite();
const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
client.setEndpoint(server.endpoint).setProject(server.project);

const sdk = { account, database, storage };
export { sdk, server };
