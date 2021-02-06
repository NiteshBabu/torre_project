import React, { useState } from "react";
import "./Container.scss";

import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Caraousel from "./components/carousel/Caraousel";
import Badges from "./components/badges/Badges";
import ErrorContainer from "./components/ErrorContainer";
import SideInfo from "./components/side-info/SideInfo";
import LoadingIcon from "./components/loading/LodingIcon";
import Footer from "./components/footer/Footer";
import Card from "./components/Card";
import Jobs from "./components/jobs/Jobs";
import Languages from "./components/languages/Languages";

function Container() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errText, setErrText] = useState(null);

	return (
		<>
			<Header />
			<div className='row container'>
				<Search
					setUser={setUser}
					setErrText={setErrText}
					setIsLoading={setIsLoading}
				/>
				{errText && <ErrorContainer errText={errText} />}
				{isLoading ? (
					<LoadingIcon />
				) : (
					user && (
						<>
							<SideInfo person={user.person} />
							<Caraousel>
								<Card>
									<Profile {...user} />
								</Card>
									<Card>
										<Badges
											title='Strengths'
											bgColor='bg-secondary'
											type={user.strengths}
										/>
										<Badges
											title='Interests'
											bgColor='bg-dark'
											type={user.interests}
										/>
									</Card>
									<Card>
										<Jobs jobs={user.jobs} />
									</Card>
									<Card>
										<Languages languages={user.languages} />
									</Card>
							</Caraousel>
						</>
					)
				)}
			</div>
			<Footer />
		</>
	);
}

export default Container;
