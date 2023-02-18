<script>
	export let data;
</script>

<div>
    <div class="article">
        {#if data.title == "shipmentcorrection"}
            <h1>Shipment Correction</h1>
            <h3>Description</h3>
            <p>This tool is used for making sure all the products in a shipment has arrived successfully. The tool will help with showing the diffs from the ISR</p>
            <h3>Guide</h3>
            <p>Guide</p>
        {:else if data.title == "priceadjustment"}
            <h1>Price Adjustment</h1>
            <h3>Description</h3>
            <p>This tool will help to prepare the priceadjustment strings that arrives from Airtable every morning in Teams for entering in to the "Inventeringslista-BC".</p>
            <h3>Guide</h3>
            <p>Guide</p>
        {:else}
            <h1>404 Page not found</h1>
            <p>We couldn't find the page {data.title} that you were looking for</p>
        {/if}
    </div>
</div>

<style>
    div{
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    .article{
        width: 80%;
    }
</style>
