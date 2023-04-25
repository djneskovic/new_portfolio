<template>
	<div id="contact">
		<div class="container">
			<div class="contact" data-aos="zoom-in" data-aos-duration="1500">
				<div class="contact-left">
					<div class="contact-left-text">
						<h2>Like My Work?</h2>
						<p>
							If you are intersting to work with me, you
							can send me a message
						</p>
					</div>
					<form class="form">
						<label for="nome">Name:</label>
						<input
							type="text"
							class="infos"
							id="nome"
							name="nome"
						/>
						<div class="mario"></div>
						<label for="email">E-mail:</label>
						<input type="email" id="email" name="email" />
						<label for="message">Message: </label>
						<textarea
							cols="35"
							rows="10"
							id="message"
							class="message"
						></textarea>

						<button type="submit">Send</button>
						<button type="reset" id="limpar">Clear</button>
					</form>
				</div>

				<div class="contact-right">
					<div class="contact-right-text">
						<p>or you can find me using this links</p>
					</div>
					<div class="main">
						<div class="up">
							<a
								class="card1"
								href="https://www.instagram.com/djordje.neskovic/"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									viewBox="0,0,256,256"
									width="30px"
									height="30px"
									fill-rule="nonzero"
									class="instagram"
								>
									<g
										fill-rule="nonzero"
										stroke="none"
										stroke-width="1"
										stroke-linecap="butt"
										stroke-linejoin="miter"
										stroke-miterlimit="10"
										stroke-dasharray=""
										stroke-dashoffset="0"
										font-family="none"
										font-weight="none"
										font-size="none"
										text-anchor="none"
										style="mix-blend-mode: normal"
									>
										<g transform="scale(8,8)">
											<path
												d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"
											></path>
										</g>
									</g>
								</svg>
							</a>
							<a
								class="card2"
								href="https://www.linkedin.com/in/%C4%91or%C4%91e-ne%C5%A1kovi%C4%87-3369a9109/"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									width="30px"
									height="30px"
									class="twitter"
								>
									<path
										d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
									/>
								</svg>
							</a>
						</div>
						<div class="down">
							<a
								class="card3"
								href="https://github.com/djneskovic"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 30 30"
									width="30px"
									height="30px"
									class="github"
								>
									<path
										d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
									></path>
								</svg>
							</a>
							<a
								class="card4"
								href="mailto:djneskovic@gmail.com"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									width="25px"
									height="25px"
									class="discord"
								>
									<path
										d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
									/>
								</svg>
							</a>
						</div>
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
#contact {
	background: url("../../assets/waved.svg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	border-bottom: 1px solid var(--orange);
	position: relative;
}

#contact::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background: linear-gradient(30deg, #263a29, #31772b, #50c41f);
}

.contact {
	padding: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}

.contact-left-text,
.contact-right-text {
	text-align: center;
	margin-top: 2rem;
	border-radius: 30px;
	background: lightgrey;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
	padding: 2rem;
	max-width: 500px;
}

.contact-left-text h2 {
	margin: 1rem 0;
	color: var(--orange);
}

.contact-right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

@media screen and (min-width: 820px) {
	#contact {
		min-height: 100vh;
		overflow: hidden;
	}
	.contact-left {
		align-self: flex-start;
	}
	.contact-right {
		align-self: flex-end;
	}
}

@media screen and (min-width: 1100px) {
	.contact-right {
		margin-top: -20rem;
	}
}

/*  */
form {
	background-color: #fcd0a1;
	border-radius: 10px;
	padding: 20px;
	width: 300px;
	margin: 50px auto;
}

label {
	display: block;
	margin-bottom: 10px;
	font-size: 18px;
	font-weight: bold;
	color: #de5959;
}

.infos[type="text"],
input[type="email"] {
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border-radius: 5px;
	border: none;
	margin-bottom: 20px;
}

button {
	background-color: #de5959;
	color: white;
	font-size: 18px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-right: 10px;
}

button:hover {
	background-color: #b54141;
}

#limpar {
	background-color: #fcb13e;
	color: white;
	font-size: 18px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

#limpar:hover {
	background-color: #c78d35;
}

.message {
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border-radius: 5px;
	border: none;
	margin-bottom: 20px;
	resize: none;
}

.mario {
	width: 5px;
	height: 5px;
	position: relative;
	left: 100px;
	box-shadow: 0px 0px 0px transparent, 130px 5px #ffa500, 135px 5px #ffa500,
		140px 5px #ffa500, 95px 10px #de4513, 100px 10px #de4513,
		105px 10px #de4513, 110px 10px #de4513, 115px 10px #de4513,
		130px 10px #ffa500, 135px 10px #ffa500, 140px 10px #ffa500,
		90px 15px #de4513, 95px 15px #de4513, 100px 15px #de4513,
		105px 15px #de4513, 110px 15px #de4513, 115px 15px #de4513,
		120px 15px #de4513, 125px 15px #de4513, 130px 15px hsl(15, 84%, 47%),
		135px 15px #ffa500, 140px 15px #ffa500, 90px 20px #a52a2a,
		95px 20px #a52a2a, 100px 20px #a52a2a, 105px 20px #ffa500,
		110px 20px #ffa500, 115px 20px #000, 120px 20px #ffa500,
		130px 20px #4545bb, 135px 20px #4545bb, 140px 20px #4545bb,
		85px 25px #a52a2a, 90px 25px #ffa500, 95px 25px #a52a2a,
		100px 25px #ffa500, 105px 25px #ffa500, 110px 25px #ffa500,
		115px 25px #000, 120px 25px #ffa500, 125px 25px #ffa500,
		130px 25px #4545bb, 135px 25px #4545bb, 140px 25px #4545bb,
		85px 30px #a52a2a, 90px 30px #ffa500, 95px 30px #a52a2a,
		100px 30px #a52a2a, 105px 30px #ffa500, 110px 30px #ffa500,
		115px 30px #ffa500, 120px 30px #a52a2a, 125px 30px #ffa500,
		130px 30px #ffa500, 135px 30px #ffa500, 140px 30px #4545bb,
		85px 35px #a52a2a, 90px 35px #a52a2a, 95px 35px #ffa500,
		100px 35px #ffa500, 105px 35px #ffa500, 110px 35px #ffa500,
		115px 35px #a52a2a, 120px 35px #a52a2a, 125px 35px #a52a2a,
		130px 35px #a52a2a, 135px 35px #a52a2a, 95px 40px #ffa500,
		100px 40px #ffa500, 105px 40px #ffa500, 110px 40px #ffa500,
		115px 40px #ffa500, 120px 40px #ffa500, 125px 40px #ffa500,
		130px 40px #4545bb, 75px 45px #4545bb, 80px 45px #4545bb,
		85px 45px #4545bb, 90px 45px #4545bb, 95px 45px #4545bb,
		100px 45px #de4513, 105px 45px #4545bb, 110px 45px #4545bb,
		115px 45px #4545bb, 120px 45px #de4513, 125px 45px #4545bb,
		70px 50px #4545bb, 75px 50px #4545bb, 80px 50px #4545bb,
		85px 50px #4545bb, 90px 50px #4545bb, 95px 50px #4545bb,
		100px 50px #4545bb, 105px 50px #de4513, 110px 50px #4545bb,
		115px 50px #4545bb, 120px 50px #4545bb, 125px 50px #de4513,
		140px 50px #000, 65px 55px #ffa500, 70px 55px #ffa500,
		75px 55px #4545bb, 80px 55px #4545bb, 85px 55px #4545bb,
		90px 55px #4545bb, 95px 55px #4545bb, 100px 55px #4545bb,
		105px 55px #de4513, 110px 55px #de4513, 115px 55px #de4513,
		120px 55px #de4513, 125px 55px #de4513, 140px 55px #000,
		65px 60px #ffa500, 70px 60px #ffa500, 75px 60px #ffa500,
		85px 60px #de4513, 90px 60px #de4513, 95px 60px #4545bb,
		100px 60px #de4513, 105px 60px #de4513, 110px 60px #ff0,
		115px 60px #de4513, 120px 60px #de4513, 125px 60px #ff0,
		130px 60px #de4513, 135px 60px #000, 140px 60px #000,
		70px 65px #ffa500, 80px 65px #000, 85px 65px #de4513,
		90px 65px #de4513, 95px 65px #de4513, 100px 65px #de4513,
		105px 65px #de4513, 110px 65px #de4513, 115px 65px #de4513,
		120px 65px #de4513, 125px 65px #de4513, 130px 65px #de4513,
		135px 65px #000, 140px 65px #000, 75px 70px #000, 80px 70px #000,
		85px 70px #000, 90px 70px #de4513, 95px 70px #de4513,
		100px 70px #de4513, 105px 70px #de4513, 110px 70px #de4513,
		115px 70px #de4513, 120px 70px #de4513, 125px 70px #de4513,
		130px 70px #de4513, 135px 70px #000, 140px 70px #000, 70px 75px #000,
		75px 75px #000, 80px 75px #000, 85px 75px #de4513, 90px 75px #de4513,
		95px 75px #de4513, 100px 75px #de4513, 105px 75px #de4513,
		110px 75px #de4513, 115px 75px #de4513, 70px 80px #000,
		85px 80px #de4513, 90px 80px #de4513, 95px 80px #de4513;
}
/*  */
.main {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	margin-top: 2rem;
}

.up {
	display: flex;
	flex-direction: row;
	gap: 0.5em;
}

.down {
	display: flex;
	flex-direction: row;
	gap: 0.5em;
}

.card1 {
	text-align: center;

	width: 90px;
	height: 90px;
	outline: none;
	border: none;
	background: white;
	border-radius: 90px 5px 5px 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: 0.2s ease-in-out;
}

.instagram {
	margin-top: 2.2em;
	margin-left: 1.4em;
	fill: #cc39a4;
}

.card2 {
	text-align: center;

	width: 90px;
	height: 90px;
	outline: none;
	border: none;
	background: white;
	border-radius: 5px 90px 5px 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: 0.2s ease-in-out;
}

.twitter {
	margin-top: 2.2em;
	margin-left: -1.2em;
	fill: #03a9f4;
}

.card3 {
	text-align: center;

	width: 90px;
	height: 90px;
	outline: none;
	border: none;
	background: white;
	border-radius: 5px 5px 5px 90px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: 0.2s ease-in-out;
}

.github {
	margin-top: 1.5em;
	margin-left: 1.3em;
}

.card4 {
	text-align: center;
	width: 90px;
	height: 90px;
	outline: none;
	border: none;
	background: white;
	border-radius: 5px 5px 90px 5px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: 0.2s ease-in-out;
}

.discord {
	margin-top: 1.7em;
	margin-left: -1.2em;
	fill: #8c9eff;
}

.card1:hover {
	cursor: pointer;
	scale: 1.1;
	background-color: #cc39a4;
}

.card1:hover .instagram {
	fill: white;
}

.card2:hover {
	cursor: pointer;
	scale: 1.1;
	background-color: #03a9f4;
}

.card2:hover .twitter {
	fill: white;
}

.card3:hover {
	cursor: pointer;
	scale: 1.1;
	background-color: black;
}

.card3:hover .github {
	fill: white;
}

.card4:hover {
	cursor: pointer;
	scale: 1.1;
	background-color: #8c9eff;
}

.card4:hover .discord {
	fill: white;
}
</style>
