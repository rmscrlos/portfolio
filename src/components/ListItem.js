import React from 'react';
import Card from './Card';

const icons = [
	{
		name: 'html5',
		color: '#fff'
	},
	{
		name: 'css3',
		color: '#fff'
	},
	{
		name: 'react',
		color: '#fff'
	},
	{
		name: 'node-js',
		color: '#fff'
	},
	{
		name: 'python',
		color: '#fff'
	}
];

function ListItem() {
	return (
		<div className="list__container">
			{icons.map(icon => (
				<Card name={icon.name} color={icon.color} />
			))}
		</div>
	);
}

export default ListItem;
