import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
	return (
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
						FRAME DATA
					</a>
				</li>
				<li className="flex-sm-fill text-sm-center nav-link">
					<a
						href="#blog"
						onClick={() =>
							handlePageChange("Blog")
						}
						// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
						className={
							currentPage === "Blog"
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
			</ul>
		</div>
	);
}

export default NavTabs;
