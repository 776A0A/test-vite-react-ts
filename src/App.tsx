import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { About, Home, Users } from 'views'
import { Topics } from 'views/topics'
import { AuthExample } from 'views/auth'
import { ModalGallery } from 'views/modal-gallery'

function App() {
  return (
    <div className='App'>
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

        {/* <Switch>
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
        </Switch> */}

        <AuthExample />
        <ModalGallery />
      </Router>
    </div>
  )
}

export default App
