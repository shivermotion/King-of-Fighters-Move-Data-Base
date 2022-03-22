import React from "react";
import logo from "../assets/fightFist_circle.png";
import payPal from "../assets/paypal.png";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
	return (
		<div>
			<div
				class="offcanvas offcanvas-start"
				tabindex="-1"
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
			>
				<div class="offcanvas-header">
					<img
						alt="fightingIcon"
						src={logo}
						width="40"
						height="40"
						class="d-inline-block"
					/>{" "}
					<button
						type="button"
						class="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
					<div class="text-center">-MENU-</div>
					<div className="container">
						<ul className="nav nav-pills flex-column flex-sm-row">
							<li className="flex-sm-fill text-sm-center nav-link ">
								<a
									href="#fighters"
									onClick={() =>
										handlePageChange(
											"Fighters"
										)
									}
									// This is a conditional (ternary) operator that checks to see if the current page is "Home"
									// If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
									className={
										currentPage ===
										"Fighters"
											? "nav-link active"
											: "nav-link"
									}
								>
									FIGHTERS
								</a>
							</li>
							<li className="flex-sm-fill text-sm-center nav-link">
								<a
									href="#framedata"
									onClick={() =>
										handlePageChange(
											"FrameData"
										)
									}
									// Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
									className={
										currentPage ===
										"FrameData"
											? "nav-link active"
											: "nav-link"
									}
								>
									FRAME
									DATA
								</a>
							</li>
							<li className="flex-sm-fill text-sm-center nav-link">
								<a
									href="#blog"
									onClick={() =>
										handlePageChange(
											"Blog"
										)
									}
									// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
									className={
										currentPage ===
										"Blog"
											? "nav-link active"
											: "nav-link"
									}
								>
									BLOG
								</a>
							</li>
							<li className="flex-sm-fill text-sm-center nav-link">
								<a
									href="#twitter"
									onClick={() =>
										handlePageChange(
											"Twitter"
										)
									}
									// Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
									className={
										currentPage ===
										"Twitter"
											? "nav-link active"
											: "nav-link"
									}
								>
									TWITTER
								</a>
							</li>

							{/* PAYPAL BUTTON*/}
							<li className="flex-sm-fill text-sm-center nav-link">
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
										src={
											payPal
										}
										border="0"
										name="submit"
										title="PayPal - The safer, easier way to pay online!"
										alt="Donate with PayPal button"
										width="80"
										height="80"
									/>
									<img
										alt="paypal"
										border="0"
										src="https://www.paypal.com/en_US/i/scr/pixel.gif"
										width="1"
										height="1"
									/>
								</form>
								<p>
									send a
									tip
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavTabs;
