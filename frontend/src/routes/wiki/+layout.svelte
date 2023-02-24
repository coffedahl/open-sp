<script>
	import Navigation from './navigation.svelte';
	let nav;
	$: page = nav;
</script>

<div class="main">
	<div class="nav">
		<Navigation />
	</div>
	<slot />
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav {
		width: 20vw;
		height: 100%;
	}
</style>
