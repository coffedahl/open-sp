<script>
	import { goto } from '$app/navigation';
	import { callFocus } from '../../../../global';

	let seller;
	//Stores
	import { shipmentData } from '../../../../stores';
	let shipment;
	shipmentData.subscribe((value) => {
		shipment = value;
	});
	const date = new Date().toJSON().slice(0, 10);

	function handleClick() {
		if (seller != undefined) {
			window.print();
			goto('/shipment-correction/result');
		}
	}
</script>

<div class="main column">
	<div class="overlay center column">
		<input
			type="text"
			placeholder="Seller ID"
			use:callFocus
			on:keydown={(e) => {
				if (e.key == 'Enter') {
					handleClick();
				}
			}}
			bind:value={seller}
		/>
		<button on:click={handleClick}>Print</button>
	</div>
	<div class="print">
		<div class="input">
			<p>Seller: <b>{seller}</b></p>
			<p>Shipment Report - <b>{date}</b></p>
			<div>
				<input type="checkbox" />
				<p>Bokfört</p>
			</div>
		</div>
		<table>
			<tr>
				<th>Artnr</th>
				<th>Namn</th>
				<th>Hyllplats</th>
				<th>Antal</th>
				<th>Räknat antal</th>
				<th>Diff</th>
			</tr>
			{#each shipment as item}
				<tr>
					<td style="width: 8%; text-align:right;">{item.artnr}</td>
					<td style="width: 35%;">{item.namn}</td>
					<td style="width: 13%;">{item.hyllnr}</td>
					<td style="width: 8%; text-align:right;">{item.antal}</td>
					<td style="width: 8%; text-align:right;">{item.actual}</td>
					<td style="width: 8%; text-align: center" class="count">
						{#if item.actual - item.antal == 0}
							<i class="fas fa-check" />
						{:else}
							{item.actual - item.antal}
						{/if}
					</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style>
	.print {
		display: none;
	}
	.overlay {
		width: 100vw;
		height: 80vh;
	}
	.overlay input {
		width: 19vw;
		padding: 0.5em;
		border-radius: 0.5em;
		border: 1px solid black;
		margin-bottom: 0.3em;
		font-size: medium;
	}
	.overlay button {
		width: 20vw;
		padding: 0.5em;
		border-radius: 0.5em;
		border: 1px solid black;
		margin-top: 0.5em;
		color: white;
		font-size: medium;
		background-color: #1975bc;
	}
	@media print {
		.overlay {
			display: none;
		}
		.print {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.input,
		.input div {
			display: flex;
		}
		.input {
			width: 100%;
			justify-content: space-evenly;
			margin-bottom: 1vh;
		}
		.input input {
			margin-right: 4px;
			margin-top: 2px;
		}
		table {
			width: 100%;
			border-collapse: collapse;
		}
		th,
		td {
			border: 1px solid #999999;
			font-size: small;
		}
		th {
			background-color: #eeeeee;
		}
		td {
			border: 1px solid #888888;
			background-color: #fefefe;
			-webkit-color-adjust: exact;
			padding: 0.05em 0.3em;
		}
	}
</style>
