<script>
	export let navURL = 'wiki';
	let showTools = false;
    function handleTool(){
        showTools ? showTools = false : showTools = true;
    }
	function handleClick(path) {
		navURL = path;
	}
</script>

<div class="navigation">
	<button on:click={() => handleClick('wiki')}>Wiki</button>
	<button on:click={handleTool}><p>Tools</p>{#if showTools}<p>A</p>{:else}<p>V</p>{/if}</button>
	{#if showTools}
		<button on:click={() => handleClick('price_adjustment')}>Price Adjustment Delim</button>
	{/if}
</div>

<style>
	.navigation {
		align-self: start;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		background-color: red;
	}
	.navigation button {
		width: 100%;
		height: 5vh;
	}
</style>
