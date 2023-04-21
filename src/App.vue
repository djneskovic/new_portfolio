<template>
	<the-navigation></the-navigation>
	<the-hero> </the-hero>
	<the-skill></the-skill>
	<the-projects></the-projects>
</template>

<script>
import TheNavigation from "./components/navigation/TheNavigation.vue";
import TheHero from "./components/hero/TheHero.vue";
import TheSkill from "./components/skills/TheSkills.vue";
import TheProjects from "./components/sites/TheProjects.vue";
export default {
	components: {
		TheNavigation,
		TheHero,
		TheSkill,
		TheProjects,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
:root {
	--dark-green: #263a29;
	--light-green: #41644a;
	--orange: #e86a33;
	--whiteish: #f2e3db;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	/* scroll-behavior: smooth; */
	scroll-behavior: smooth;
}
body {
	scroll-behavior: smooth;
	font-family: "Press Start 2P", cursive;
	background-color: var(--dark-green);
}
.container {
	max-width: 1500px;
	padding: 0 2rem;
	margin: 0 auto;
	min-height: 100%;
	/* overflow: hidden; */
}
img {
	height: 100%;
	width: 100%;
}
a {
	text-decoration: none;
	color: var(--whiteish);
}
ul {
	list-style: none;
}
</style>
