import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

function GifExpertApp({ defaultcategories = [] }) {
  const [categories, setCategories] = useState(defaultcategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
