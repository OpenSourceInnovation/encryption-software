<script>
	import { history } from '../../store';
	import { onMount } from 'svelte';
	import HistoryBlock from '$lib/historyBlock.svelte';

	onMount(history.get);
</script>

<div>
	<ul>
		{#each $history as his}
			<HistoryBlock txt={his.txt} key={his.key} method={his.method} />
		{/each}
	</ul>
</div>
