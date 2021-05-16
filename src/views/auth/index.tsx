import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { ProvideAuth } from './ProvideAuth'
import { PrivateRoute } from './ProviteRoute'
import { useAuth } from './useAuth'

const PublicPage = () => <div>Public</div>

const ProtectedPage = () => <div>Protected</div>

const AuthButton = () => {
  const history = useHistory()
  const auth = useAuth()

  return auth.user ? (
    <p>
      Welcome!
      <button onClick={() => auth.signout?.(() => history.push('/'))}>
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}

export const AuthExample = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to='/public'>Public Page</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path='/public'>
              <PublicPage />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <PrivateRoute path='/protected'>
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  )
}
