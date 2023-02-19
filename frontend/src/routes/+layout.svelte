<header>
	<div class="title">
		<div class="nav-container">
			<div class="spacer"/>
			<a href="/"><h1>Open-SP</h1></a>
			<nav class="space-even">
				<a href="/">Start</a>
				<div class="dropdown">
					<button class="dropdown-button">
						<p>Tools</p>
						<i class="fas fa-chevron-down" />
					</button>
					<div class="dropdown-content">
						<a href="/price-adjustment">Price Adjustment</a>
						<a href="/shipment-correction">Shipment correction</a>
					</div>
				</div>
				<a href="/wiki">Wiki</a>
			</nav>
		</div>
	</div>
	<div class="deco">
		<a href="https://www.github.com/coffedahl/kjell-delim">
			<i class="fab fa-github" />
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
		background-color: #1975bc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-container{
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	nav, .spacer{
		width: 15vw;
	}
	nav button{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 4vw;
	}
	nav button i{
		margin-top: 0.5vh;
	}
	a {
		color: white;
		text-decoration: none;
	}
	.dropdown-button {
		background-color: inherit;
		color: white;
		border: none;
		font-size: medium;
	}
	.dropdown:hover .dropdown-content {
		display: flex;
	}
	.dropdown-content {
		display: none;
		background-color: #767676;
		border: 2px solid #898989;
		border-radius: 0.5em;
		flex-direction: column;
		position: absolute;
	}
	.dropdown-content a {
		padding: 1em;
	}
	.dropdown-content a:hover{
		background-color: #707070;
	}
	.space-even {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
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
	.deco p {
		margin-left: 5px;
	}
	footer {
		height: 8vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
	}
</style>
