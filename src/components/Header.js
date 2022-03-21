import React from "react";
import logo from "../assets/punchCircle.png";
const Header = () => {
	return (
		<div className="header container">
			{/* NAVBAR*/}
			<nav class="navbar navbar-dark bg-dark mb-2">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<img
							alt="fightingIcon"
							src={logo}
							width="40"
							height="40"
							class="d-inline-block"
						/>{" "}
						<span
							class="text-light bg-dark"
							id="navTitle"
						>
							fight companion
						</span>
					</a>

					{/* PAYPAL BUTTON*/}

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
							alt="paypal"
							border="0"
							src="https://www.paypal.com/en_US/i/scr/pixel.gif"
							width="1"
							height="1"
						/>
					</form>

					<button
						class="btn btn-primary"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasExample"
						aria-controls="offcanvasExample"
					>
						MENU{" "}
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Header;
