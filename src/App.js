import logo from "./assets/arcade-game.png";
import right from "./assets/right.png";
import left from "./assets/left.png";
import up from "./assets/up.png";
import down from "./assets/down.png";
// import downLeft from "./assets/downLeft.png";
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
import upRight from "./assets/upRight.png";
import upLeft from "./assets/upLeft.png";

function App() {
	return (
		<div class="container">
			{/* NAVBAR*/}
			<nav class="navbar navbar-dark bg-dark mb-2">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img
							alt="fightingIcon"
							src={logo}
							width="30"
							height="24"
							class="d-inline-block align-text-top"
						/>
						KOFIV TRAINING COMPANION
					</a>
					{/* PAYPAL BUTTON*/}
					<span>Support the Developer</span>
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
							alt="fightingIcon"
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
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									HIRATE
									UCHI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									GENEI
									SHIRANUI
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TARGET
									COMBO 1
								</li>
								<li class="list-group-item">
									[PRESS
									IN ORDER
									- CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									-
									<img
										alt="fightingIcon"
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
									ZAN-EI
									KEN [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KUUHA
									DAN [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KUUHA
									DAN
									(BRAKE)
								</li>
								<li class="list-group-item">
									[KUUHA
									DAN]
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HISHOU
									KEN [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SHOURYUU
									DAN [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									CHOU
									REPPA
									DAN
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ZETSU
									HITSHOU
									KEN
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									CHOU
									SHIN
									SOKU
									SAN-EI
									KEN
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									KAKAEKOMI
									NAGE
									(FORWARD)
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KAKAEKOMI
									NAGE
									(BACKWARD)
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<li class="list-group-item text-center">
								Command Moves
							</li>
							<li class="list-group-item">
								MIDDLE SPIN
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								HEAVY KNEE
								ATTACK
							</li>
							<li class="list-group-item">
								[IN AIR]
								<img
									alt="fightingIcon"
									src={
										down
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>

							<li class="list-group-item text-center">
								Special Moves
							</li>
							<li class="list-group-item">
								RED SKY [EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										halfCircleBack
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								MAD MURDER [EX]
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								UNCHAIN LOW
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										downRight
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								UNCHAIN HEEL
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										downRight
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>{" "}
							</li>
							<li class="list-group-item">
								UNCHAIN TORNADO
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								UNCHAIN BLOW
								[EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								UNCHAIN STEP
								[EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE UPPER
							</li>
							<li class="list-group-item">
								[UNCHAIN START]
								<img
									alt="fightingIcon"
									src={up}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE SOBAT
							</li>
							<li class="list-group-item">
								[UNCHAIN START]
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE UNDER
								BLOW
							</li>
							<li class="list-group-item">
								[UNCHAIN START]
								<img
									alt="fightingIcon"
									src={
										down
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE HIGH
							</li>
							<li class="list-group-item">
								[UNCHAIN START]
								<img
									alt="fightingIcon"
									src={up}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE HAMMER
								BLOW
							</li>
							<li class="list-group-item">
								[UNCHAIN START]
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE ASSAULT
							</li>
							<li class="list-group-item">
								[UNCHAIN START]
								<img
									alt="fightingIcon"
									src={
										down
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE FEINT
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE FEINT
								(FORWARD)
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								CIRCLE FEINT
								(BACKWARD)
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								FINISH LARIAT
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								or [SPECIAL
								CIRCLE]
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
							</li>
							<li class="list-group-item">
								FINISH STRAIGHT
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								or [SPECIAL
								CIRCLE]
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								FINISH ROLLING
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								or [SPECIAL
								CIRCLE]
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>

							<li class="list-group-item">
								FINISH NECK
								CUTTER [MAX]
							</li>
							<li class="list-group-item">
								[UNCHAIN CIRCLE]
								or [SPECIAL
								CIRCLE]
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
							</li>
							<li class="list-group-item">
								FINISH GRAPPLE
								KICK
							</li>
							<li class="list-group-item">
								[CLOSE
								BY][UNCHAIN
								CIRCLE] or
								[SPECIAL CIRCLE]
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Super Special
								Moves
							</li>
							<li class="list-group-item ">
								REAL RAVE [MAX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								<img
									alt="fightingIcon"
									src={
										shory
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item ">
								BLUE MONDAY
								COUNTER [MAX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								<img
									alt="fightingIcon"
									src={
										shory
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
								[IN TIME WITH
								OPPONENT'S
								ATTACK]
							</li>
							<li class="list-group-item text-center">
								Climax Super
								Special Moves
							</li>
							<li class="list-group-item">
								ASCENSION TIME
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>{" "}
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Normal Throws
							</li>
							<li class="list-group-item">
								TEKITOU RUSH
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								SHADOW BEHEAD
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
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
							<li class="list-group-item text-center">
								Command Moves
							</li>
							<li class="list-group-item">
								PRESIDENT BINTA
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
							</li>
							<li class="list-group-item">
								TARGET COMBO 1
							</li>
							<li class="list-group-item">
								[PRESS IN ORDER]
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
								-
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								TARGET COMBO 2
							</li>
							<li class="list-group-item">
								[PRESS IN ORDER]
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
								-
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Special Moves
							</li>
							<li class="list-group-item">
								WHALE STREAM
								[EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								VERTICAL MACHO
								[EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										shory
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								GIGANTIC BACK
								[EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
							</li>
							<li class="list-group-item">
								GIGANTIC BACK
								PRESS [EX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item">
								BERING WAVE [EX]
							</li>
							<li class="list-group-item">
								[IN AIR]
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>

							<li class="list-group-item text-center">
								Super Special
								Moves
							</li>
							<li class="list-group-item">
								TUNGUNSKA BOMBER
								[MAX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>{" "}
								or
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								KAMCHATKA
								COLLPASE [MAX]
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>{" "}
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Climax Super
								Special Moves
							</li>
							<li class="list-group-item">
								KOSMOS
								REGRESSION
							</li>
							<li class="list-group-item">
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>{" "}
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>
							</li>
							<li class="list-group-item text-center">
								Normal Throws
							</li>
							<li class="list-group-item">
								PRESIDENT LIFT
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>
							</li>
							<li class="list-group-item">
								PRESIDENT TOSS
							</li>
							<li class="list-group-item">
								[CLOSE BY]
								<img
									alt="fightingIcon"
									src={
										left
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									FLOREAL
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									FLOREAL
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FLOREAL
									INSTANT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									NIVOSE
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											up
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GENIE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GERMINAL
									CAPRICE
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>

								<li class="list-group-item">
									VENTOSE
									[EX]
								</li>
								<li class="list-group-item">
									[SANS-COULETTE
									ACTIVE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									NIVOSE
									[EX]
								</li>
								<li class="list-group-item">
									[SANS-COULETTE
									ACTIVE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											up
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GERMINAL
									CAPRICE
									[EX]
								</li>
								<li class="list-group-item">
									[SANS-COULETTE
									ACTIVE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									THERMIDOR
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PLUVIOSE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SANS-CULOTTE
									(2-GAUGE)
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									-
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									-
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									-
									<img
										alt="fightingIcon"
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
									ESPOIR
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									RECOMPENSES
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									VERTUS
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									PHEONIX
									BOMB
									(GROUND)
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									PHEONIX
									BOMB
									(AIR)
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									PSYCHO
									BALL
									ATTACK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PSYCHO
									SWORD
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PSYCHO
									REFLECTOR
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PHOENIX
									ARROW
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SUPER
									PSYCHIC
									THROW
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PSYCHIC
									TELEPORT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PSYCHIC
									SHOOT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									SHINING
									CRYSTAL
									BIT
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SHINING
									CRYSTAL
									BIT
									(CANSEL)
									[MAX]
								</li>
								<li class="list-group-item">
									[SHINING
									CRYSTAL
									BIT]
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									CRYSTAL
									SHOOT
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									PSYCHO
									REMIX
									SPARK!
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									PSYCHIC
									ATTACK
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PSYCHIC
									THROW
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									PSYCHIC
									SHOOT
								</li>
								<li class="list-group-item">
									[CLOSE
									BY - IN
									AIR]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
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
							CHECK BACK LATER
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									FLYING
									DRILL
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									JACK
									KNIFE
									KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									AIR
									RAIJINKEN
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BENIMARU
									COLLIDER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									IAI-GERI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RAIJINKEN
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RAIMEITOU
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									BENIMARU
									RISING
									SHOT
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RAI-KOU
									KEN
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									RAIHA
									JIN-OU
									KEN
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									CATCH
									AND
									SHOOT
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FRONT
									SUPLEX
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SPINNING
									KNEE
									DROP
								</li>
								<li class="list-group-item">
									[CLOSE
									BY-IN
									AIR]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
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
							CHECK BACK LATER
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									HAMMER
									ARCH
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									DOUBLE
									ROLLING
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									CLIMBING
									ARROW
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									STRAIGHT
									SLICER
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CRAB
									CLUTCH
									[EX]
								</li>
								<li class="list-group-item">
									[
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>{" "}
									STRAIGHT
									SLICER]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STUN
									FANG
									[EX]
								</li>
								<li class="list-group-item">
									( [EX]
									STRAIGHT
									SLICER)
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									VERTICAL
									ARROW
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									M.
									SNATCHER
								</li>
								<li class="list-group-item">
									[
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>{" "}
									VERTICAL
									ARROW]
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SPIN
									FALL
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									M.SPIDER
								</li>
								<li class="list-group-item">
									[
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									SPIN
									FALL]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									REAL
									COUNTER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BACKDROP
									REAL
								</li>
								<li class="list-group-item">
									[CLOSE
									BY ·
									REAL
									COUNTER]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									M.BREAKER
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									M.
									TYPHOON
									[MAX]
								</li>
								<li class="list-group-item">
									[CLOSE
									RANGE]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									M.SPLASH
									ROSE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									M.
									DYNAMITE
									SWING
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									LOW KICK
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									VIKTOR
									THROW
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									JO KATSU
									ZHENG
									ZHENG
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									JO KATSU
									CANG
									CANG
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									JO KATSU
									CONG
									CONG
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									212
									KATSU
									OTSU
									SHIKI
									CHOUMON
									NO
									ISSHIN
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									212
									KATSU
									SHINSOKU
									NO
									NORITO
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STOP
								</li>
								<li class="list-group-item">
									[212
									KATSU
									SHINSOKU
									NO
									NORITO]
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									212
									KATSU
									SHINSOKU
									NO
									NORITO
									TEN ZUI
								</li>
								<li class="list-group-item">
									[212
									KATSU
									SHINSOKU
									NO
									NORITO]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									100
									KATSU
									TENJIN
									NO
									KOTOWARI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									108
									KATSU
									TAMAYURA
									NO
									SHITSUNE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>{" "}
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									URAMEN
									85 KATSU
									REIGI NO
									ISHIZUE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									URAMEN 1
									KATSU
									SAN RAI
									NO FUJIN
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									URAMEN
									31 KATSU
									KUUSEN
									NO
									JOUHARI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									REI
									GETSU
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KAI TEN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									SPINNING
									ARRAY
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									REVERSE
									ANCHOR
									KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									CARRY
									OFF KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									HUNTING
									AIR [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GLIDER
									STOMP
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SHOOTING
									DANCER
									THRUST
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SHOOTING
									DANCER
									STEP
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DIRECTION
									CHANGE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SCRAMBLE
									DASH
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>{" "}
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									CHAIN
									SLIDE
									TOUCH
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TWISTER
									DRIVE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									ONSLAUGHT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									STEP
									TURN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AERIAL
									DROP
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									STOMPING
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									STEP
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									<img
										alt="fightingIcon"
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
									MOUNT
									TACKLE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									CLARK
									LIFT
								</li>
								<li class="list-group-item">
									[MOUNT
									TACKLE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									SLEEPER
									LIFT
									(D.D.T)
								</li>
								<li class="list-group-item">
									[MOUNT
									TACKLE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FLASHING
									ELBOW
								</li>
								<li class="list-group-item">
									[SLEEPER
									LIFT
									(D.D.T)]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ROLLING
									CRADLER
								</li>
								<li class="list-group-item">
									[MOUNT
									TACKLE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SUPER
									ARGENTINE
									BACKBREAKER
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									VULCAN
									PUNCH
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>

								<li class="list-group-item">
									GATLING
									ATTACK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DEATH
									LAKE
									DRIVER
								</li>
								<li class="list-group-item">
									[HP or
									[EX]
									GATLING
									ATTACK]
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FRANKENSTEINER
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									ULTRA
									ARGENTINE
									BACKBREAKER
									[MAX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RUNNING
									THREE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									ULTRA
									CLARK
									BUSTER
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									+
									<img
										alt="fightingIcon"
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
									NAGEPPANASHI
									GERMAN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FISHERMAN
									BUSTER
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DEATH
									LAKE
									DRIVER{" "}
								</li>
								<li class="list-group-item">
									[CLOSE
									BY-IN
									AIR]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									HILZUNI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									TARGET
									COMBO 1
								</li>
								<li class="list-group-item">
									PRESS IN
									ORDER
									[CLOSE
									RANGE]
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
									-
									<img
										alt="fightingIcon"
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
									BURJ
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									QAFAS
									QABL
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									QAFAS
									KHALFI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									NESH
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ALTARIQ
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									GHADAB
									[MAX]
								</li>
								<li class="list-group-item">
									[CLOSE
									RANGE]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HADIR
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									KHALAQ
									AL'ARD
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									SALABA
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MARAN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									ECLAIRE
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>

								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									ETINCELLE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									COUP·DE·VENT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ILLUSION
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
									[IN TIME
									WITH
									OPPONENTS
									ATTACK]
								</li>
								<li class="list-group-item">
									GRELE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AURORE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									NOBLE-BLANCHE
									[MAX]
								</li>
								<li class="list-group-item">
									[CLOSE
									RANGE]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GRAND
									RAFALE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									FETE DE
									LA
									LUMIERE
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									MANIERE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									EXIL
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							CHECK BACK LATER
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
							CHECK BACK LATER
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									SHOOTER
									NARNAGEL
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									CROSS
									CUTTER
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MOON
									SLASHER
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											up
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STORM
									BRINGER
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STINGER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ASSAULT
									SABER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									HEIDERN
									END
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HEIDERN
									SLASH
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									([MAX]{" "}
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>{" "}
									or
									NEUTRAL
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>{" "}
									)
								</li>
								<li class="list-group-item text-center">
									Climax
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									GAE BOLG
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									LEAD
									BELCHER
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BACKSTABBING
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									KIN 1211
									SHIKI
									YAOTOME]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>{" "}
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
									or [EX])
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
									or [EX])
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
									or [EX])
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									STEP
									HIGH
									KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									SLIDING
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HIGH
									KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									HURRICAN
									UPPER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TIGER
									KICK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SLASH
									KICK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BAKURETSUKEN
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									OUGON NO
									KAKATO
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									SCREW
									UPPER
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BAKU-SLA
									GOLDEN
									TIGER
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									BAKURETSU
									SCREW
									PREMIUM
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									HIZA-JIGOKU
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									JOE
									SPECIAL
									2
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									ONE INCH
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									KNEE
									ASSAULT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SNIPER
									SIDE
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									EIN
									TRIGGER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SECOND
									WHIP
								</li>
								<li class="list-group-item">
									[EIN
									TRIGGER]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									SECOND
									SHOOT
								</li>
								<li class="list-group-item">
									[EIN
									TRIGGER]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									SECOND
									KNUCKLE
								</li>
								<li class="list-group-item">
									[EIN
									TRIGGER]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SECOND
									SHELL
								</li>
								<li class="list-group-item">
									[EIN
									TRIGGER]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BLACKOUT
									(FOLLOW
									UP)
								</li>
								<li class="list-group-item">
									(EIN
									TRIGGER
									or
									SECOND
									SHELL
									[EX])
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BLACKOUT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CROW
									BITE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CROW
									BITE
									(FOLLOW
									UP)
								</li>
								<li class="list-group-item">
									[CROW
									BITE]
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MINUTE
									SPIKE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									NARROW
									SPIKE
								</li>
								<li class="list-group-item">
									[MINUTE
									SPIKE]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AIR
									MINUTE
									SPIKE
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									HEAT
									DRIVE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									[HOLD
									OK]
								</li>
								<li class="list-group-item">
									CHAIN
									DRIVE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									HYPER
									CHAIN
									DRIVE
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									SPOTPILE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KNEE
									STRIKE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									SLIDING
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TRAP
									SHOT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									VENOM
									STRIKE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AIR
									VENOM
									STRIKE
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TORNADO
									KICK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									TRAP
									SHOT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									SURPRISE
									ROSE
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SILENT
									FLASH
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									ILLUSION
									DANCE
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									HOLD
									RUSH
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HOOK
									BUSTER
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									REX HEAD
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									YUCATAN
									PUNCH
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									ZETSUMETSU
									HURRICANE
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ASSUALT
									RAPTOR
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ANKYLO
									HAMMER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ANKYLO
									HAMMER
									(BRAKE)
								</li>
								<li class="list-group-item">
									[ANKYLO
									HAMMER]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									GIGA
									COMPY
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CHICXULUB
									BUSTER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									SUPER
									ZETSUMETSU
									HURRICANE
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>

								<li class="list-group-item">
									DINNER
									OF
									DINOSAUR
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									SPIRAL
									ARM
									EXCAVATION
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									DYNA
									BOMB
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DYNA
									BUSTER
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										downRight
									}
								/>
								+
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										down
									}
								/>
								+
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										shory
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										left
									}
								/>
								<img
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										kickHigh
									}
								/>{" "}
								75 SHIKI KAI]
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>{" "}
								or{" "}
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										halfCircleBack
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										shory
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										halfCircleBack
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										halfCircleBack
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										halfCircleBack
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										punchLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										halfCircleBack
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										kickLow
									}
								/>
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>{" "}
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										hadoken
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchLow
									}
								/>{" "}
								or
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										reverseHadoken
									}
								/>
								<img
									alt="fightingIcon"
									src={
										halfCircleFoward
									}
								/>
								+
								<img
									alt="fightingIcon"
									src={
										punchHigh
									}
								/>{" "}
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										left
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
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
									alt="fightingIcon"
									src={
										left
									}
								/>
								or
								<img
									alt="fightingIcon"
									src={
										right
									}
								/>
								+
								<img
									alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									STRIKE
									ARCH
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									BALTIC
									LAUNCHER
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MOON
									SLASHER
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											up
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									EARRING
									BOMB
									HEART
									ATTACK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									EXPLOSION
								</li>
								<li class="list-group-item">
									[EARRING
									BOMB
									HEART
									ATTACK]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									EARRING
									BOMB
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GRAND
									SABER
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GRAND
									SABER
									(FOLLOW
									UP)
								</li>
								<li class="list-group-item">
									[
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>{" "}
									GRAND
									SABER]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									X-CALIBUR
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									V-SLASHER
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SLASH
									SABER
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									<img
										alt="fightingIcon"
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
									LEONA
									BLADE
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									LEONA
									CRASH
									(FORWARD)
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									LEONA
									CRASH
									(BACKWARD)
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									TSUI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									GEKI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									[CANCEL
									BY{" "}
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>{" "}
									or{" "}
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>{" "}
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>{" "}
									]
								</li>
								<li class="list-group-item">
									REN [EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RIN [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KOU
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									TOU
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>

								<li class="list-group-item">
									TEI
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									BEN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									SEN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									CHOU
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									UKIHANE
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									KOUKAKU
									NO MAI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SANKAKU-TOBI
								</li>
								<li class="list-group-item">
									[IN AIR
									BY
									CORNER]
									<img
										alt="fightingIcon"
										src={
											upRight
										}
									/>
								</li>
								<li class="list-group-item">
									TARGET
									COMBO 1
								</li>
								<li class="list-group-item">
									[PRESS
									IN ORDER
									- CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									-
									<img
										alt="fightingIcon"
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
									RYUUENBU
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KACHOUSEN
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HISSATSU
									SHINOBI-BACHI
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MUSASABI
									NO MAI -
									FRONT
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											upRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MUSASABI
									NO MAI -
									BACK
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											upLeft
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											up
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MUSASABI
									NO MAI
									(AIR)
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									CHOU
									HISSATSU
									SHINOI-BACHI
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AIR CHOU
									HISSATSU
									SHINOI-BACHI
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KAGEROU
									NO MAI
									[MAX]
									[MAX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									SHIRANUI-RYUU
									OUGI
									KUZUNOHA
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									SHIRANUI
									GORIN
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FUUSHA
									KUZUSHI
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									YUME-ZAKURA{" "}
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									M-9
									MAXIMA
									MISSILE
									(PROTOTYPE)
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									M-4
									VAPOR
									CANNON
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									AIR M-4
									VAPOR
									CANNON
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									M-19
									BLITZ
									CANNON
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MAXIMA
									PRESS
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MAXIMA
									PRESS
									(FOLLOW
									UP)
								</li>
								<li class="list-group-item">
									[MAXIMA
									PRESS]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MAXIMA
									CHARGE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									DOUBLE
									VAPOR
									CANNON
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									M-24
									ATOMIC
									LASER
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									MX-III
									CIWS
									LAUNCHER
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									DYNAMITE
									DROP
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DROP
									BOMB
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									NEZOU
									RANGEKI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									CHINZANKOU
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									MAKURA
									NAGE
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SEN-SISS
									HOU [EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SEN-SISS
									HOU
									(FOLLOW
									UP)
								</li>
								<li class="list-group-item">
									[SEN-SISS
									HOU]
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GEKI HOU
									[EX]
								</li>
								<li class="list-group-item">
									[CHARGE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											up
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RESSEN
									KYAKU
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									CHOU
									GEKI HOU
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HAKUCHUU
									MUSOU
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									SEIKAKU
									MEITENGYOBU
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									FEINT
									MAKURA
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									MAKURA
									BOMB
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									JET
									UPPER
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>

								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									RALF
									KICK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									RALF
									KICK
									(FEINT)
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RALF
									IMPACT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DYNAMITE
									RALF
									PUNCH
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									VULCAN
									PUNCH
									[EX]
								</li>
								<li class="list-group-item">
									[REPEATEDLY]
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GATLING
									ATTACK
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DIVE
									BOMBER
									PUNCH
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									GALATICA
									PHANTOM
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BAREBACK
									VULCAN
									PUNCH
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									RALF
									SUPER
									PHALANX
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									+
									<img
										alt="fightingIcon"
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
									DYNAMITE
									HEAD
									BUTTON
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HEAD
									STRIKE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									SANKAKU-TOBI
								</li>
								<li class="list-group-item">
									[IN AIR
									NEAR
									CORNER]
									<img
										alt="fightingIcon"
										src={
											upRight
										}
									/>
								</li>
								<li class="list-group-item">
									DROP
									KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HEAD
									BUTT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 1
								</li>
								<li class="list-group-item">
									[HEAD
									BUTT]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 2
								</li>
								<li class="list-group-item">
									[HEAD
									BUTT]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									TIGER
									NECK
									CHANCERY
									[EX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ROLLING
									SOBAT
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FLYING
									BODY
									ATTACK
								</li>
								<li class="list-group-item">
									[ROLLING
									SOBAT]
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 1
								</li>
								<li class="list-group-item">
									[FLYING
									BODY
									ATTACK]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 2
								</li>
								<li class="list-group-item">
									[FLYING
									BODY
									ATTACK]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SOMERSAULT
									[EX]
								</li>
								<li class="list-group-item">
									[SOMERSAULT]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									TIGER
									LOAD
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FEINT
									DASH
								</li>
								<li class="list-group-item">
									[TIGER
									LOAD]
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									FEINT
									JUMP
								</li>
								<li class="list-group-item">
									[TIGER
									LOAD]
									<img
										alt="fightingIcon"
										src={
											upRight
										}
									/>
								</li>
								<li class="list-group-item">
									CROSS
									CHOP
								</li>
								<li class="list-group-item">
									[TIGER
									LOAD]
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FORCE OF
									WILL
								</li>
								<li class="list-group-item">
									[TIGER
									LOAD]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 1
								</li>
								<li class="list-group-item">
									[FORCE
									OF WILL]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 2
								</li>
								<li class="list-group-item">
									[FORCE
									OF WILL]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									BIRD OF
									PARADISE
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 1
								</li>
								<li class="list-group-item">
									[BIRD OF
									PARADISE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									HOIST 2
								</li>
								<li class="list-group-item">
									[BIRD OF
									PARADISE]
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									<img
										alt="fightingIcon"
										src={
											down
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FEINT
									STEP
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									[HOLD
									OK]
								</li>

								<li class="list-group-item text-center">
									Super
									Special
									Moves
								</li>
								<li class="list-group-item">
									TIGER
									SPIN
									[MAX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									EL·DIABLO·AMRAILLLO·RAMON·VOLANDO
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									HYPER
									SONIC·RAMON
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									ARM WHIP
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									FLYING
									MARE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									RYUU
									HANSHUU
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									KOURYUU
									KOUKYAKU-GERI
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									RYUU-GEKI
									KEN [EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RYUUGA
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HIEN
									SENPUU
									KYAKU
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HIEN
									RYUUJIN
									KYAKU
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									GEN-EI
									KYAKU
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>{" "}
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									RYUUREN·GEN-EI
									KYAKU
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									HAOH
									SHOUKON
									KEN
									[MAX]
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>

								<li class="list-group-item">
									RYUUKO
									RANBU
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									MU-EI
									SENPUU
									RYUU
									ZANSHOU
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									RYUUCHOU
									KYAKU
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									KUBIKIRI
									NAGE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							CHECK BACK LATER
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
							CHECK BACK LATER
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
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									-
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									WHIP
									SHOT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									[UP TO 5
									INPUTS]
								</li>
								<li class="list-group-item">
									TALON
									SHOT
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											downRight
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item text-center">
									Special
									Moves
								</li>
								<li class="list-group-item">
									BOOMERANG
									SHOT
									"CODE:SC"
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STRENGTH
									SHOT
									TYPE A
									"CODE:
									SUPERIOR"
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									STRENGTH
									SHOT
									TYPE A
									"CODE:
									CANDY"
									[EX]
								</li>
								<li class="list-group-item">
									[STRENGTH
									SHOT
									TYPE A
									"CODE:
									SUPERIOR"]
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STRENGTH
									SHOT
									TYPE B
									"CODE:
									STRENGTH"
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
								</li>
								<li class="list-group-item">
									STRENGTH
									SHOT
									TYPE B
									"CODE:
									CANDY"
									[EX]
								</li>
								<li class="list-group-item">
									[STRENGTH
									SHOT
									TYPE B
									"CODE:
									STRENGTH"]
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									STRENGTH
									SHOT
									TYPE C
									"CODE:
									VICTORY"
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleBack
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
									[HOLD
									OK]
								</li>
								<li class="list-group-item">
									STRENGTH
									SHOT
									TYPE C
									"CODE:
									CANDY"
									[EX]
								</li>
								<li class="list-group-item">
									[STRENGTH
									SHOT
									TYPE C
									"CODE:
									VICTORY"]
									<img
										alt="fightingIcon"
										src={
											kickHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HOOK
									SHOT
									"CODE:
									ZEPHYR"
									[EX]
								</li>
								<li class="list-group-item">
									[IN AIR]
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>{" "}
								<li class="list-group-item">
									CRESCENT
									SWATTER
									"CODE:FS"
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									SONIC
									SLAUGHTER
									"CODE:KW"
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									DESTRUCTION
									BARRAGE
									"CODE:
									YGW"
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									DEPRAVITY
									BRANDING
									"CODE:FA"
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									STRIKE
									THREE
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									ASSASSIN
									TRAP
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
							<ul class="list-group">
								<li class="list-group-item text-center">
									Command
									Moves
								</li>
								<li class="list-group-item">
									REGRET
									BASH
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
								</li>
								<li class="list-group-item">
									STEP
									SIDE
									KICK
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
									MISSILE
									MIGHT
									BASH
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									UPPER
									DUEL
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											shory
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									JET
									COUNTER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									JET
									COUNTER
									STILL
								</li>
								<li class="list-group-item">
									[JET
									COUNTER]
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									SLEDGEHAMMER
									[EX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>
									or
									<img
										alt="fightingIcon"
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
									FINAL
									IMPACT
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								[HOLD OK]
								<li class="list-group-item">
									VARIABLE
									BASH
									STREAM
									[MAX]
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											hadoken
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											kickLow
										}
									/>{" "}
									or
									<img
										alt="fightingIcon"
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
									ULTIMATE
									BILLION
									BASH
								</li>
								<li class="list-group-item">
									<img
										alt="fightingIcon"
										src={
											reverseHadoken
										}
									/>
									<img
										alt="fightingIcon"
										src={
											halfCircleFoward
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>{" "}
									<img
										alt="fightingIcon"
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
									LIVER
									BLOW
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
										src={
											punchHigh
										}
									/>
								</li>
								<li class="list-group-item">
									HATCHET
									THROW
								</li>
								<li class="list-group-item">
									[CLOSE
									BY]
									<img
										alt="fightingIcon"
										src={
											left
										}
									/>
									or
									<img
										alt="fightingIcon"
										src={
											right
										}
									/>
									+
									<img
										alt="fightingIcon"
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
