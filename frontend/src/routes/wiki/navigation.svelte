<script>
	let showTools = false;
	function handleTool() {
		showTools ? (showTools = false) : (showTools = true);
	}
</script>

<div class="navigation">
	<a href="/wiki"><button class="primary">Wiki</button></a>
	<button class="primary" on:click={handleTool}
		><p>Tools</p>
		{#if showTools}<p>A</p>{:else}<p>V</p>{/if}</button
	>
	{#if showTools}
		<a href="/wiki/priceadjustment"><button class="sub">Price Adjustment Delim</button></a>
		<a href="/wiki/shipmentcorrection"><button class="sub">Shipment correction</button></a>
	{/if}
</div>

<style>
	.navigation {
		align-self: start;
		display: flex;
		flex-direction: column;
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
		border: 1px solid #c2c2c2;
	}
	.sub {
		background-color: #c2c2c2;
	}
</style>
