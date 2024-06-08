import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MovieNavBar from '../MovieNavBar'
import MoviePoster from '../MoviePoster'
import './index.css'

const SearchedMovies = () => {
  const [moviesList, setMoviesList] = useState([])
  const search = useParams()

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
    const searchDataApi = `https://api.themoviedb.org/3/search/movie?api_key=819fed71625699e4528f2e4ed98137c9&language=en-US&query=${search}&page=1`
    const options = {
      method: 'GET',
    }

    const fetchSearchedData = async () => {
      try {
        const response = await fetch(searchDataApi, options)
        const searchedData = await response.json()
        console.log(searchedData)
        if (response.ok) {
          updatedMovieData(searchedData)
        }
      } catch (error) {
        console.error('Error during API call:', error)
      }
    }
    fetchSearchedData()
  }, [search])

  return (
    <div className="bg-color">
      <MovieNavBar />
      <h1 className="popular-movie-heading">Searched movies</h1>
      <ul className="movies-list">
        {moviesList.map(eachMovieData => (
          <MoviePoster movieDetails={eachMovieData} />
        ))}
      </ul>
    </div>
  )
}

export default SearchedMovies
