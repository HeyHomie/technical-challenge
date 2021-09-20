import React from 'react';
import './not-found.css';

const NotFound: React.FC = () => {
  return (
    <section className="not-found">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
        alt="image not found"
      />
      <h1>Whoops Not Found</h1>
      <a href="/yknx4">Back Home</a>
    </section>
  );
};

export default NotFound;
