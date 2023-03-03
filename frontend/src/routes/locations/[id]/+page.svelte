<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data?.user && data?.location}
	<p>Go <a href="/locations">back</a></p>
	{#each Object.entries(data.location) as [key, value]}
		{#if key === 'geolocation'}
			<p>
				<span class="text-info">{key}</span> = x: {data.location[key]
					.coordinates[0]}, y: {data.location[key].coordinates[1]},
				type: {data.location[key].type}
			</p>
		{:else}
			<p><span class="text-info">{key}</span> = {value}</p>
		{/if}
	{/each}
{:else}
	<p>Location not found</p>
{/if}
