<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="w-50 mx-auto">
	<h1>Register</h1>
	<form method="POST" action="/register">
		<div class="form-outline mb-4">
			<Input name="username" label="Username" />
		</div>
		<div class="form-outline mb-4">
			<Input type="password" name="password" label="Password" />
		</div>
		<div class="form-outline mb-4">
			<Input
				type="password"
				name="verifyPassword"
				label="Password verification"
			/>
		</div>
		<input
			type="submit"
			value="Register"
			class="btn btn-primary mt-4 mb-4"
		/>
		<p class="text-muted">
			Have already an account?
			<a href="/login"> Here </a>
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
		{#if form?.missingVerification}
			<p class="text-danger">Missing password verification</p>
		{/if}
		{#if form?.passwordMismatch}
			<p class="text-danger">Passwords mismatch !</p>
		{/if}
		{#if form?.ok}
			<p class="text-success">Successfully registered !</p>
		{/if}
		{#if form?.ok === false} <p class="text-danger">{form.result}</p> {/if}
	</form>
</div>
