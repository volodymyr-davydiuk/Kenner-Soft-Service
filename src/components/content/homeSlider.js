import React from 'react';
import GetWindowWidth from '../shared/helpers/GetWindowWidth';
import { Carousel } from 'react-responsive-carousel';
import "../../assets/images/SliderImage1.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';

const HomeSlider = ({ sliderImages }) => {
	if(!sliderImages?.length) return false;
	const windowWidth = GetWindowWidth();
	const isMobile = windowWidth <= 600;

	return (
		<div className={"slider-block"}>
			{!isMobile ?
				<Carousel
					showThumbs={true}
					autoPlay={true}
					infiniteLoop={true}
					showIndicators={false}
					showArrows={true}
					showStatus={false}
					stopOnHover={false}
					// dynamicHeight={true}
					interval={4000}
				>
					{sliderImages.map((sliderItem, index) => {
						return (
							<div key={ `slide-item-${ index }` } className={"img-wrap"}>
								<img src={ sliderItem?.img }
										 alt={ sliderItem?.alt ?? `slide-${ index + 1 }` }/>
							</div>
						)
					} )
					}
				</Carousel> :
				<Carousel
					showThumbs={false}
					autoPlay={true}
					infiniteLoop={true}
					showIndicators={false}
					showArrows={true}
					showStatus={false}
					stopOnHover={false}
					dynamicHeight={true}
					swipeable={true}
					interval={4000}
				>
					{sliderImages.map((sliderItem, index) => {
						return (
							<div key={ `slide-mobile-item-${ index }` }>
								<img src={ sliderItem?.img }
										 alt={ sliderItem?.alt ?? `slide-${ index + 1 }` }/>
							</div>
						)
					} )
					}
				</Carousel>
			}
		</div>
	);
};

HomeSlider.propTypes = {
	sliderImages: PropTypes.arrayOf(PropTypes.shape({
		img: PropTypes.string,
		alt: PropTypes.string
	}))
};

export default HomeSlider;