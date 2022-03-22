import React from "react";
import logo from "../assets/punchCircle.png";
const Header = () => {
	return (
		<div className="header container">
			{/* NAVBAR*/}
			<nav class="navbar navbar-dark bg-dark mb-2 ">
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
