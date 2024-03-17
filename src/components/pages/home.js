import React from 'react';
import Layout from '../shared/Layout';
import '../../assets/styles/pages/home.scss';
import HomeSlider from '../content/homeSlider';
import PropTypes from 'prop-types';
import HomeTabs from '../content/homeTabs';
import HomeInfoButtons from '../content/homeInfoButtons';
import HomeBuyBlock from '../content/homeBuyBlock';

const Home = ({ title, descriptionList, gallery, priceData }) => {
	return (
		<Layout>
			<div className="wrapper">
				<div className="top-section">
					<div className="col left-col">
						<HomeSlider sliderImages={gallery}/>
					</div>
					<div className="col right-col">
						<div className="top-block">
							<h1 className={"title"}>
								{title}
							</h1>
							<ul className="description-list">
								{descriptionList.map((row, index) => (
									<li key={`description-item-${index}`}>
										{row}
									</li>
								))}
							</ul>
						</div>
						<div className="bottom-block">
							<HomeInfoButtons/>
							<HomeBuyBlock priceData={priceData}/>
						</div>
					</div>
				</div>
				<HomeTabs/>
			</div>
		</Layout>
	);
};

Home.propTypes = {
	title: PropTypes.string,
	descriptionList: PropTypes.arrayOf(PropTypes.string),
	gallery: PropTypes.arrayOf(PropTypes.shape({
		img: PropTypes.string,
		alt: PropTypes.string
	})),
	priceData: PropTypes.arrayOf(PropTypes.shape({
		price: PropTypes.string,
		discount: PropTypes.string,
		currency: PropTypes.string,
		shortDescription: PropTypes.string
	}))
};

export default Home;