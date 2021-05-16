import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/index'

import classes from './Header.module.css'

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch(authActions)

  const logoutUser = () => {
    dispatch(authActions.logout())
  }

  const loginUser = () => {
    dispatch(authActions.login())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {isAuthenticated && <button onClick={logoutUser}>Logout</button>}
            {!isAuthenticated && <button onClick={loginUser}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
