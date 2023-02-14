<header>
	<div class="title">
		<h1>Open-SP</h1>
	</div>
	<div class="deco" />
</header>

<slot />
<footer>
	<p>Created by Coffe Dahl(3611), 2023</p>
</footer>

<style>
	.title {
		height: 9vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(25, 117, 188);
	}
	.deco {
		height: 3vh;
		background-color: #f5f5f5;
	}
	h1 {
		color: white;
	}
	footer {
		height: 8vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
	}
</style>
