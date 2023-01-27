import { writable, get } from 'svelte/store';
import { sdk, server } from './appwrite';
import { ID, Permission, Role } from 'appwrite';
import { Models } from 'appwrite';

export type History = {
	txt: string;
	method: string;
	key: string;
} & Models.Document;

const createHistory = () => {
	const { subscribe, update, set } = writable<History[]>([]);

	return {
		subscribe,
		add: async (txt: string, method: string, key: string) => {
			const user = Role.user(get(state).account.$id);
			const history = await sdk.database.createDocument<History>(
				server.database,
				server.collection,
				ID.unique(),
				{
					txt,
					method,
					key
				},
				[Permission.read(user), Permission.write(user), Permission.delete(user)]
			);

			return update((items) => {
				return [history, ...items];
			});
		},
		get: async () => {
			const docs = await sdk.database.listDocuments<History>(server.database, server.collection);
			return set(docs.documents);
		}
	};
};

const createState = () => {
	const { subscribe, set, update } = writable({
		account: null
	});

	return {
		subscribe,
		name: async () => {
			const user = await Promise.resolve(sdk.account.get());
			return user.name;
		},
		signup: async (email: string, password: string, name: string) => {
			await sdk.account.create('unique()', email, password, name);
            await sdk.account.createEmailSession(email, password);
            const user = await sdk.account.get();
            state.init(user);
		},
		login: async (email: string, password: string) => {
			await sdk.account.createEmailSession(email, password);
			const user = await sdk.account.get();
			state.init(user);
		},
		logout: async () => {
			await sdk.account.deleteSession('current');
			return set({ account: null });
		},
		init: async (account: any) => {
			return set({ account });
		}
	};
};

export const state = createState();
export const history = createHistory();
