<script>
	// Imports
	import { callFocus } from '../../../global';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loader from './loader.svelte';

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

	// Handle the artnr entry
	function handleButton() {
		// Find object where article number is and set current object
		if (input != undefined && input != "") {
			currentObject = shipment.find((e) => e.artnr == input);
		} else {
			alert('cannot be empty');
		}
		//reset input
		input = '';
	}

	// Hande the amount entry
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
		<div class="loader">
			<Loader />
		</div>
		<input
			use:callFocus
			autofocus
			type="text"
			placeholder="Article number"
			on:keydown={handleKeydown}
			bind:value={input}
			id="artnr"
		/>
		<button class="enter" on:click={handleButton}
			>Enter <i class="fas fa-right-to-bracket" /></button
		>
		<button class="done" on:click={() => goto('/shipment-correction/result')}
			>Done <i class="fas fa-check" /></button
		>
		<button
			class="reset"
			on:click={() => {
				shipmentData.set([]);
				goto('/shipment-correction');
			}}>Reset <i class="fas fa-rotate-left" /></button
		>
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
			autocomplete="false"
		/>
		<button class="enter" on:click={handleEnter}>Enter <i class="fas fa-right-to-bracket" /></button
		>
		<button
			class="clear"
			on:click={() => {
				//reset inputs anc current article
				currentObject = '';
				input = '';
			}}>Clear <i class="fas fa-eraser" /></button
		>
	{/if}
</div>

<style>
	h1 {
		font-size: 20px;
	}

	p {
		padding-bottom: 5vh;
	}

	input {
		width: 19vw;
		padding: 0.5em;
		border-radius: 0.5em;
		border: 1px solid black;
		margin-bottom: 0.3em;
		font-size: medium;
	}

	button {
		width: 20vw;
		padding: 0.5em;
		border-radius: 0.5em;
		border: 1px solid black;
		margin-top: 0.5em;
		color: white;
		font-size: medium;
	}
	.loader {
		margin-bottom: 5vh;
	}
	.enter {
		background-color: #1975bc;
	}

	.clear,
	.reset {
		background-color: #b95858;
	}

	.done {
		background-color: #3e8a3e;
	}
</style>
