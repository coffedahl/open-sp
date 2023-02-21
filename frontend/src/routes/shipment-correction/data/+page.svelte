<script>
	// Imports
	import { callFocus } from '../../../global';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	// Stores
	import { shipmentData } from '../../../stores';
	let shipment;
	shipmentData.subscribe((value) => {
		shipment = value;
	});

	// Variables
	let input;
	let currentObject = '';
	let actual;

	//On load check if there is content in shipment list or redirect
	onMount(() => {
		if (shipment.length == 0) {
			goto('/shipment-correction');
		}
	});

	// Handle enter press
	function handleKeydown(e) {
		if (e.key == 'Enter') {
			if (e.target.id == 'artnr') {
				handleButton();
			} else if ((e.target.id = 'actual')) {
				handleEnter(currentObject.artnr);
			}
		}
	}

	// Handle button
	function handleButton() {
		// Find object where article number is and set current object
		currentObject = shipment.find((e) => e.artnr == input);
		if (currentObject == undefined) {
			currentObject = '';
		}
		//reset input
		input = '';
	}

	// Hande the amount entering
	function handleEnter(artnr) {
		//Find index of the current object and set actual to input
		let index = shipment.findIndex((e) => e.artnr == artnr);
		shipment[index].actual = actual;
		//update local store
		shipmentData.set(shipment);
		//reset inputs
		currentObject = '';
		actual = '';
	}
</script>

<div class="main center column">
	{#if currentObject == ''}
		<input
			use:callFocus
			autofocus
			type="text"
			placeholder="Article number"
			on:keydown={handleKeydown}
			bind:value={input}
			id="artnr"
		/>
		<button on:click={handleButton}>Enter</button>
		<button on:click={() => goto('/shipment-correction/result')}>Done</button>
	{:else}
		<h1>{currentObject.namn}</h1>
		<p>{currentObject.artnr}</p>
		<input
			id="actual"
			use:callFocus
			type="number"
			placeholder="Antal"
			bind:value={actual}
			on:keydown={handleKeydown}
		/>
		<button on:click={handleEnter}>Enter</button>
		<button
			on:click={() => {
				//reset inputs anc current article
				currentObject = '';
				input = '';
			}}>Clear</button
		>
	{/if}
</div>
