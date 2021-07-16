import React from 'react';
import Card from './Card';

const icons = [
  {
    name: 'fab fa-html5',
    color: '#fff',
  },
  {
    name: 'fab fa-css3',
    color: '#fff',
  },
  {
    name: 'fab fa-react',
    color: '#fff',
  },
  {
    name: 'fab fa-node-js',
    color: '#fff',
  },
  {
    name: 'fab fa-python',
    color: '#fff',
  },
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
