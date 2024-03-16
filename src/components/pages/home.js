import React from 'react';
import Layout from '../shared/Layout';
import '../../assets/styles/pages/home.scss';
import HomeSlider from '../content/homeSlider';
import PropTypes from 'prop-types';
import IcomoonIcon from '../shared/icomoonIcon';

const Home = ({ title, descriptionList, gallery, priceData }) => {
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
							<ul className="description-list">
								{descriptionList.map((row, index) => (
									<li key={`description-item-${index}`}>
										{row}
									</li>
								))}
							</ul>
						</div>
						<div className="bottom-block">
							<div className="info-buttons-group">
								<button className="info-button">
									<IcomoonIcon icon={'heard'} size={16} alt={'Favorite'}/>
									Favoriten
								</button>
								<button className="info-button">
									<IcomoonIcon icon={'link'} size={16} alt={'Copy'}/>
									Kopieren
								</button>
								<button className="info-button">
									<IcomoonIcon icon={'document'} size={16} alt={'Print'}/>
									Drucken
								</button>
							</div>
							<div className="buy-block">
								{priceData && (
									<div className="price-block">
										{ priceData.map((item, index) => {
											return (
												<div key={ `product-item-${ index }` }>
													<div className={'price-wrap'}>
														{ item.discount && (
															<div className="discount">
																{ item.discount } { item.currency }
															</div>
														) }
														<div className="price">
															{ item.price } { item.currency }
														</div>
													</div>
													<div className="short-description">
														{item.shortDescription}
													</div>
												</div>
											)
										} ) }
									</div>
								) }
								<div className="buy-buttons">
									<div>
										<input type="number" defaultValue={1}/>
									</div>
									<button className={"button violet-button"}>
										In den Warenkorb
									</button>
									<button className={"button green-button"}>
										Konfigurieren
									</button>
								</div>
							</div>
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
	gallery: PropTypes.array,
	priceData: PropTypes.array
}

export default Home;