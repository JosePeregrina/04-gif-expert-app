import React from 'react';
import PropTypes from 'prop-types';

function GifGridItem({ title, url }) {
  return (
    <div className='card animate__animated animate__fadeIn animate__slow'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifGridItem;

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
