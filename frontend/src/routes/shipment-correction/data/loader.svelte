<script>
	// Import shipmentdata store
	import { shipmentData } from '../../../stores.js';
	let shipment;
	shipmentData.subscribe((val) => {
		shipment = val;
	});

	// Filter out the items that has been completed
	let complete = shipment.filter((element) => {
		if (element.actual != null) {
			return true;
		} else {
			return false;
		}
	});
</script>

<div class="container column">
	<div class="title">
		<h1>Progress</h1>
		<p>{complete.length}/{shipment.length}</p>
	</div>
	<div class="bar rounded">
		<div class="complete-bar rounded" style="width: {(complete.length / shipment.length) * 20}vw" />
	</div>
</div>

<style>
	.title {
		display: flex;
		justify-content: space-between;
		align-items: end;
		margin-bottom: 0.3em;
	}
	.title h1 {
		font-size: large;
	}
	.rounded {
		border-radius: 1em;
	}
	.bar {
		width: 20vw;
		background-color: #cecece;
		height: 2vh;
	}
	.complete-bar {
		background-color: rgb(98, 153, 15);
		height: 2vh;
	}
</style>
