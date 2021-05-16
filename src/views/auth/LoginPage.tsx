import { useHistory, useLocation } from 'react-router'
import { useAuth } from './useAuth'

export const LoginPage = () => {
  const history = useHistory()
  const location = useLocation<{ from: { pathname: string } } | undefined>()
  const auth = useAuth()

  const { from } = location.state || { from: { pathname: '/' } }

  const login = () => {
    auth.signin?.(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}
