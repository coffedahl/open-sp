<header>
	<div class="title">
		<a href="/"><h1>Open-SP</h1></a>
		<nav class="space-even">
			<p class="space-even">Tools <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 1024 1024"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"/></svg></p>
			<a href="/wiki">Wiki</a>
		</nav>
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
		justify-content: end;
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
	.space-even{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	p svg{
		width: 1vw;
	}
	nav{
		margin-right: 5vw;
		width: 10vw;
	}
	h1{
		margin-right: 31vw;
	}
	nav p,a{
		color:white;
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
