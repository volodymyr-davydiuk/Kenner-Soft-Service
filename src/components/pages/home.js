import React from 'react';
import Layout from '../shared/Layout';
import '../../assets/styles/pages/home.scss';
import HomeSlider from '../content/homeSlider';
import PropTypes from 'prop-types';

const Home = ({ title, descriptionList, gallery }) => {
	return (
		<Layout>
			<div className="wrapper">
				<div className="top-section">
					<div className="col left-col">
						<HomeSlider sliderImage={gallery}/>
					</div>
					<div className="col right-col">
						<div className="top-block">
							<h1 className={"title"}>
								{title}
							</h1>
							<ul className="list">
								{descriptionList.map((row, index) => (
									<li key={`description-item-${index}`}>
										{row}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

Home.propTypes = {
	title: PropTypes.string,
	descriptionList: PropTypes.array,
	gallery: PropTypes.array
}

export default Home;