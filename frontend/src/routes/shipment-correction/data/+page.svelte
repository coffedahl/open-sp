<script>
	// Stores
	import { shipmentData } from '../../../stores';
	import { callFocus } from '../../../global';
	let shipment;
	shipmentData.subscribe((value) => {
		shipment = value;
	});

	// Variables
	let input;
	let currentObject = '';

	// Handle enter press
	function handleKeydown(e) {
		if (e.key == 'Enter') {
			handleButton();
		}
	}

	// Handle button
	function handleButton() {
		//console.log(shipment.find((e) => e.artnr == input));
		currentObject = shipment.find((e) => e.artnr == input);
		if (currentObject == undefined) {
			currentObject = '';
		}
	}
</script>

<div class="main center column">
	{#if currentObject == ''}
		<input
			use:callFocus
			bind:value={input}
			type="text"
			placeholder="Article number"
			on:keydown={handleKeydown}
		/>
		<button on:click={handleButton}>Enter</button>
	{:else}
		<h1>{currentObject.namn}</h1>
		<p>{currentObject.artnr}</p>
		<input use:callFocus type="text" placeholder="Antal" />
		<button>Enter</button>
		<button
			on:click={() => {
				currentObject = '';
				input = '';
			}}>Clear</button
		>
	{/if}
</div>
