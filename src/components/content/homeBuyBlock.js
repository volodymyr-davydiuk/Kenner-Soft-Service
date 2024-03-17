import React from 'react';
import PropTypes from 'prop-types';

const HomeBuyBlock = ({ priceData }) => {
	return (
		<div className="buy-block">
			{ priceData && (
				<div className="price-block">
					{ priceData.map( ( item, index ) => {
						return (
							<div key={ `product-item-${ index }` }>
								<div className={ 'price-wrap' }>
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
									{ item.shortDescription }
								</div>
							</div>
						)
					} ) }
				</div>
			) }
			<div className="buy-buttons">
				<div>
					<input type="number" defaultValue={ 1 }/>
				</div>
				<button className={ "button violet-button" }>
					In den Warenkorb
				</button>
				<button className={ "button green-button" }>
					Konfigurieren
				</button>
			</div>
		</div>
	);
};

HomeBuyBlock.propTypes = {
	priceData: PropTypes.arrayOf(PropTypes.shape({
		price: PropTypes.string,
		discount: PropTypes.string,
		currency: PropTypes.string,
		shortDescription: PropTypes.string
	}))
};

export default HomeBuyBlock;