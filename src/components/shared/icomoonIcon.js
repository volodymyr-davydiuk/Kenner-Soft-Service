import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../assets/icons/selection.json';

const IcomoonIcon = ({ className, color, icon, size, alt }) => (
	<IcomoonReact iconSet={iconSet} className={className} color={color} size={size} icon={icon} alt={alt || 'icon'} />
);

export default IcomoonIcon;