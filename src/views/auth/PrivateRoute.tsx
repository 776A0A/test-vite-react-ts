import { PropsWithChildren } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { useAuth } from './useAuth'

export const PrivateRoute = ({
  children,
  ...rest
}: PropsWithChildren<RouteProps>) => {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: 'login',
              state: { from: location }, // TIP 传入当前路由，用于登陆后跳回
            }}
          />
        )
      }
    ></Route>
  )
}
