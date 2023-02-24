<script>
	//Imports
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	//Stores
	import { shipmentData } from '../../../stores';
	let shipment;
	shipmentData.subscribe((value) => {
		shipment = value;
	});
	//Variables
	let difflist = [];
	let showComplete = false;
	// If list is empty redirect otherwise create a list of diffs
	onMount(() => {
		if (shipment.length == 0) {
			goto('/shipment-correction');
		} else {
			shipment.forEach((element) => {
				if (element.actual - element.antal != 0) {
					difflist.push(element);
				}
			});
			difflist = difflist;
		}
	});
</script>

<div class="main center column">
	<p>You have <b>{difflist.length}</b> diffs in your shipment.</p>
	{#if !showComplete}
		{#if difflist.length <= 5}
			<table>
				<tr>
					<th>Artnr</th>
					<th>Namn</th>
					<th>Antal</th>
					<th>Räknat antal</th>
					<th>Diff</th>
				</tr>
				{#each difflist as item}
					<tr>
						<td>{item.artnr}</td>
						<td>{item.namn}</td>
						<td>{item.antal}</td>
						<td class="test">{item.actual} </td>
						<td>{item.actual - item.antal}</td>
					</tr>
				{/each}
			</table>
		{/if}
	{/if}
	<div>
		<button
			class="list"
			on:click={() => {
				showComplete ? (showComplete = false) : (showComplete = true);
			}}>{showComplete ? 'Hide' : 'Show'} complete list</button
		>
		<button class="print" on:click={() => goto('/shipment-correction/result/print')}
			><i class="fas fa-print" /></button
		>
	</div>
	{#if showComplete}
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
	{/if}
</div>

<style>
	p {
		margin: 5vh 0;
		font-size: larger;
	}
	button {
		margin-top: 5vh;
		padding: 0.8em;
		border-radius: 0.5em;
		border: 1px solid black;
		font-size: medium;
		color: white;
	}
	.print {
		background-color: #4fa24f;
		aspect-ratio: 1/1;
	}
	.list {
		background-color: #1975bc;
	}
	.count {
		text-align: center;
	}
	table {
		border-collapse: collapse;
		margin: 3vh 0;
	}
	th,
	td {
		border: 1px solid black;
		padding: 0.3em;
	}
	th{
		background-color: #eeeeee;
	}
	table{
		width: 40vw;
	}
</style>
