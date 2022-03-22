import React from "react";
import payPal from "../assets/paypal.png";

const Footer = () => {
	return (
		<div class="container">
			<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div class="col-md-4 d-flex align-items-center">
					<a
						href="/"
						class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
					></a>
					<span class="text-muted">
						© 2022 Jason Day
					</span>
				</div>

				<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li class="ms-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
						</svg>
					</li>
					<li class="ms-3">
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
								src={payPal}
								border="0"
								name="submit"
								title="PayPal - The safer, easier way to pay online!"
								alt="Donate with PayPal button"
								width="40"
								height="40"
							/>
							<img
								alt="paypal"
								border="0"
								src="https://www.paypal.com/en_US/i/scr/pixel.gif"
								width="1"
								height="1"
							/>
						</form>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
