<script>
	import '../app.css';
	import LogoSvelte from "../assets/svelte.svg";
	import LogoAppwrite from "../assets/appwrite.svg";
</script>

<div class="my-auto p-16 rounded-lg text-center grid grid-row-2 gap-2">
	<p class="text-3xl font-bold"
	>Welcome to the 
		<img
		class="w-8 h-8 inline"
		src={LogoSvelte}
		alt="Appwrite Logo"
		/> &
		<img
                class="w-8 h-8 inline"
                src={LogoAppwrite}
                alt="Appwrite Logo"
        />
		Encrypt-Tool
	</p>

	<p class="text-sm">This is a simple tool to encrypt and decrypt text with aes-256-cbc algorithm.</p>

	<a class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		href="/Encrypt">🔒 Encrypt Text</a>
	<a class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
		href="/Decrypt">🔓 Decrypt Text</a>

</div>
