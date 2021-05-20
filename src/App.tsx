import classes from './App.module.scss'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { About, Home, Users } from 'views'
import { Topics } from 'views/topics'
import { AuthExample } from 'views/auth'
import { ModalGallery } from 'views/modal-gallery'
import { MouseEventHandler, useEffect } from 'react'
import { setTheme, currentTheme } from 'styles/themes'
import { useQuery } from 'react-query'

function App() {
  const onThemeChange: MouseEventHandler = () => {
    if (currentTheme === 'default') setTheme('dark')
    else setTheme('default')
  }

  useEffect(() => {
    setTheme('default', true)
  }, [])

  const { isLoading, error, data } = useQuery('repoData', () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(
            'https://api.github.com/repos/tannerlinsley/react-query'
          ).then((res) => res.json())
        )
      }, 3000)
    })
  })

  if (isLoading) {
    return (
      <div className='animate-bounce flex justify-center items-center h-screen'>
        Loading
      </div>
    )
  }
  if (error) {
    return <div className='animate-ping'>Error:{error}</div>
  }

  return (
    <div
      className={`${classes.App} container transition-colors theme-text-color theme-bg-color duration-300 bg-logo`}
      data-name='xxx'
    >
      <button onClick={onThemeChange} className='animate-bounce'>
        更换主题
      </button>
      <div className='flex space-x-2 justify-center animate-pulse transition-transform transform hover:skew-y-12'>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200 hover:ring-4 hover:ring-offset-4 hover:ring-inset transition-shadow'></span>
      </div>
      <div className={`${classes['App-logo']} flex`}>
        <p className='flex-grow bg-gradient-to-r from-red-500 via-yellow-700 transform hover:skew-y-12 transition-transform'>
          logo
        </p>
      </div>
      <div className={`aspect-w-9 aspect-h-9`}>
        <p>
          文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章
        </p>
      </div>
      <Router>
        <div className={`relative top-[100px]`}>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/users'>Users</Link>
              </li>
              <li>
                <Link to='/topics'>Topics</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <AuthExample />
        <ModalGallery />
      </Router>
    </div>
  )
}

App.whyDidYouRender = true

export default App
