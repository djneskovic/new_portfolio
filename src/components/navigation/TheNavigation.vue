<template>
	<div id="nav">
		<div class="container">
			<div class="navigation">
				<div class="logo">
					<img src="@/assets/logo3.png" alt="" />
				</div>

				<button
					class="hamburger hamburger--emphatic hidden"
					:class="{ 'is-active': isActive }"
					type="button"
					@click="toggle"
				>
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>

				<div class="menu" :class="{ 'active--menu': showMenu }">
					<ul class="menu-list">
						<li class="menu-list-item">
							<a href="#hero" class="link" @click="close"
								>HOME</a
							>
						</li>
						<li class="menu-list-item">
							<a href="#skills" class="link" @click="close"
								>ABOUT</a
							>
						</li>
						<li class="menu-list-item">
							<a
								href="#projects"
								class="link"
								@click="close"
								>PROJECTS</a
							>
						</li>
						<li class="menu-list-item">
							<a
								href="#contact"
								class="link"
								@click="close"
								>CONTACT</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
			showMenu: false,
		};
	},

	methods: {
		toggle() {
			this.isActive = !this.isActive;
			this.showMenu = !this.showMenu;
		},

		close() {
			this.isActive = false;
			this.showMenu = false;
		},
	},
};
</script>

<style scoped>
#nav {
	border-bottom: 1px solid var(--orange);
	background: rgba(38, 58, 41, 0.8);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	z-index: 30;
	position: sticky;
	top: 0;
}

.navigation {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logo {
	width: 90px;
	height: 90px;
}

.menu {
	position: absolute;
	top: -400%;
	left: 0;
	right: 0;
	text-align: center;
	margin-top: 5.68rem;
	transition: all 0.2s ease;
	/* z-index: 5; */
	/* background-color: var(--dark-green); */
	background: rgba(38, 58, 41, 0.8);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
}

.active--menu {
	top: 0%;
}

.menu-list {
	width: 100%;
}

ul:hover li {
	filter: blur(5px);
}

ul li:hover {
	filter: blur(0px);
}

.menu-list-item {
	padding: 1rem 0;
}

.link {
	font-size: 17px;
	background: transparent;
	border: none;
	padding: 0.7rem 1rem;
	color: var(--whiteish);
	text-transform: uppercase;
	position: relative;
	transition: 0.5s ease;
}

.link::before {
	content: "";
	position: absolute;
	left: 0;
	bottom: 0;
	height: 2px;
	width: 0;
	background-color: var(--light-green);
	transition: 0.5s ease;
}

.link:hover {
	color: #f4f4f4;
	transition-delay: 0.5s;
}

.link:hover::before {
	width: 100%;
}

.link::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: 0;
	height: 0;
	width: 100%;
	background-color: var(--light-green);
	transition: 0.4s ease;
	z-index: -1;
}

.link:hover::after {
	height: 100%;
	transition-delay: 0.4s;
	color: #f4f4f4;
}

@media screen and (min-width: 820px) {
	.hidden {
		display: none;
	}

	.menu {
		display: block;
		position: static;
		margin-top: 0;
		background-color: transparent;
		box-shadow: none;
		backdrop-filter: none;
	}

	.menu-list {
		display: flex;
	}
}
</style>
