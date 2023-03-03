<script lang="ts">
	import { navigating } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

{#if $navigating}
	<Loader />
{/if}

<Nav {data} />

<main class="mx-auto w-75">
	<slot />
</main>
