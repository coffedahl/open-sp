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
        {:else if data.title == "github"}
            <h1>Github</h1>
            <p>
                If you have any ideas or want to contribute feel 
                free to fork and build up your own functions but please read the guidelines below.
            </p>
            <p>
                If you have any questions please contact me on teams Christoffer Dahl(3611)
            </p>
        {:else}
            <h1>404 Page not found</h1>
            <p>We couldn't find the page {data.title} that you were looking for</p>
        {/if}
    </div>
</div>

<style>
    div{
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    .article{
        justify-content: start;
        width: 60%;
        padding-top: 3vh;
    }
    .article h3{
        padding-top: 2vh;
    }
    .article p{
        padding-top: 2vh;
    }
</style>
