<script>
	let showTools = false;
	function handleTool() {
		showTools ? (showTools = false) : (showTools = true);
	}
</script>

<div class="navigation column">
	<a href="/wiki"><button class="primary">Wiki</button></a>
	<button class="primary" on:click={handleTool}
		><p>Tools</p>
		{#if showTools}<i class="fas fa-chevron-up"></i>{:else}<i class="fas fa-chevron-down"></i>{/if}</button
	>
	{#if showTools}
		<a href="/wiki/priceadjustment"><button class="sub">Price Adjustment Delim</button></a>
		<a href="/wiki/shipmentcorrection"><button class="sub">Shipment correction</button></a>
	{/if}
	<a href="/wiki/github"><button class="primary">Github</button></a>
</div>

<style>
	.navigation {
		align-self: start;
		height: 80vh;
		width: 100%;
		background-color: #e8e8e8;
	}
	.navigation button {
		width: 100%;
		height: 5vh;
	}
	.primary {
		background-color: #f5f5f5;
		border: 1px solid #dedede;
	}
	.sub {
		background-color: #eeeeee;
		border: none;
	}
</style>
