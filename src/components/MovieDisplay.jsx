import React from 'react'

const MovieDisplay = ( {movie} ) => {

    // conditional rendering.
    const loaded = () => {
        return (
          <div>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <h3>Rated: {movie.Rated}</h3>
            <img src={movie.Poster} />
            <h2>{movie.Year}</h2>
            <p>{movie.Plot}</p>
          </div>
        )
    }

    const loading = () => {
        return (
            <h1>No movie to display</h1>
        )
    }

    // ternary operator to render conditionally
    //  movie if empty string will 
    return movie ? loaded() : loading()
}

export default MovieDisplay
