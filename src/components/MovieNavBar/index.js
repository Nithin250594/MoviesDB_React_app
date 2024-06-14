import {Link, useLocation, useHistory} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const MenuItemLinks = {
  home: '/',
  topRated: '/top-rated',
  upcoming: '/upcoming',
}

const MovieNavBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const location = useLocation()

  const activePopularLink =
    MenuItemLinks.home === location.pathname ? 'active-link-style' : null

  const activeTopRatedLink =
    MenuItemLinks.topRated === location.pathname ? 'active-link-style' : null

  const activeUpcomingLink =
    MenuItemLinks.upcoming === location.pathname ? 'active-link-style' : null

  const history = useHistory()

  const onClickSearch = () => {
    if (searchInput !== '') {
      history.replace(`/movies/search/${searchInput}`)
    }
  }

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  return (
    <nav className="nav-bar">
      <Link to="/" className="movie-db-logo-link">
        <h1 className="movie-logo">movieDB</h1>
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movie"
          className="search-bar"
          value={searchInput}
          onChange={onChangeSearch}
        />
        <button type="button" className="search-button" onClick={onClickSearch}>
          Search
        </button>
      </div>

      <ul className="navigate-links">
        <Link to="/" className={`popular-link ${activePopularLink}`}>
          Popular
        </Link>
        <Link to="/top-rated" className={`popular-link ${activeTopRatedLink}`}>
          Top Rated
        </Link>
        <Link to="/upcoming" className={`popular-link ${activeUpcomingLink}`}>
          Upcoming
        </Link>
      </ul>
    </nav>
  )
}

export default MovieNavBar
