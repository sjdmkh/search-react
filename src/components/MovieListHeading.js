import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieListHeading = (probs) => {
    return (
        <div className='col'>
            <h1> {probs.heading} </h1>
        </div>
    );
};

export default MovieListHeading;