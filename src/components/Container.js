import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Fighters from "../pages/Fighters";
import FrameData from "../pages/FrameData";
import Blog from "../pages/Blog";
import Twitter from "../pages/Twitter";
import Footer from "./Footer";
import Header from "./Header";

export default function Container() {
	const [currentPage, setCurrentPage] = useState("Fighters");

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === "Fighters") {
			return <Fighters />;
		}
		if (currentPage === "FrameData") {
			return <FrameData />;
		}
		if (currentPage === "Blog") {
			return <Blog />;
		}
		return <Twitter />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			{/* We are passing the currentPage from state and the function to update it */}
			<Header />
			<NavTabs
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{/* Here we are calling the renderPage method which will return a component  */}
			{renderPage()}
			<Footer />
		</div>
	);
}
