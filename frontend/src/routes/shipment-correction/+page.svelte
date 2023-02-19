<script>
	let input = '';
	let lines = [];
	let orders = [];
	function handleClick() {
		lines = input.split(/\n/);
		lines.forEach((element) => {
			let data = element.split('	');
			orders.push({
				artnr: data[0],
				hyllnr: data[1],
				namn: data[2],
				beskrivning: data[3],
				antal: data[4]
			});
		});
		orders = orders;
	}
</script>

<div class="main center column">
	<h1>Shipment Correction</h1>
	<textarea bind:value={input} class="center" placeholder="Enter shipment information here" cols="30" rows="10" />
	<button class="center" on:click={handleClick}>
		<i class="fas fa-upload" />
		<p>Process information</p>
	</button>
</div>

<style>
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
	textarea{
		width: 30vw;
		height: 20vh;
	}
</style>
