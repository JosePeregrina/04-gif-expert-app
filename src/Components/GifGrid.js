import React from 'react';
import PropTypes from 'prop-types'
import { useFetchGifts } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid({ category }) {

  const {data: images, loading} = useFetchGifts( category );

  return (
    <>
      <h3>{category}</h3>
      {
        loading && <p>Loading...</p>
      }
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;


GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}