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
		{#if showTools}<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 1024 1024"><path d="M264.8 604.7l61.8 61.8L512 481.1l185.4 185.4 61.8-61.8L512 357.5z"/></svg>{:else}<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 1024 1024"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"/></svg>{/if}</button
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
		border: 1px solid #dedede;
	}
	.sub {
		background-color: #eeeeee;
		border: none;
	}
	svg{
		width: 1vw;
	}
</style>
