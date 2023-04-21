<template>
	<section id="skills">
		<div class="skills" @wheel="scroll" data-aos="zoom-out">
			<div class="skill">
				<h2>About Me</h2>
				<img src="../../assets/about.png" class="about" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Vel ipsa beatae iste voluptatibus officiis non
					maiores omnis vitae exercitationem nisi.
				</p>
			</div>
			<div class="skill">
				<h2>HTML 5</h2>
				<img src="../../assets/html-5.png" class="logo" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Vel ipsa beatae iste voluptatibus officiis non
					maiores omnis vitae exercitationem nisi.
				</p>
			</div>
			<div class="skill">
				<h2>CSS 3</h2>
				<img src="../../assets/css-3.png" class="logo" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Vel ipsa beatae iste voluptatibus officiis non
					maiores omnis vitae exercitationem nisi.
				</p>
			</div>
			<div class="skill">
				<h2>JavaScript</h2>
				<img src="../../assets/js.png" class="logo" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Vel ipsa beatae iste voluptatibus officiis non
					maiores omnis vitae exercitationem nisi.
				</p>
			</div>
			<div class="skill">
				<h2>Vue JS</h2>
				<img src="../../assets/vue.png" class="logo" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Vel ipsa beatae iste voluptatibus officiis non
					maiores omnis vitae exercitationem nisi.
				</p>
			</div>
			<div class="skill">
				<h2>Goals</h2>
				<img src="../../assets/goals.png" class="about" alt="" />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Vel ipsa beatae iste voluptatibus officiis non
					maiores omnis vitae exercitationem nisi.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	methods: {
		scroll() {
			let scrollSpeed = 1000;
			let scroller = document.getElementById("skills");

			scroller.addEventListener(
				"wheel",
				(e) => {
					if (!e.deltaY) return;
					let scrollDirection = e.deltaY > 0 ? 1 : -1;
					scroller.scrollLeft += scrollSpeed * scrollDirection;

					let scrollLeft = Math.round(scroller.scrollLeft);
					let maxScrollLeft = Math.round(
						scroller.scrollWidth - scroller.clientWidth
					);

					if (
						(scrollDirection === -1 && scrollLeft > 0) ||
						(scrollDirection === 1 &&
							scrollLeft < maxScrollLeft)
					)
						e.preventDefault();
					return true;
				},
				false
			);
		},
	},
};
</script>

<style scoped>
#skills {
	min-height: 70vh;
	width: 100%;
	/* overflow-x: scroll; */
	overflow-y: scroll;
	text-align: center;
	scroll-behavior: smooth;
	/* overflow-y: auto; */
}

.skills {
	width: 600%;
	min-height: 70vh;
	display: flex;
	flex-wrap: nowrap;
}

.skill {
	width: 100%;
	min-height: 70vh;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 3rem 2rem;
	text-align: center;
}

.about {
	width: 280px;
	height: 200px;
	margin: 1rem 0;
}

.logo {
	width: 200px;
	height: 160px;
	margin: 2rem 0;
}

.skill:nth-child(odd) {
	background-color: #f7f7f7;
}
.skill:nth-child(even) {
	background-color: white;
}

@media screen and (min-width: 820px) {
	.skill {
		padding: 5rem;
	}
}
</style>
