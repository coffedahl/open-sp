<script>
	import { storeNumber } from '../stores';
	let sn;
    
	function handleClick() {
		storeNumber.set(sn);
	}
	function handleEnter(e) {
		if (e.key == 'Enter') {
			handleClick();
		}
	}
</script>

<div class="container">
	<h1>Enter the storenumber</h1>
	<p>Use the format SE/NOXXX</p>
	<input type="text" placeholder="Storenumber" bind:value={sn} on:keydown={handleEnter} />
	<button on:click={handleClick}>Enter</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		background-color: white;
		margin-top: -4vh;
		padding: 0;
		height: 100vh;
		width: 100vw;
	}
	button {
		width: 20vw;
		height: 7vh;
		margin-top: 3vh;
		border-radius: 0.75em;
		border: none;
		background-color: #1975bc;
		color: white;
		font-size: large;
		font-weight: 500;
	}
	input {
		width: 19vw;
		padding: 0.5em;
		border-radius: 0.5em;
		border: 1px solid black;
		margin-bottom: 0.3em;
		font-size: medium;
	}
</style>
