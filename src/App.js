// import logo from "./logo.svg";
// import "./App.css";
import logo from "./assets/arcade-game.png";

function App() {
	return (
		<div class="container">
			{/* NAVBAR*/}
			<nav class="navbar navbar-dark bg-dark mb-2">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img
							src={logo}
							alt=""
							width="30"
							height="24"
							class="d-inline-block align-text-top"
						/>
						KOFmdb
					</a>
				</div>
			</nav>
			<p class="text-center">
				<h1>FIGHTERS</h1>
			</p>
			{/*CHARACTER LIST */}
			<div
				class="accordion"
				id="accordionPanelsStayOpenExample"
			>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingOne"
					>
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseOne"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseOne"
						>
							ANDY BOGARD
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseOne"
						class="accordion-collapse collapse "
						aria-labelledby="panelsStayOpen-headingOne"
					>
						<div class="accordion-body">
							<strong>
								This is the
								first item's
								accordion body.
							</strong>{" "}
							It is shown by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>

				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							ANGEL
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>

				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingThree"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThree"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThree"
						>
							ANTONOV
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThree"
						class="accordion-collapse collapse "
						aria-labelledby="panelsStayOpen-headingThree"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>

				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingFour"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFour"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFour"
						>
							ASH CRIMSON
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFour"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFour"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingFive"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFive"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFive"
						>
							ATHENA ASAMIYA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFive"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFive"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingSix"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseSix"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseSix"
						>
							B. JENET
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseSix"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingSix"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingSeven"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseSeven"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseSeven"
						>
							BENIMARU NIKAIDO
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseSeven"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingSeven"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingEight"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseEight"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseEight"
						>
							BILLY KANE
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseEight"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingEight"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingNine"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseNine"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseNine"
						>
							BLUE MARY
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseNine"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingNine"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTen"
						>
							CHIZURU KAGURA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTen"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingEleven"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseEleven"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseEleven"
						>
							CHRIS
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseEleven"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingEleven"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwelve"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwelve"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwelve"
						>
							CLARK STILL
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwelve"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwelve"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingThirteen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirteen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirteen"
						>
							DOLORES
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirteen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirteen"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingFourteen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFourteen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFourteen"
						>
							ELISABETH BLANCTORCHE
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFourteen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFourteen"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingFifteen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFifteen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFifteen"
						>
							GATO
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFifteen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFifteen"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingSixteen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseSixteen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseSixteen"
						>
							GEESE HOWARD
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseSixteen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingSixteen"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingSeventeen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseSeventeen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseSeventeen"
						>
							HEIDERN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseSeventeen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingSeventeen"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							IORI YAGAMI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							ISLA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							JOE HIGASHI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							K'
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							KING
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							KING OF DINOSAURS
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							KROHNEN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							KUKRI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							KYO KUSANAGI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							LEONA HEIDERN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							LUONG
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							MAI SHIRANUI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							MAXIMA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							MEITENKUN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							RALF JONES
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							RAMON
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							ROBERT GARCIA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							ROCK HOWARD
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							RYO SAKAZAKI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							RYUJI YAMAZAKI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							SHERMIE
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							SHUN'EI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							TERRY BOGARD
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							VANESSA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							WHIP
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							YASHIRO NANAKASE
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							YURI SAKAZAKI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div class="accordion-body">
							<strong>
								This is the
								second item's
								accordion body.
							</strong>{" "}
							It is hidden by default,
							until the collapse
							plugin adds the
							appropriate classes that
							we use to style each
							element. These classes
							control the overall
							appearance, as well as
							the showing and hiding
							via CSS transitions. You
							can modify any of this
							with custom CSS or
							overriding our default
							variables. It's also
							worth noting that just
							about any HTML can go
							within the{" "}
							<code>
								.accordion-body
							</code>
							, though the transition
							does limit overflow.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
