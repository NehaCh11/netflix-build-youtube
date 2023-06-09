import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log('Error fetching movies:', error);
        setMovies([]); // Set an empty array in case of error
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies &&
          movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row__poster${isLargeRow ? ' row__posterLarge' : ''}`}
                  key={movie.id}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                />
              )
          )}
      </div>
    </div>
  );
}

export default Row;
