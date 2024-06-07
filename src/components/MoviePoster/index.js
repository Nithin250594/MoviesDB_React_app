import './index.css'

const MoviePoster = props => {
  const {movieDetails} = props
  const {movieId, movieImage, movieName, rating} = movieDetails

  return (
    <li key={movieId} className="movie-list-item">
      <div className="movie-poster-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieImage}`}
          alt={movieName}
          className="movie-image"
        />
        <h1 className="movie-name"> {movieName}</h1>
        <p className="movie-rating">
          Rating: <span className="rating-number">{rating}</span>
        </p>
        <button type="button" className="view-details-btn">
          View Details
        </button>
      </div>
    </li>
  )
}

export default MoviePoster
