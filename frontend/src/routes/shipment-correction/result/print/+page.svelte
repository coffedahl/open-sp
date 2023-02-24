<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	//Stores
	import { shipmentData } from '../../../../stores';
	let shipment;
	shipmentData.subscribe((value) => {
		shipment = value;
	});
	let date = Date.now();
	onMount(() => {
		window.print();
		goto('/shipment-correction/result');
	});
</script>

<div class="main column">
	<div class="print">
		<p>Shipment Report - {date}</p>
		<table>
			<tr>
				<th>Artnr</th>
				<th>Namn</th>
				<th>Antal</th>
				<th>Räknat antal</th>
				<th>Diff</th>
			</tr>
			{#each shipment as item}
				<tr>
					<td>{item.artnr}</td>
					<td>{item.namn}</td>
					<td>{item.antal}</td>
					<td>{item.actual}</td>
					<td class="count">
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
	.print{
		display: none;
	}
	@media print {
		.print {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
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
			padding: .1em .5em;
		}
	}
</style>
