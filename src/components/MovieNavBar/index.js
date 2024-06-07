import {Link, useLocation} from 'react-router-dom'

import './index.css'

const MenuItemLinks = {
  home: '/',
  topRated: '/top-rated',
  upcoming: '/upcoming',
}

const MovieNavBar = () => {
  const location = useLocation()

  const activePopularLink =
    MenuItemLinks.home === location.pathname ? 'active-link-style' : null

  const activeTopRatedLink =
    MenuItemLinks.topRated === location.pathname ? 'active-link-style' : null

  const activeUpcomingLink =
    MenuItemLinks.upcoming === location.pathname ? 'active-link-style' : null

  return (
    <nav className="nav-bar">
      <h1 className="movie-logo">movieDB</h1>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search Movie"
          className="search-bar"
        />
        <button type="button" className="search-button">
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
