<!DOCTYPE html>
<html class="no-js">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Summercamp</title>

	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<link type="text/css" rel="stylesheet" href="frontDist/css/controllers/homepage.css" media="screen" />
</head>

<body>

<header class="mainHeader">
	<div class="fitWrap">

		<a href="/" title="Go to homepage" class="logo iconOctopus">I'm neked!</a>

		<form class="mainSearch" action="search-autocomplete">
			<input type="text" placeholder="Search me hard" name="query" />
			<button type="submit">Click me harder</button>
		</form>

		<nav class="mainNav">
			<ul>
				<li><a class="selected" href="#">Homepage</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Work</a></li>
				<li><a href="#">Journal</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
			<a href="#" class="signIn iconUser">Sign in</a>
		</nav>

	</div>
</header>

<div class="fitWrap">
	<div class="mainCol">

		<div class="sliderType1">
			<ul>
				<li>
					<a class="articleType1" href="#">
						<img src="frontDist/images/articleType1_1.png" alt="">
						<h3 class="title">A Dutch company is  building a $335 million  seawall around New York</h3>
					</a>
				</li>
				<li>
					<a class="articleType1" href="#">
						<img src="frontDist/images/articleType1_2.png" alt="">
						<h3 class="title">A Dutch company is  building a $335 million  seawall around New York</h3>
					</a>
				</li>
				<li>
					<a class="articleType1" href="#">
						<img src="frontDist/images/articleType1_3.png" alt="">
						<h3 class="title">A Dutch company is  building a $335 million  seawall around New York</h3>
					</a>
				</li>
			</ul>
		</div>

		<ul class="articleListType1">
			<?php for ($i = 0; $i < 4; $i++): ?>
			<li>
				<a class="articleType2" href="#">
					<div class="imageCont">
						<img src="frontDist/images/articleType2_1" alt="">
					</div>
					<h3 class="title">A Dutch company is  building a $335 million  seawall around New York</h3>
					<p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, alias non ad autem repellat, fugiat soluta quisquam, quae laudantium cumque inventore libero aliquam. Perferendis quod veritatis officiis in similique corporis.</p>
					<ul class="controls">
						<li><a class="iconHeart" href="#"><strong>300</strong> likes</a></li>
						<li><a class="iconComment" href="#"><strong>35</strong> likes</a></li>
						<li><a class="iconClock" href="#"><strong>5</strong> min read</a></li>
					</ul>
				</a>
			</li>
			<?php endfor ?>
		</ul>

	</div>

	<div class="sideCol">

		<a href="#" class="bannerType1">
			<img src="frontDist/images/bannerType1.png" alt="">
		</a>

		<section class="orderedListType1">
			<h3 class="title">One list to rule them all</h3>
			<ol>
				<li><span>I am first item</span></li>
				<li><span>I am second one</span></li>
				<li><span>I come after second one</span></li>
				<li><span>I follow third</span></li>
				<li><span>I come last</span></li>
			</ol>
		</section>

	</div>

</div>

<script async src="frontDist/js/builds/homepage.js?v=<?= time() ?>"></script>

</body>

</html>
