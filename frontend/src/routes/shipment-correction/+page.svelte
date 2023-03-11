<script>
	// Imports
	import { goto } from '$app/navigation';
	import { callFocus } from '../../global';
	// Stores
	import { shipmentData } from '../../stores';
	// Variables
	let input = '';
	let lines = [];
	let orders = [];
	// Check if data alread exists and route on depending on value
	shipmentData.subscribe((value) => {
		if (value.length != 0) {
			goto('/shipment-correction/data');
		}
	});
	// Handle the click of process data button
	function handleClick() {
		// Split the input in to lines
		lines = input.split(/\n/);
		// Split each line in to diffrent columns and parse data into orders
		lines.forEach((element) => {
			let data = element.split('	');
			if (data[4] != '') {
				orders.push({
					artnr: data[0],
					hyllnr: data[1],
					namn: data[2],
					beskrivning: data[3],
					antal: parseInt(data[4]),
					actual: null
				});
			}
		});
		orders.splice(0, 1);
		// Store data
		shipmentData.set(orders);
		fetch('https://api.coffedahl.com/api/addrun', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ storenumber: 'NO016', runtype: 'shipment' })
		});
	}
</script>

<div class="main center column">
	<h1>Shipment Correction</h1>
	<textarea
		use:callFocus
		bind:value={input}
		class="center"
		placeholder="Enter shipment information here"
		cols="30"
		rows="10"
	/>
	<button class="center" on:click={handleClick}>
		<i class="fas fa-upload" />
		<p>Process information</p>
	</button>
</div>

<style>
	h1 {
		margin-bottom: 2vh;
	}
	button {
		width: 30vw;
		height: 7vh;
		margin-top: 3vh;
		border-radius: 0.75em;
		border: none;
		background-color: #1975bc;
		color: white;
		font-size: large;
		font-weight: 500;
	}
	button:hover {
		background-color: #15639f;
	}
	p {
		padding-left: 5px;
	}
	textarea {
		width: 30vw;
		height: 20vh;
	}
</style>
