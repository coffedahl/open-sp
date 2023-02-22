<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	// Stores
	import { shipmentData } from '../../../stores';
	let shipment;
	shipmentData.subscribe((value) => {
		shipment = value;
	});

	// On mount
	onMount(() => {
		if (shipment.length == 0) {
			goto('/shipment-correction');
		}
	});
</script>

<div class="main center column">
	<table>
		<tr>
			<th>Artnr</th>
			<th>Namn</th>
			<th>Antal</th>
			<th>Räknat antal</th>
			<th>Diff</th>
		</tr>
		{#each shipment as product}
			<tr>
				<td>{product.artnr}</td>
				<td>{product.namn}</td>
				<td>{product.antal}</td>
				<td>{product.actual}</td>
				<td class={product.antal - product.actual != 0 ? 'red' : null}>
					{#if product.antal - product.actual == 0}
						<i class="fas fa-check" />
					{:else}
						{product.antal - product.actual}
					{/if}
				</td>
			</tr>
		{/each}
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
	}
	th,
	td {
		border: 1px solid black;
		padding: 0.3em;
	}
	.red {
		background-color: red;
	}
</style>
