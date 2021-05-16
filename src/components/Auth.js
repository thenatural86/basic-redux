import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/index'

import classes from './Auth.module.css'

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const dispatch = useDispatch()

  const loginUser = () => {
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginUser}>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
