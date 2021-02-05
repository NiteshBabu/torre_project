import React, { useState } from "react";
import "./Container.scss";

import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Caraousel from "./components/carousel/Caraousel";
import Strengths from "./components/strengths/Strengths";
import Interests from "./components/interests/Interest";
import ErrorContainer from "./components/ErrorContainer";
import LoadingIcon from "./components/loading.gif";

function Container() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errText, setErrText] = useState(null);

	return (
		<div>
			<Header />
			<div className='container col-sm-12 col-md-6'>
				<Search
					setUser={setUser}
					setErrText={setErrText}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
				/>
				{errText && <ErrorContainer errText={errText} />}
				{isLoading ? (
					<div className='d-flex loading-wrapper'>
						<img className='loading-icon m-auto' src={LoadingIcon} />
					</div>
				) : (
					user && (
						<>
							<div
								className='col-sm-12 backdrop d-sm-none d-lg-flex'
								style={{
									backgroundImage: user && `url(${user.person.picture})`,
								}}>
								<h4>{user.person.name}</h4>
							</div>
							<Caraousel>
								<Profile {...user} />
								<Strengths strengths={user.strengths} />
								<Interests interests={user.interests} />
							</Caraousel>
						</>
					)
				)}
			</div>
		</div>
	);
}

export default Container;
