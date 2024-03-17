import React from 'react';
import IcomoonIcon from '../shared/icomoonIcon';

const HomeInfoButtons = () => {
	const handleFavoriteClick = () => {
		//There will be favorite logic
		console.log( "Added to favorite" );
	}

	const handleCopyClick = () => {
		//There will be copy logic
		console.log( "Copied" );
	}

	const handlePrintClick = () => {
		//There will be Print logic
		console.log( "Print" );
	}

	return (
		<div className="info-buttons-group">
			<button className="info-button" onClick={() => handleFavoriteClick()}>
				<IcomoonIcon icon={ 'heard' } size={ 16 } alt={ 'Favorite' }/>
				Favoriten
			</button>
			<button className="info-button" onClick={() => handleCopyClick()}>
				<IcomoonIcon icon={ 'link' } size={ 16 } alt={ 'Copy' }/>
				Kopieren
			</button>
			<button className="info-button" onClick={() => handlePrintClick()}>
				<IcomoonIcon icon={ 'document' } size={ 16 } alt={ 'Print' }/>
				Drucken
			</button>
		</div>
	);
};

export default HomeInfoButtons;