import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'

export const LoginPage = () => {
  const history = useHistory()
  const location = useLocation<{ from: Location } | undefined>()
  const auth = useAuth()

  const { from } = location.state || { from: { pathname: '/' } } // TIP 拿到可能存在的state

  const login = () => {
    auth?.signin(() => {
      history.replace(from) // TIP 使用replace
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}
