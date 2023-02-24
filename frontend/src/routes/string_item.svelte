<script>
	// Import copy
	import { copy } from 'svelte-copy';
	let isCopied = false
	// Create prop
	export let string;

	function handleCopy(){
		isCopied = true;
	}
	function handleCheck(){
		if(isCopied){
			isCopied = false;
		}else{
			isCopied = true;
		}
	}

</script>

<div class="string">
	<button use:copy={string} on:click={handleCopy} class="flash">Kopiera</button>
	<button class="check" id="check" on:click={handleCheck}>
		{#if isCopied}
			<img src="/checked.png" alt="checked-mark"/>
		{:else}
			<img src="/unchecked.png" alt="unchecked-mark"/>
		{/if}
	</button>
	<p>{string}</p>
</div>

<style>
	.string {
		width: 70vw;
		display: flex;
		justify-content: space-evenly;
		padding-top: 1em;
	}
	.string button {
		width: 20%;
		background-color: #f5f5f5;
		border: 1px solid #c2c2c2;
		border-radius: 0.5em;
		-webkit-animation-duration: 1s;
		animation-duration: 0.7s;
	}
	.string button:hover {
		background-color: #c2c2c2;
	}
	.string button:focus {
		animation: flash;
		animation-duration: 1s;
	}
	#check{
		width: max-content;
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#check:focus{
		animation: none;
	}
	.check img{
		height: 3vh
	}

	@keyframes flash {
		from{
			background-color: #707477;
		}
		50%{
			background-color: #5e9f1a;
		}
		100%{
			background-color: #a0a6ab;
		}
	}
	.string p {
		width:70%;
		overflow-x: scroll;
		border: 1px solid #b3b3b3;
		border-radius: 0.5em;
		padding: 0.2em 0.5em;
	}
</style>
