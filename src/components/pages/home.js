import React from 'react';
import Layout from '../shared/Layout';
import '../../assets/styles/pages/home.scss';
import HomeSlider from '../content/homeSlider';
import SlideImg1 from '../../assets/images/SliderImage1.jpg'
import SlideImg2 from '../../assets/images/SliderImage2.jpg'
import SlideImg3 from '../../assets/images/SliderImage3.jpg'
import SlideImg4 from '../../assets/images/SliderImage4.jpg'
import SlideImg5 from '../../assets/images/SliderImage5.jpg'

const Home = () => {
	const title = 'Business Gaming V2 PC | AMD Ryzen 5 4500 | GTX 1050 Ti 4GB | 16GB RAM | 1000GB M.2 SSD | WildRabbit Aero RGB | Win 11 | WiFi | Libre Open Office';

	const gallery = [
		{
			img: SlideImg1,
			alt: "Slide 1"
		},
		{
			img: SlideImg2,
			alt: "Slide 2"
		},
		{
			img: SlideImg3,
			alt: "Slide 3"
		},
		{
			img: SlideImg4,
			alt: "Slide 4"
		},
		{
			img: SlideImg5,
			alt: "Slide 5"
		},
	];

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
								<li>
									Intel Core i3-10105 4x 3.70-4.40GHz
								</li>
								<li>
									Mainboard Markenname Bezeichnung XXXX
								</li>
								<li>
									Grafikkarte GPU Takt
								</li>
								<li>
									Arbeitsspeicher XXGB RAM
								</li>
								<li>
									Festplatte No.1 XGB SSD
								</li>
								<li>
									Festplatte No.2 XGB SSD
								</li>
								<li>
									Festplatte XGB HHD refurbished
								</li>
								<li>
									DVD Writer Marke XXX
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;