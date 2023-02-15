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
	<button use:copy={string} on:click={handleClick} class="flash">Kopiera</button>
	<button>
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
		width: 30%;
		background-color: #f1f1f1;
		border: 1px solid black;
		border-radius: 0.5em;
		-webkit-animation-duration: 1s;
		animation-duration: 0.7s;
	}
	.string button:hover {
		background-color: #b8b8b8;
	}
	.string button:focus {
		animation: flash;
		animation-duration: 1s;
	}

	@keyframes flash {
		from{
			background-color: #f1f1f1;
		}
		50%{
			background-color: #5e9f1a;
		}
		100%{
			background-color: #f1f1f1;
		}
	}
	.string p {
		width: 60%;
		overflow-x: auto;
		border: 1px solid #b3b3b3;
	}
</style>
