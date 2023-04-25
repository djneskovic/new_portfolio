<template>
	<div id="hero" class="bg">
		<div class="container">
			<div class="hero" data-aos="zoom-in" data-aos-duration="1500">
				<div class="hero-left">
					<h1 class="hero-heading">Welcome</h1>
					<p class="hero-text">
						Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Debitis quod labore maxime!
						Corporis eligendi vel magni quasi neque unde
						harum?
					</p>
					<a class="hero-btn" href="#projects"
						>Check my projects</a
					>
				</div>

				<spline-viewer
					url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode"
					events-target="global"
					class="toy"
				></spline-viewer>

				<div class="hero-right">
					<div class="hero-img">
						<img src="../../assets/hero-me.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#hero {
	background: url("../../assets/waved.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top bottom;
	border-bottom: 1px solid var(--orange);
}

#hero:before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background: linear-gradient(30deg, #263a29, #31772b, #50c41f);
}

.hero {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	padding: 2rem 0 3rem;
}

.hero-left {
	text-align: center;
	/* margin: 3rem 0; */
	margin-top: 3rem;
	border-radius: 30px;
	background: lightgrey;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
	padding: 2rem;
}

.hero-heading {
	color: var(--orange);
	font-size: 1.9rem;
}

.hero-text {
	font-size: 1.2rem;
	margin: 2rem 0;
}

.hero-btn {
	display: inline-block;
	padding: 0.5rem 0.6rem;
	/* font-size: 16px; */
	/* font-weight: 700; */
	color: var(--dark-green);
	border: 3px solid var(--orange);
	cursor: pointer;
	position: relative;
	background-color: transparent;
	text-decoration: none;
	overflow: hidden;
	z-index: 1;
	font-family: inherit;
	text-transform: uppercase;
}

.hero-btn:hover {
	color: var(--whiteish);
}

.hero-btn::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: var(--orange);
	transform: translateX(-100%);
	transition: all 0.3s;
	z-index: -1;
}

.hero-btn:hover::before {
	transform: translateX(0);
}

.toy {
	margin: 3rem 0;
	display: block;
	width: 250px;
	height: 150px;
}

.hero-right {
	width: 200px;
	height: 200px;
}

.hero-right img {
	border-radius: 50%;
	border: 5px solid var(--orange);
}

@media screen and (min-width: 820px) {
	/* #hero {
		min-height: 100vh;
	} */

	.hero-left {
		width: 700px;
		align-self: flex-start;
	}

	.hero-right {
		align-self: flex-end;
		width: 400px;
		height: 400px;
	}

	.toy {
		margin: 4rem 0;
		width: 300px;
		height: 200px;
	}
}
</style>
