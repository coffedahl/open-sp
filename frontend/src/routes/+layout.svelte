<script>
	let dropdown = false;
</script>

<header>
	<div class="title">
		<a href="/"><h1>Open-SP</h1></a>
		<nav class="space-even">
			<button
				class="space-even"
				on:click={() => (dropdown ? (dropdown = false) : (dropdown = true))}
			>
				<p>Tools</p>
				<i class="fas fa-chevron-down"></i>
			</button>
			{#if dropdown}
				<div class="dropdown">
					<a href="/price">Price Adjustment</a>
					<a href="/shipment">Shipment correction</a>
				</div>
			{/if}
			<a href="/wiki">Wiki</a>
		</nav>
	</div>
	<div class="deco">
		<a href="https://www.github.com/coffedahl/kjell-delim">
			<i class="fab fa-github"></i>
			<p>Github</p>
		</a>
	</div>
</header>

<slot />
<footer>
	<p>Created by Coffe Dahl(3611), 2023</p>
</footer>

<style>
	.title {
		height: 9vh;
		display: flex;
		justify-content: end;
		align-items: center;
		background-color: #1975bc;
	}
	.deco {
		display: flex;
		justify-content: end;
		height: 3vh;
		background-color: #f5f5f5;
		padding-right: 10vw;
	}
	.deco a {
		display: flex;
		align-items: center;
		color: #767676;
		text-decoration: none;
	}
	.deco p{
		margin-left: 5px;
	}
	.space-even {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.dropdown{
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #1975bc;
		padding: 1em;
		margin-top: 14vh;
		margin-left: -4vw;
	}
	button {
		background-color: transparent;
		border: none;
		color: white;
	}
	button p {
		font-size: medium;
	}
	nav {
		margin-right: 5vw;
		width: 10vw;
	}
	h1 {
		margin-right: 31vw;
	}
	nav p,
	a {
		color: white;
		text-decoration: none;
	}
	footer {
		height: 8vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
	}
</style>
