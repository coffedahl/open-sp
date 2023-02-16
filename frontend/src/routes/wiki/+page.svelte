<script>
	import Navigation from "./navigation.svelte";
	let nav;
	$: page = nav;
</script>
<div class="main">
	<div class="nav">
		<Navigation bind:navURL={nav}/>
	</div>
	<div class="article">
		<h1>{page}</h1>
		<p>
			To use the page you go to team and go to the "Prisjusteringer" channel and then you can copy
			strait over all the new promotional prices.
		</p>
		<p>
			Paste the clipboard in to the field at the top of the page. If you want to have multiple days
			copied in at one time you can just put a space between the different days.
		</p>
		<p>
			When all is pasted in to the field you can check the "Attack Clones?" box if you want the
			program to remove duplicates from the strings. Press the submit button and the program will
			fix and divide up the strings into multiple strings that are the correct length for the
			"Inventeringslista-BC".
		</p>
		<p>
			Each string has a copy button. Press it and paste the contents into the "artikelnummer" field
			of the report. Set "hyllnr" to "ib*" and press the "Førhandsgranska" button to see all of the
			new promotional prices that have a warehouse position in IB. You can keep doing this untill
			you been trough all of the rows.
		</p>
	</div>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
        justify-content: space-between;
	}
    .article{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 80vw;
		padding: 0 8vw;
    }
	.nav{
		width: 20vw;
		height: 100%;
	}
	p {
		margin-top: 1em;
	}
</style>
