<script>
	import '../app.css';
	import { push } from "svelte-spa-router";

	function _encrypt() {
		push("/Encrypt");
	}

	function _decrypt() {
		push("/Decrypt");
	}

</script>

<div class="my-auto p-16 rounded-lg text-center grid grid-row-2 gap-2">

	<button
		class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		on:click={_encrypt}>Encrypt</button
	>
	<button
		class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		on:click={_decrypt}>Decrypt</button
	>

</div>
