<script>
	/**
	 * @type {any}
	 */
	export let txt;
	/**
	 * @type {any}
	 */
	export let method;
	/**
	 * @type {any}
	 */
	export let key;
</script>

<!-- A Box wi-->
<li class="flex justify-between items-center mt-4 px-4">
	<div class="flex">
		<div class="capitalize ml-3 text-md font-medium">
			{txt === null ? 'Null' : txt} |
			{method === null ? 'Null' : method} |
			{key === null ? 'Null' : key}
		</div>
	</div>
</li>
