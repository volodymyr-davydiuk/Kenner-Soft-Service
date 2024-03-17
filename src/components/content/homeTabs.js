import React, { useEffect, useState } from 'react';

const HomeTabs = () => {
	const [tabsData, setTabsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeButton, setActiveButton] = useState('');

	// let filteredTabData = tabsData.filter((item, index) => (index >= (Math.floor(Math.random() * tabsData.length))));
	// filteredTabData.length = 5;



	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
				const result = await response.json();
				const sortResult = result.filter((item, index) => (index <= (Math.floor(Math.random() * result.length))))
				console.log( "sort: "+sortResult[0].id );
				console.log( "active: "+activeButton );
				setTabsData(sortResult.slice(-5));
				setActiveButton(sortResult.slice(-5)[0].id)
				setLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className={"tab-block"}>
					<div className={ "tab-buttons-wrap" }>
						{ tabsData
							.map( ( item ) =>  {
								return (
									<button
										key={`tab-button-${ item.id }`}
										className={`tab-button ${activeButton === item.id ? "active" : ''}`}
										onClick={() => setActiveButton(item.id)}
									>
										{ item.name }
									</button>
								)
							} ) }
					</div>
					{tabsData
						.filter((item) => (activeButton === item.id))
						.map((item) => {
							return (
								<div className={"tab-info"} key={ `table-${ item.id }` }>
									<div className={ "tab-row" }>
										<p>Name</p>
										<p>{ item.name }</p>
									</div>
									<div className={ "tab-row" }>
										<p>Language</p>
										<p>{ item.language }</p>
									</div>
									<div className="tab-row">
										<p>ID</p>
										<p>{item.id}</p>
									</div>
									<div className="tab-row">
										<p>Bio</p>
										<p>{item.bio}</p>
									</div>
									<div className="tab-row">
										<p>Version</p>
										<p>{item.version}</p>
									</div>
								</div>
							)
						} )
					}
				</div>
			) }
		</div>
	);
};

export default HomeTabs;