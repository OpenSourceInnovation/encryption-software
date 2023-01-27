<script>
	import { file, state } from '../../store';
	let fileinput;
	let loggedIn = false;
	let key = '';
	let id = '';
	let downloadlink = '';

	state.subscribe((value) => {
		if (value.account !== null) {
			loggedIn = true;
		}
	});

	// @ts-ignore
	const uploadFile = async (Tfile) => {
		try {
			await file.create(Tfile);
			console.log('File uploaded....');
		} catch (err) {
			console.log(err);
		}
	};

	// get file id
	const getFileId = async () => {
		try {
			file.fetch().then((res) => {
				// @ts-ignore
				const ids = JSON.parse(res);
				id = ids.files[0].$id;
				// console.log(res);
			});
		} catch (err) {
			console.log(err);
		}
	};

	// get Download link
	const getDownloadLink = async () => {
		try {
			// @ts-ignore
			downloadlink = await file.geturl(id);
		} catch (err) {
			console.log(err);
		}
	};

	// @ts-ignore
	const onFileSelected = (e) => {
		// file.create()
		console.log(e.target.files[0]);
		if (loggedIn) {
			uploadFile(e.target.files[0]);
		} else {
			console.warn('You must be logged in to upload a file');
		}
	};
</script>

<div class="my-auto p-16 rounded-lg text-center grid grid-row-2 gap-2">
	<!-- <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
	<input
	class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
		type="file"
		accept=".jpg, .jpeg, .png"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/> -->
	<input
		class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
		bind:value={key}
		placeholder="Enter key"
	/>

	<input
		class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg "
		type="file"
		accept=".jpg, .jpeg, .png"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>

	<button on:click={getDownloadLink}> Trigger </button>

	<p>{downloadlink}</p>
</div>
