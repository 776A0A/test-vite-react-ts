import { createContext, useContext, useState } from 'react'

const fakeAuth = {
  isAuth: false,
  signin: (cb: () => void) => {
    fakeAuth.isAuth = true
    setTimeout(() => {
      cb()
    }, 100)
  },
  signout: (cb: () => void) => {
    fakeAuth.isAuth = false
    setTimeout(() => {
      cb()
    }, 100)
  },
}

type AuthContext = ReturnType<typeof useProvideAuth> | null

export const authContext = createContext<AuthContext>(null)

export const useAuth = () => useContext(authContext)

// TIP 对useAuth再做一层包装
export const useProvideAuth = () => {
  const [user, setUser] = useState<string | null>(null)

  const signin = (cb: () => void) => {
    return fakeAuth.signin(() => {
      setUser('user')
      cb()
    })
  }

  const signout = (cb: () => void) => {
    return fakeAuth.signout(() => {
      setUser(null)
      cb()
    })
  }

  return { user, signin, signout }
}
