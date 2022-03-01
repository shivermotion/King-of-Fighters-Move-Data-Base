import logo from "./assets/arcade-game.png";
import right from "./assets/right.png";
import left from "./assets/left.png";
import up from "./assets/up.png";
import down from "./assets/down.png";
import downLeft from "./assets/downLeft.png";
import downRight from "./assets/downRight.png";
import halfCircleFoward from "./assets/halfCircleForward.png";
import halfCircleBack from "./assets/halfCircleBack.png";
import shory from "./assets/shory.png";
import reverseHadoken from "./assets/reverseHadoken.png";
import hadoken from "./assets/hadoken.png";
import punchHigh from "./assets/punchHigh.png";
import punchLow from "./assets/punchLow.png";
import kickHigh from "./assets/kickHigh.png";
import kickLow from "./assets/kickLow.png";

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
					{/* PAYPAL BUTTON*/}
					<span>Please Donate</span>
					<form
						action="https://www.paypal.com/donate"
						method="post"
						target="_top"
					>
						<input
							type="hidden"
							name="business"
							value="527GL73ZVALQ8"
						/>
						<input
							type="hidden"
							name="no_recurring"
							value="0"
						/>
						<input
							type="hidden"
							name="currency_code"
							value="USD"
						/>
						<input
							type="image"
							src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
							border="0"
							name="submit"
							title="PayPal - The safer, easier way to pay online!"
							alt="Donate with PayPal button"
						/>
						<img
							alt=""
							border="0"
							src="https://www.paypal.com/en_US/i/scr/pixel.gif"
							width="1"
							height="1"
						/>
					</form>
				</div>
			</nav>

			{/*MAIN*/}
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
							<ul class="list-group">
								<li class="list-group-item">
									Cras
									justo
									odio
								</li>
								<li class="list-group-item">
									Dapibus
									ac
									facilisis
									in
								</li>
								<li class="list-group-item">
									Morbi
									leo
									risus
								</li>
								<li class="list-group-item">
									Porta ac
									consectetur
									ac
								</li>
								<li class="list-group-item">
									Vestibulum
									at eros
								</li>
							</ul>
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
						id="panelsStayOpen-headingEighteen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseEighteen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseEighteen"
						>
							IORI YAGAMI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseEighteen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingEighteen"
					>
						<div class="accordion-body">
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									GE-SHIKI
									YUMEBIKI
								</li>
								<li class="list-group-item">
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									GE-SHIKI
									YUMEBIKI(FOLLOW
									UP)
								</li>
								<li class="list-group-item">
									[GE-SHIKI
									YUMEBIKI]
									<img
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									GE-SHIKI
									YURIORI
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											left
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									GE-SHIKI
									GOFU IN
									"SHINIGAMI"
								</li>
								<li class="list-group-item">
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									108
									SHIKI
									YAMIBARAI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									100
									SHIKI
									ONIYAKI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											shory
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									127
									SHIKI
									AOIBANA
									1 [EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SHIKI
									AOIBANA
									2 [EX]
								</li>
								<li class="list-group-item">
									[127
									SHIKI
									AOIBANA
									1]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SHIKI
									AOIBANA
									3 [EX]
								</li>
								<li class="list-group-item">
									[127
									SHIKI
									AOIBANA
									2]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									212
									SHIKI
									KOTOTSHUKI
									IN [EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											halfCircleBack
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KUZUKAZE
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											halfCircleBack
										}
									/>
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									311
									SHIKI
									TSUMAKUSHI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											shory
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									KIN 1211
									SHIKI
									YAOTOME
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									<img
										src={
											halfCircleBack
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									URA 316
									SHIKI
									SAIKA
									[MAX]
								</li>
								<li class="list-group-item">
									[
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
									KIN 1211
									SHIKI
									YAOTOME]
									<img
										src={
											hadoken
										}
									/>{" "}
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									URA 1018
									SHIKI
									YASHIORI
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										src={
											punchHigh
										}
									/>
									[HOLD
									OK]
								</li>
								<li class="list-group-item text-center">
									Climax
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									URA 1131
									SHIKI
									HOZUKI
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>{" "}
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Normal
									Throws
								</li>
								<li class="list-group-item">
									SAKAHAGI
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KANYARAI
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingNineteen"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseNineteen"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseNineteen"
						>
							ISLA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseNineteen"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingNineteen"
					>
						<div class="accordion-body">
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									CLOUD
								</li>
								<li class="list-group-item">
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									DESIGNS
								</li>
								<li class="list-group-item">
									<img
										src={
											downRight
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>

								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									DRIPS
									FORWARD
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DRIPS
									BACKWARDS
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									DRIPS
									VERTICAL
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PIECING
									A [EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									PIECING
									B [EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PIECING
									C [EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FILL-IN
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SCRIBE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											shory
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TO FRONT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BRAKE
								</li>
								<li class="list-group-item">
									[TO
									FRONT]
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									THROWIE
									A
								</li>
								<li class="list-group-item">
									(TO
									FRONT
									<img
										src={
											kickHigh
										}
									/>
									or [EX])
									<img
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									THROWIE
									B
								</li>
								<li class="list-group-item">
									(TO
									FRONT
									<img
										src={
											kickHigh
										}
									/>
									or [EX])
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									THROWIE
									C
								</li>
								<li class="list-group-item">
									(TO
									FRONT
									<img
										src={
											kickHigh
										}
									/>
									or [EX])
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PIECING
									A [EX]
								</li>
								<li class="list-group-item">
									(THROWIE
									C)
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									PIECING
									B
								</li>
								<li class="list-group-item">
									(THROWIE
									C)
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PIECING
									C [EX]
								</li>
								<li class="list-group-item">
									(THROWIE
									C)
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									BACK TO
									BACK
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									WILD
									STYLE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Climax
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									KING OF
									PIECE:I&A
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>{" "}
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Normal
									Throws
								</li>
								<li class="list-group-item">
									ALL CITY
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CROSSING
									OUT
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwenty"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwenty"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwenty"
						>
							JOE HIGASHI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwenty"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwenty"
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
						id="panelsStayOpen-headingTwentyOne"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyOne"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyOne"
						>
							K'
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyOne"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyOne"
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
						id="panelsStayOpen-headingTwentyTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyTwo"
						>
							KING
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyTwo"
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
						id="panelsStayOpen-headingTwentyThree"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyThree"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyThree"
						>
							KING OF DINOSAURS
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyThree"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyThree"
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
						id="panelsStayOpen-headingTwentyFour"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyFour"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyFour"
						>
							KROHNEN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyFour"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyFour"
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
						id="panelsStayOpen-headingTwentyFive"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyFive"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyFive"
						>
							KUKRI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyFive"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyFive"
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
						id="panelsStayOpen-headingTwentySix"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentySix"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentySix"
						>
							KYO KUSANAGI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentySix"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentySix"
					>
						<div class="accordion-body">
							<li class="list-group-item text-center">
								Command Moves
							</li>
							<li class="list-group-item">
								GE-SHIKI GOFU YO
							</li>
							<li class="list-group-item">
								<img
									src={
										right
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								88 SHIKI
							</li>
							<li class="list-group-item">
								<img
									src={
										downRight
									}
								/>
								+
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								GE-SHIKI NARAKU
								OTOSHI
							</li>
							<li class="list-group-item">
								[IN AIR]
								<img
									src={
										down
									}
								/>
								+
								<img
									src={
										punchHigh
									}
								/>
							</li>

							<li class="list-group-item text-center">
								Special Moves
							</li>
							<li class="list-group-item">
								100 SHIKI
								ONIYAKI [EX]
							</li>
							<li class="list-group-item">
								<img
									src={
										shory
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								R.E.D. KICK [EX]
							</li>
							<li class="list-group-item">
								<img
									src={
										left
									}
								/>
								<img
									src={
										reverseHadoken
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								75 SHIKI KAI
								[EX]
							</li>
							<li class="list-group-item">
								<img
									src={
										hadoken
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								75 SHIKI KAI
								(FOLLOW UP)
							</li>
							<li class="list-group-item">
								[
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>{" "}
								75 SHIKI KAI]
								<img
									src={
										kickLow
									}
								/>{" "}
								or{" "}
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								115 SHIKI
								DOKUGAMI [EX]
							</li>
							<li class="list-group-item">
								<img
									src={
										hadoken
									}
								/>
								+
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								401
								SHIKI・TSUMIYOMI
							</li>
							<li class="list-group-item">
								[115
								SHIKI・DOKUGAMI]
								<img
									src={
										halfCircleBack
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								402
								SHIKI・BATSUYOMI
							</li>
							<li class="list-group-item">
								[401
								SHIKI・TSUMIYOMI]
								<img
									src={
										right
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								100
								SHIKI・ONIYAKI
							</li>
							<li class="list-group-item">
								[402
								SHIKI・BATSUYOMI]
								<img
									src={
										shory
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								114
								SHIKI・ARAGAMI
							</li>
							<li class="list-group-item">
								<img
									src={
										hadoken
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								128
								SHIKI・KONOKIZU
							</li>
							<li class="list-group-item">
								[114
								SHIKI・ARAGAMI]
								<img
									src={
										hadoken
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								125 SHIKI NANASE
							</li>
							<li class="list-group-item">
								[128
								SHIKI・KONOKIZU]
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								127
								SHIKI・YANOSABI①
							</li>
							<li class="list-group-item">
								[128
								SHIKI・KONOKIZU]
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								128
								SHIKI・YANOSABI②
							</li>
							<li class="list-group-item">
								[114
								SHIKI・ARAGAMI]
								<img
									src={
										halfCircleBack
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								212
								SHIKI・KOTOTSUKI
								YO
							</li>
							<li class="list-group-item">
								[128
								SHIKI・YANOSABI②]
								<img
									src={
										halfCircleBack
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								GE-SHIKI・MIGARI
								UGACHI
							</li>
							<li class="list-group-item">
								[128
								SHIKI・YANOSABI②]
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								124
								SHIKI・MUNOTSHUCHI{" "}
							</li>
							<li class="list-group-item">
								[114
								SHIKI・ARAGAMI]
								<img
									src={
										halfCircleBack
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								427
								SHIKI・HIKIGANE
							</li>
							<li class="list-group-item">
								[124
								SHIKI・MUNOTSHUCHI]
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								GE-SHIKI・TSURUBEOTOSHI
							</li>
							<li class="list-group-item">
								[124
								SHIKI・MUNOTSHUCHI]
								<img
									src={
										punchLow
									}
								/>
								or
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								212
								SHIKI・KOTOTSUKI
								YO [EX]
							</li>
							<li class="list-group-item">
								<img
									src={
										halfCircleBack
									}
								/>
								+
								<img
									src={
										kickLow
									}
								/>
								or
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Super Special
								Moves
							</li>
							<li class="list-group-item">
								URA 108
								SHIKI・OROCHINAGI
								[MAX]
							</li>
							<li class="list-group-item">
								<img
									src={
										reverseHadoken
									}
								/>
								<img
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>{" "}
								or
								<img
									src={
										punchHigh
									}
								/>
								[HOLD OK]
							</li>
							<li class="list-group-item">
								182 SHIKI [MAX]
							</li>
							<li class="list-group-item">
								<img
									src={
										hadoken
									}
								/>
								<img
									src={
										hadoken
									}
								/>
								+
								<img
									src={
										punchLow
									}
								/>{" "}
								or
								<img
									src={
										punchHigh
									}
								/>
								[HOLD OK]
							</li>
							<li class="list-group-item text-center">
								Climax Super
								Special Moves
							</li>
							<li class="list-group-item">
								URA 1212
								SHIKI・YAKUMO
							</li>
							<li class="list-group-item">
								<img
									src={
										reverseHadoken
									}
								/>
								<img
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									src={
										punchHigh
									}
								/>{" "}
								<img
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Normal Throws
							</li>
							<li class="list-group-item">
								HATSUGANE
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									src={
										left
									}
								/>
								or
								<img
									src={
										right
									}
								/>
								+
								<img
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								ISSETSU SEOI
								NAGE
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									src={
										left
									}
								/>
								or
								<img
									src={
										right
									}
								/>
								+
								<img
									src={
										kickHigh
									}
								/>
							</li>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingTwentySeven"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentySeven"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentySeven"
						>
							LEONA HEIDERN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentySeven"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentySeven"
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
						id="panelsStayOpen-headingTwentyEight"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyEight"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyEight"
						>
							LUONG
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyEight"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyEight"
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
						id="panelsStayOpen-headingTwentyNine"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwentyNine"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseTwentyNine"
						>
							MAI SHIRANUI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwentyNine"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingTwentyNine"
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
						id="panelsStayOpen-headingThirty"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirty"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirty"
						>
							MAXIMA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirty"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirty"
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
						id="panelsStayOpen-headingThirtyOne"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyOne"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyOne"
						>
							MEITENKUN
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyOne"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyOne"
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
						id="panelsStayOpen-headingThirtyTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyTwo"
						>
							RALF JONES
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyTwo"
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
						id="panelsStayOpen-headingThirtyThree"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyThree"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyThree"
						>
							RAMON
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyThree"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyThree"
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
						id="panelsStayOpen-headingThirtyFour"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyFour"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyFour"
						>
							ROBERT GARCIA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyFour"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyFour"
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
						id="panelsStayOpen-headingThirtyFive"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyFive"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyFive"
						>
							ROCK HOWARD
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyFive"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyFive"
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
						id="panelsStayOpen-headingThirtySix"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtySix"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtySix"
						>
							RYO SAKAZAKI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtySix"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtySix"
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
						id="panelsStayOpen-headingThirtySeven"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtySeven"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtySeven"
						>
							RYUJI YAMAZAKI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtySeven"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtySeven"
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
						id="panelsStayOpen-headingThirtyEight"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyEight"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyEight"
						>
							SHERMIE
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyEight"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyEight"
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
						id="panelsStayOpen-headingThirtyNine"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThirtyNine"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseThirtyNine"
						>
							SHUN'EI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThirtyNine"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingThirtyNine"
					>
						<div class="accordion-body">
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									SKY AXE
								</li>
								<li class="list-group-item">
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									GROUND
									HAMMER
								</li>
								<li class="list-group-item">
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									TARGET
									COMBO 1{" "}
								</li>
								<li class="list-group-item">
									<img
										src={
											punchHigh
										}
									/>
									-
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									SCARLET
									PHANTOM
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AQUA
									SPEAR
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RISING
									EFREET
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											shory
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BLAU
									WING
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									THRUSTER
									VISION -
									FRONT
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									THRUSTER
									VISION -
									BACK
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									THRUSTER
									VISION -
									SLANT
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									THRUSTER
									VISION -
									UNDER
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									GAIANIC
									BURST
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SPECTER
									EXTENSION
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Climax
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									PHANTOM
									SINGULATION
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>{" "}
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Normal
									Throws
								</li>
								<li class="list-group-item">
									BUSTER
									KNEE
									KICK
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AERIAL
									LEG
									THROW
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingForty"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseForty"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseForty"
						>
							TERRY BOGARD
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseForty"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingForty"
					>
						<div class="accordion-body">
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									BACK
									KNUCKLE
								</li>
								<li class="list-group-item">
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									RISING
									UPPER
								</li>
								<li class="list-group-item">
									<img
										src={
											downRight
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									POWER
									WAVE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BURN
									KNUCKLE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CRACK
									SHOOT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RISING
									TACKLE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											shory
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									POWER
									CHARGE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									POWER
									DUNK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										src={
											shory
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									POWER
									GEYSER
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BUSTER
									WOLF
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										src={
											hadoken
										}
									/>
									<img
										src={
											hadoken
										}
									/>
									+
									<img
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Climax
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									STARDUST
									IGNITION
								</li>
								<li class="list-group-item">
									<img
										src={
											reverseHadoken
										}
									/>
									<img
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Normal
									Throws
								</li>
								<li class="list-group-item">
									BUSTER
									THROW
									(FORWARD)
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BUSTER
									THROW
									(BACKWARD)
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										src={
											left
										}
									/>
									or
									<img
										src={
											right
										}
									/>
									+
									<img
										src={
											kickHigh
										}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2
						class="accordion-header"
						id="panelsStayOpen-headingFortyOne"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFortyOne"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFortyOne"
						>
							VANESSA
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFortyOne"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFortyOne"
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
						id="panelsStayOpen-headingFortyTwo"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFortyTwo"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFortyTwo"
						>
							WHIP
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFortyTwo"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFortyTwo"
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
						id="panelsStayOpen-headingFortyThree"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFortyThree"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFortyThree"
						>
							YASHIRO NANAKASE
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFortyThree"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFortyThree"
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
						id="panelsStayOpen-headingFortyFour"
					>
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFortyFour"
							aria-expanded="false"
							aria-controls="panelsStayOpen-collapseFortyFour"
						>
							YURI SAKAZAKI
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFortyFour"
						class="accordion-collapse collapse"
						aria-labelledby="panelsStayOpen-headingFortyFour"
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
