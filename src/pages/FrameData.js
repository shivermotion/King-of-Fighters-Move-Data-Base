import React from "react";
import eyes from "../assets/anime.png";
import discord from "../assets/discord.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";

export default function FrameData() {
	return (
		<div class="container ">
			<div class="row">
				<div class="col-6 col-sm-6 text-center mb-1">
					<div class="card">
						<img
							src={eyes}
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<p class="card-text">
								Some quick
								example text to
								build on the
								card title and
								make up the bulk
								of the card's
								content.
							</p>
						</div>
					</div>
				</div>
				<div class="col-6 col-sm-6 text-center">
					<div class="card">
						<img
							src={discord}
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<p class="card-text">
								Some quick
								example text to
								build on the
								card title and
								make up the bulk
								of the card's
								content.
							</p>
						</div>
					</div>
				</div>

				<div class="w-100 d-none d-md-block"></div>

				<div class="col-6 col-sm-6 text-center">
					<div class="card">
						<img
							src={twitter}
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<p class="card-text">
								Some quick
								example text to
								build on the
								card title and
								make up the bulk
								of the card's
								content.
							</p>
						</div>
					</div>
				</div>
				<div class="col-6 col-sm-6 text-center">
					<div class="card">
						<img
							src={youtube}
							class="card-img-top"
							alt="..."
						/>
						<div class="card-body">
							<p class="card-text">
								Some quick
								example text to
								build on the
								card title and
								make up the bulk
								of the card's
								content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
