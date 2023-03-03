<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Input from '$lib/components/Input.svelte';
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;

	$: if (browser && form?.ok && !data.user) {
		goto('/');
	}
</script>

<div class="w-50 mx-auto">
	<h1>My profile</h1>
	{#if form?.ok}
		<p class="text-success">Profile updated !</p>
	{/if}
	<form method="POST" action="?/profile">
		<div class="form-outline mb-4">
			<Input
				name="username"
				label="Username"
				value={data.user.username}
			/>
		</div>
		<div class="form-outline mb-4">
			<Input type="password" name="password" label="Password" />
		</div>
		<button class="btn btn-warning btn-lg mb-3">Update</button>
		<button formaction="?/disconnect" class="btn btn-danger btn-lg mb-3"
			>Disconnect</button
		>
	</form>
</div>
