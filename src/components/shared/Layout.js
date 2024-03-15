import React from 'react';
import '../../assets/styles/main.scss';

const Layout = ({ children }) => {
	return (
		<div className={"app-container"}>
			<main role="main" className={"app-content-main"}>
				{ children }
			</main>
		</div>
	);
};

export default Layout;