<script lang="ts">
	export let type: string = 'text';
	export let name: string;
	export let label: string;
	export let value: string = '';
	export let min: string = '0';
</script>

<label class="form-label" for={name}>{label}</label>
{#if type === 'number'}
	<input
		type="number"
		{name}
		id={name}
		class="form-control form-control-lg"
		{value}
		{min}
	/>
{:else}
	<input
		{type}
		{name}
		id={name}
		class="form-control form-control-lg"
		{value}
	/>
{/if}
