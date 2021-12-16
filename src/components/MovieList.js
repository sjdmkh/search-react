import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (probs) => {
    const FavouriteComponent = probs.favouriteComponent;
    return (
        <>
            {probs.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie' />
                    <div
                        onClick={() => probs.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        <FavouriteComponent/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;