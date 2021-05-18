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
    if (currentTheme === 'default') setTheme('blue')
    else setTheme('default')
  }

  return (
    <div
      className={`${classes.App} transition-colors theme-text-color theme-bg-color transition-duration-300`}
      data-name='xxx'
    >
      <button onClick={onThemeChange}>更换主题</button>
      <div className={classes['App-logo']}>logo</div>
      <Router>
        <div>
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
