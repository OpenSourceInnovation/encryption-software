<script>
	import '../app.css';
	import { state } from '../store';
	import LogoSvelte from '../assets/svelte.svg';
	import LogoAppwrite from '../assets/appwrite.svg';
	let name = '';

	let loggedIn = false;
	const username = async () => {
		const name = await state.name();
		return name;
	};

	state.subscribe((value) => {
		if (value.account !== null) {
			loggedIn = true;
			username().then((lname) => {
				name = lname;
			});
		}
	});
</script>

<div class="my-auto p-16 rounded-lg text-center grid grid-row-2 gap-2">
	{#if !loggedIn}
		<p class="text-3xl font-bold">Welcome to Encrypt-Tool</p>

		<p class="text-sm">
			A simple site to encrypt and decrypt text with aes-256-cbc algorithm made with
			<img class="w-4 h-4 inline" src={LogoSvelte} alt="Appwrite Logo" /> &
			<img class="w-4 h-4 inline" src={LogoAppwrite} alt="Appwrite Logo" />
			.
		</p>
	{:else}
		<p class="text-3xl font-bold">Welcome {name} 🥳</p>
		<p class="text-sm">
			click on the buttons below to encrypt or decrypt <br /> ( you can encrypt file now )
		</p>
	{/if}
	<a
		class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		href="/Encrypt">🔒 Encrypt Text</a
	>
	<a
		class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		href="/Decrypt">🔓 Decrypt Text</a
	>

	{#if loggedIn}
		<br />
		<hr />

		<a
			class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
			href="/">🗄️ Encrypt File</a
		>

		<a
			class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
			href="/">🗃️ Decrypt File</a
		>
	{/if}
</div>
