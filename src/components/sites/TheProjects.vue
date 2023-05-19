<template>
	<section id="projects">
		<div class="container">
			<div
				class="projects"
				data-aos="zoom-in"
				data-aos-duration="1500"
			>
				<div class="project-top">
					<h2>Projects</h2>
					<p>
						Here you can find my latest projects I've been
						working on. <br />
						Hope you will like it.
					</p>
				</div>
				<div class="cards">
					<div class="card">
						<div class="card-front">
							<img src="../../assets/weather.png" alt="" />
							<a
								class="subtitle"
								href="https://stage-weather-app-by-djordje.netlify.app"
								>Weather App</a
							>
						</div>
						<div class="card-back">
							<p>
								Here you can register and you can check
								weather in your country or town. Also
								you can save your favorite city.
							</p>

							<a
								href="https://stage-weather-app-by-djordje.netlify.app"
								>Check here</a
							>
						</div>
					</div>
					<div class="card">
						<div class="card-front">
							<img src="../../assets/recipe.png" alt="" />
							<a
								class="subtitle"
								href="https://stage-recipe-app.netlify.app/mymeals"
								>Recipe App</a
							>
						</div>
						<div class="card-back">
							<p>
								You like to cook? Then this app is
								perfect for you. You can explore
								recepies or you can make and save your
								own.
							</p>

							<a
								href="https://stage-recipe-app.netlify.app/mymeals"
								>Check here</a
							>
						</div>
					</div>
					<div class="card">
						<div class="card-front">
							<img src="../../assets/weather.png" alt="" />
							<p class="subtitle">Weather App</p>
						</div>
						<div class="card-back">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>

							<a href="#">Check here</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
#projects {
	min-height: 80vh;
	background: url("../../assets/waved.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top bottom;
	border-bottom: 1px solid var(--orange);
	position: relative;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
}

#projects::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background: linear-gradient(30deg, #263a29, #31772b, #50c41f);
}

.projects {
	padding: 3rem 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.project-top {
	background: lightgrey;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
	padding: 2rem;
	border-radius: 30px;
}

.projects h2 {
	font-size: 1.5rem;
	color: var(--orange);
	padding: 1rem 2rem;
}

.cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin-top: 6rem;
}

/*  */

.card {
	color: #1b1b1b;
	width: 260px;
	height: 300px;
	position: relative;
	outline: 6px solid #f5f5f5;
	border-radius: 8px;
	line-height: 150%;
	padding: 16px;
	background: #ff930f;
	background-blend-mode: multiply;
	background: linear-gradient(to top, #e86a33, #ffcc33);
	transition: background-color 1s ease-in-out;
	overflow: hidden;
}

.card-front {
	/* bottom: 16px; */
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
	text-align: center;
	transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.subtitle {
	font-size: 1.2rem;
	margin-top: 3rem;
}

.card-back {
	transform: translateX(120%);
	transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	padding: 2rem 1rem;
	/* display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center; */
}

.card-back p {
	margin-bottom: 1rem;
	font-size: 0.7rem;
}

.card:hover .card-front {
	transform: translateX(-100%);
}

.card:hover .card-back {
	transform: translateX(0);
}
</style>
