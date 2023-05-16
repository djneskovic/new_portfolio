<template>
	<the-navigation></the-navigation>
	<the-hero> </the-hero>
	<the-skill></the-skill>
	<the-projects></the-projects>
	<the-contact></the-contact>
</template>

<script>
import TheNavigation from "./components/navigation/TheNavigation.vue";
import TheHero from "./components/hero/TheHero.vue";
import TheSkill from "./components/skills/TheSkills.vue";
import TheProjects from "./components/sites/TheProjects.vue";
import TheContact from "./components/contact/TheContact.vue";
export default {
	components: {
		TheNavigation,
		TheHero,
		TheSkill,
		TheProjects,
		TheContact,
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
}

html {
	scroll-behavior: smooth;
	scroll-padding-top: 90px;
}

body {
	font-family: "Press Start 2P", cursive;
}
.container {
	max-width: 1500px;
	padding: 0 2rem;
	margin: 0 auto;
	min-height: 100%;
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
