<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="w-50 mx-auto">
	<h1>New location</h1>
	{#if form?.ok && form?.result}
		<p class="text-success">Added new location !</p>
	{/if}
	<p>Go <a href="/locations">back</a></p>
	<form method="POST" class="col-md-auto">
		<div class="form-outline mb-3">
			<Input name="filmType" label="Film Type" />
		</div>
		<div class="row">
			<div class="col form-outline mb-3">
				<Input name="filmProducerName" label="Producer Name" />
			</div>
			<div class="col form-outline mb-3">
				<Input name="filmDirectorName" label="Director Name" />
			</div>
		</div>
		<div class="form-outline mb-3">
			<Input name="filmName" label="Film Name" />
		</div>
		<div class="row">
			<div class="col form-outline mb-3">
				<Input type="date" name="startDate" label="Start date" />
			</div>
			<div class="col form-outline mb-3">
				<Input type="date" name="endDate" label="End date" />
			</div>
		</div>
		<div class="form-outline mb-3">
			<Input type="number" name="district" label="District" />
		</div>
		<div class="form-outline mb-3">
			<Input name="sourceLocationId" label="Source Location Id" />
		</div>

		<label class="form-label" for="geolocation">Geolocation</label>
		<div class="row">
			<div class="col form-outline mb-3 text-muted">
				<Input type="number" name="geolocationX" label="X" />
			</div>
			<div class="col form-outline mb-3 text-muted">
				<Input type="number" name="geolocationY" label="Y" />
			</div>
			<div class="col form-outline mb-3 text-muted">
				<Input name="geolocationType" label="Type" value="Point" />
			</div>
		</div>
		<div class="form-outline mb-3">
			<Input name="address" label="Address" />
		</div>
		<div class="form-outline mb-1">
			<Input type="number" name="year" label="Year" value="2023" />
		</div>
		<input type="submit" value="New" class="btn btn-primary mt-4 mb-4" />
	</form>
</div>
