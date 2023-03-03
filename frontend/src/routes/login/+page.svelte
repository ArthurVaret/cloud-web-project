<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { ActionData, PageData } from './$types';
	export let form: ActionData;
	export let data: PageData;
	$: if (browser && data?.user) {
		goto('/locations');
	}
</script>

<div class="w-50 mx-auto">
	<h1>Login</h1>
	<form method="POST" action="/login" class="col-md-auto">
		<div class="form-outline">
			<Input name="username" label="Username" />
		</div>
		<div class="form-outline">
			<Input type="password" name="password" label="Password" />
		</div>
		<input type="submit" value="Log in" class="btn btn-primary mt-4 mb-4" />
		<p class="text-muted">
			Not registered?
			<a href="/register"> Register </a>
		</p>
		{#if form?.missingFields}
			<p class="text-danger">Please fill all fields</p>
		{/if}
		{#if form?.missingUsername}
			<p class="text-danger">Missing username</p>
		{/if}
		{#if form?.missingPassword}
			<p class="text-danger">Missing password</p>
		{/if}
		{#if !form?.ok && form?.result}
			<p class="text-danger">{form.result}</p>
		{/if}
	</form>
</div>
