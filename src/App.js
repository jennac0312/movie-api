import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';

function App() {

  const API_KEY = "98e3fb1f" //from demo class notes w8d3
  const [movie, setMovie] = useState(null)

  // async/await function to fetch movie data (to get movies)
  const getMovie = async(searchTerm) => {

    // make and store fetch request response
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`) //back ticks bc template literals(aka string interpolation)

    // parsing and storing response as json object
    const data = await response.json()

    // movie state will now hold data object
    setMovie(data)
  }

  // 
  useEffect(() => {
    getMovie('clueless')
  }, [])

  return (
    <div className="App">
      <h1>MOVIE FETCH</h1>
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
