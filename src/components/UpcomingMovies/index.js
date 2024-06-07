import {useState, useEffect} from 'react'
import MovieNavBar from '../MovieNavBar'
import MoviePoster from '../MoviePoster'

import './index.css'

const UpcomingMovies = () => {
  const [moviesList, setMoviesList] = useState([])

  const updatedMovieData = data => {
    const moviesDataList = data.results

    const updatedMoviesDataList = moviesDataList.map(eachMovie => ({
      movieId: eachMovie.id,
      movieName: eachMovie.title,
      movieImage: eachMovie.poster_path,
      rating: eachMovie.vote_average,
    }))

    setMoviesList(updatedMoviesDataList)
  }

  useEffect(() => {
    const popularApi =
      'https://api.themoviedb.org/3/movie/upcoming?api_key=819fed71625699e4528f2e4ed98137c9&language=en-US&page=1'
    const options = {
      method: 'GET',
    }
    const fetchData = async () => {
      try {
        const response = await fetch(popularApi, options)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
          updatedMovieData(data)
        }
      } catch (error) {
        console.error('Error during API call:', error)
      }
    }
    fetchData()
  }, [])

  console.log(moviesList)
  return (
    <div className="bg-color">
      <MovieNavBar />
      <h1 className="popular-movie-heading">Upcoming Movies</h1>
      <ul className="movies-list">
        {moviesList.map(eachMovieData => (
          <MoviePoster movieDetails={eachMovieData} />
        ))}
      </ul>
    </div>
  )
}

export default UpcomingMovies
