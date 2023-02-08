<script>
	// Import components
	import StringItem from './string_item.svelte';

	// Create variables
	var string_list = [];
	var input;

	// Function for handling the process button
	function handleButton() {
		/* Take the text in the article field and split it by space and | 
		to get list with all article numbers */
		let article_list = input.split(/[\s|]+/);
		// Create variables for string creation
		let new_string = '';
		let counter = 0;
		/* For each item in article list append to a string and when
		 the string is 34 items long start on an new one*/
		article_list.forEach((item) => {
			if (counter == 33) {
				counter = 0;
				string_list.push(new_string.slice(0, -1));
				new_string = item + '|';
			} else {
				new_string = new_string + item + '|';
				counter++;
			}
		});
		// Append the last amount to a string
		string_list.push(new_string.slice(0, -1));
		//Update interface
		string_list = string_list;
	}
</script>

<div class="main">
	<div class="input">
		<input bind:value={input} type="text" />
		<button on:click={handleButton}>Submit</button>
	</div>
	{#each string_list as string}
		<StringItem {string} />
	{/each}
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 80vh;
		overflow-y: auto;
	}
	.input {
		margin-top: 5vh;
	}
	.input input {
		height: 5vh;
		font-size: large;
		width: 60vw;
		border-radius: 2em;
		padding-left: 1em;
		border: 1px solid black;
	}
	.input button {
		background-color: #5e9f1a;
		color: white;
		border-radius: 2em;
		border: none;
		padding: 1em 2em;
	}
</style>
