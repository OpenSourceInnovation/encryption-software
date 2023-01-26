<script>
	import '../../app.css';
	import { aes256decrypt } from '../../utils';

	let text = '';
	let key = '';
	let algorithm = 'aes-256-cbc';
	let reposArrived = false;
	let responseText = '';
	let useRandomKey = false;
	// let randomKey = genRandomKey();

	function _decrypt() {
		aes256decrypt(text, key).then((res) => {
			responseText = res;
			reposArrived = true;
		});
	}

	// function genRandomKey() {
	// 	// generate a random string of 32 bytes
	// 	const randomString = crypto.getRandomValues(new Uint8Array(32));
	// 	// convert it to a hex string
	// 	const randomKey = Array.from(randomString, (byte) => {
	// 		return ('0' + (byte & 0xff).toString(16)).slice(-2);
	// 	}).join('');
	// 	return randomKey;
	// }
	
	$: completeInfo = text !== '' && key !== '';
</script>

<div class="my-auto p-16 rounded-lg text-center grid grid-row-2 gap-2">
	<input
		class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
		bind:value={text}
		placeholder="Enter text to Decrypt ( Only AES-256-CBC cipher )"
	/>
	{#if !useRandomKey}
		<input
			class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
			bind:value={key}
			placeholder="Enter key"
		/>
	{/if}

	<input
		bind:value={algorithm}
		disabled
		class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
		placeholder="Enter algorithm"
	/>

	<button
		disabled={!completeInfo}
		class="mx-auto disabled:opacity-50 mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		on:click={_decrypt}>Decrypt</button
	>

	{#if reposArrived}
		<input
			class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
			bind:value={responseText}
			placeholder="Response Text Goes here "
		/>
	{/if}
</div>
