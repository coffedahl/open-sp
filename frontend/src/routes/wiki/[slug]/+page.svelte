<script>
	export let data;
</script>

<div>
    {#if data.title == "shipmentcorrection"}
        <h1>Shipment Correction</h1>
    {:else if data.title == "priceadjustment"}
        <h1>Price Adjustment</h1>
    {:else}
        <h1>404 Page not found</h1>
    {/if}

</div>

<style>
    div{
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
</style>
