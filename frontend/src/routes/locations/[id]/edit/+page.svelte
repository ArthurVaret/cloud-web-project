<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Input from '$lib/components/Input.svelte';
	import type { PageData, ActionData } from './$types';
	export let form: ActionData;
	export let data: PageData;
	$: location = data?.location;
	$: startDate = new Date(location.startDate).toISOString().substr(0, 10);
	$: endDate = new Date(location.startDate).toISOString().substr(0, 10);
	$: if (browser && form) {
		goto('/locations');
	}
</script>

<div class="w-50 mx-auto">
	<h1>Edit location</h1>
	<p>Go <a href="/locations">back</a></p>
	{#if location}
		<form method="POST" class="col-md-auto">
			<div class="form-outline mb-3">
				<Input
					name="filmType"
					label="Film Type"
					value={location.filmType}
				/>
			</div>
			<div class="row">
				<div class="col form-outline mb-3">
					<Input
						name="filmProducerName"
						label="Producer Name"
						value={location.filmProducerName}
					/>
				</div>
				<div class="col form-outline mb-3">
					<Input
						name="filmDirectorName"
						label="Director Name"
						value={location.filmDirectorName}
					/>
				</div>
			</div>
			<div class="form-outline mb-3">
				<Input
					name="filmName"
					label="Film Name"
					value={location.filmName}
				/>
			</div>
			<div class="row">
				<div class="col form-outline mb-3">
					<Input
						type="date"
						name="startDate"
						label="Start date"
						value={startDate}
					/>
				</div>
				<div class="col form-outline mb-3">
					<Input
						type="date"
						name="endDate"
						label="End date"
						value={endDate}
					/>
				</div>
			</div>
			<div class="form-outline mb-3">
				<Input
					type="number"
					name="district"
					label="District"
					value={location.district}
				/>
			</div>
			<div class="form-outline mb-3">
				<Input
					name="sourceLocationId"
					label="Source Location Id"
					value={location.sourceLocationId}
				/>
			</div>

			<label class="form-label" for="geolocation">Geolocation</label>
			<div class="row">
				<div class="col form-outline mb-3 text-muted">
					<Input
						type="number"
						name="geolocationX"
						label="X"
						value={location.geolocation.coordinates[0]}
					/>
				</div>
				<div class="col form-outline mb-3 text-muted">
					<Input
						type="number"
						name="geolocationY"
						label="Y"
						value={location.geolocation.coordinates[1]}
					/>
				</div>
				<div class="col form-outline mb-3 text-muted">
					<Input
						name="geolocationType"
						label="Type"
						value={location.geolocation.type}
					/>
				</div>
			</div>
			<div class="form-outline mb-3">
				<Input
					name="address"
					label="Address"
					value={location.address}
				/>
			</div>
			<div class="form-outline mb-3">
				<Input
					type="number"
					name="year"
					label="Year"
					value={location.year}
				/>
			</div>
			<button class="btn btn-warning btn-lg mb-3">Update</button>
		</form>
	{:else}
		<p class="text-danger">No location found</p>
	{/if}
</div>
