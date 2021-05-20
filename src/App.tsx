import classes from './App.module.scss'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { About, Home, Users } from 'views'
import { Topics } from 'views/topics'
import { AuthExample } from 'views/auth'
import { ModalGallery } from 'views/modal-gallery'
import { MouseEventHandler } from 'react'
import { setTheme, currentTheme } from 'styles/themes'

function App() {
  setTheme('default', true)

  const onThemeChange: MouseEventHandler = () => {
    if (currentTheme === 'default') setTheme('dark')
    else setTheme('default')
  }

  return (
    <div
      className={`${classes.App} container transition-colors theme-text-color theme-bg-color transition-duration-300 bg-logo`}
      data-name='xxx'
    >
      <button onClick={onThemeChange}>更换主题</button>
      <div className='flex space-x-2'>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
        <span className='block w-16 h-16 bg-blue-200'></span>
      </div>
      <div className={classes['App-logo']}>logo</div>
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

export default App
