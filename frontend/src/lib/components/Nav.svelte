<script lang="ts">
	import { page } from '$app/stores';

	import type { PageData } from '../../routes/$types';
	export let data: PageData;
</script>

<nav
	class="navbar navbar-expand-lg navbar-light bg-light justify-content-between mb-3"
>
	<div class="container">
		<a class="navbar-brand" href="/">Secure Web Dev</a>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a
					class="nav-link"
					class:active={$page.url.pathname === '/'}
					href="/"
				>
					Home
				</a>
			</li>

			{#if !data.user}
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/login'}
						href="/login"
					>
						Login
					</a>
				</li>
			{:else}
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/locations'}
						href="/locations"
					>
						Locations
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/profile'}
						href="/profile"
					>
						Profile
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>
