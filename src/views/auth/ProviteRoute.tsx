import { PropsWithChildren } from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from './useAuth'

export const PrivateRoute = ({
  children,
  ...rest
}: PropsWithChildren<{
  [key: string]: any
}>) => {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: 'login',
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  )
}
