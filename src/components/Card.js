import React from 'react';
import Icon from '@material-ui/core/Icon';

function Card({ name, color }) {
  return (
    <div className="card__container">
      <Icon className={`fab fa-${name}`} style={{ color, fontSize: 30 }} />
    </div>
  );
}

export default Card;
