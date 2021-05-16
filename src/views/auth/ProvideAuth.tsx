import { PropsWithChildren } from 'react'
import { authContext, useProvideAuth } from './useAuth'

export const ProvideAuth = ({ children }: PropsWithChildren<{}>) => {
  const auth = useProvideAuth()

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
