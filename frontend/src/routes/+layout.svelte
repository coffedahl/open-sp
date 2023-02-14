<header>
	<div class="title">
		<h1>Open-SP</h1>
	</div>
	<div class="deco">
		<a href="https://www.github.com/coffedahl/kjell-delim">
			<img src="/github-mark.png" alt="Github logo" />
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
		justify-content: center;
		align-items: center;
		background-color: rgb(25, 117, 188);
	}
	.deco {
		display: flex;
		justify-content: end;
		height: 3vh;
		background-color: #f5f5f5;
		padding-right: 10vw;
	}
	.deco a{
		display: flex;
		align-items: center;
		color: #767676;
		text-decoration: none;
	}
	.deco img{
		height: 2.3vh;
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
