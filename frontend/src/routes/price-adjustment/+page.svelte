<script>
	// Import components
	import StringItem from '../string_item.svelte';
	import { callFocus } from '../../global';

	import { storeNumber } from '../../stores';
	let store;
	storeNumber.subscribe((val) => {
		store = val;
	});

	let attack_clones = false;
	// Create variables
	var string_list = [];
	var input;

	// Function for handling the process button
	function handleButton() {
		// Reset stringlist
		string_list = [];
		/* Take the text in the article field and split it by space and | 
		to get list with all article numbers */

		let input_list = input.split(/[\s|]+/);
		let article_list = [];
		if (attack_clones) {
			input_list.forEach((element) => {
				if (!article_list.includes(element)) {
					article_list.push(element);
				}
			});
		} else {
			article_list = input_list;
		}

		// REMOVED BECAUSE OF POSSIBLE BUG
		/*let input_list = input.split('|');
		// Create end list
		let article_list = [];
		// Check each element
		input_list.forEach((element) => {
			// Fix element and pugre doubles
			if (element.length != 5) {
				for (let i = 0; i < element.length / 5; i++) {
					let slice = element.slice(i * 5, (i + 1) * 5);
					if (attack_clones) {
						if (!article_list.includes(slice)) {
							article_list.push(slice);
						}
					} else {
						article_list.push(slice);
					}
				}
			} else {
				if (attack_clones) {
					if (!article_list.includes(element)) {
						article_list.push(element);
					}
				} else {
					article_list.push(element);
				}
			}
		});*/

		// Create variables for string creation
		let new_string = '';
		let counter = 0;
		/* For each item in article list append to a string and when
		 the string is 34 items long start on an new one*/
		article_list.forEach((item) => {
			if (counter == 32) {
				counter = 1;
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
		// Add run to db
		fetch('https://api.coffedahl.com/api/addrun', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ storenumber: 'store:' + store, runtype: 'price' })
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}
	function handleKeydown(e) {
		if (e.key == 'Enter') {
			handleButton();
		}
	}
</script>

<div class="main">
	<div class="input">
		<div class="text-field">
			<input
				use:callFocus
				on:keydown={handleKeydown}
				class="text"
				placeholder="Price adjustment string"
				bind:value={input}
				type="text"
			/>
			<button on:click={handleButton}><i class="center fas fa-arrow-right fa-lg" /></button>
		</div>
		<p>Attack Clones?</p>
		<input class="check" bind:checked={attack_clones} type="checkbox" />
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
		overflow-y: auto;
	}
	.input {
		margin-top: 5vh;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 60vw;
	}
	.input .text {
		height: 5vh;
		font-size: 1em;
		border-radius: 0.5em;
		padding-left: 0.8em;
		padding-right: 0.3em;
		border: 1.5px solid #d2d8dd;
		width: 80%;
	}
	.text-field {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 80%;
	}
	.input input {
		height: 4.5vh;
		width: 4.5vh;
		font-size: large;
	}
	.input button {
		background-color: #0066b5;
		color: white;
		border-radius: 0.5em;
		border: none;
		aspect-ratio: 1/1;
		height: 5vh;
	}
	.input button:hover {
		background-color: #004982;
	}
	.input button {
		width: 5vh;
	}
</style>
