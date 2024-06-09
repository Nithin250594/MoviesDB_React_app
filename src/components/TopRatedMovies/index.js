import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import MovieNavBar from '../MovieNavBar'
import MoviePoster from '../MoviePoster'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inprogress: 'INPROGRESS',
  failure: 'FAILURE',
}

const TopRatedMovies = () => {
  const [moviesList, setMoviesList] = useState([])
  const [fetchApiStatus, setFetchApiStatus] = useState(apiStatus.initial)

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
    setFetchApiStatus(apiStatus.inprogress)
    const popularApi =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=819fed71625699e4528f2e4ed98137c9&language=en-US&page=1'
    const options = {
      method: 'GET',
    }
    const fetchData = async () => {
      try {
        const response = await fetch(popularApi, options)
        const data = await response.json()
        if (response.ok) {
          setFetchApiStatus(apiStatus.success)
          updatedMovieData(data)
        }
      } catch (error) {
        console.error('Error during API call:', error)
      }
    }
    fetchData()
  }, [])

  const loadingPage = () => (
    <div className="loader-style">
      <Loader type="ThreeDots" color="#3b82f6" height="80" width="80" />
    </div>
  )

  const successPage = () => (
    <>
      <h1 className="popular-movie-heading">Top Rated</h1>
      <ul className="movies-list">
        {moviesList.map(eachMovieData => (
          <MoviePoster movieDetails={eachMovieData} />
        ))}
      </ul>
    </>
  )

  const switchCase = () => {
    switch (fetchApiStatus) {
      case apiStatus.inprogress:
        return loadingPage()
      case apiStatus.success:
        return successPage()
      default:
        return null
    }
  }

  return (
    <div className="bg-color">
      <MovieNavBar />
      {switchCase()}
    </div>
  )
}

export default TopRatedMovies
