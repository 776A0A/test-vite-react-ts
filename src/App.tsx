import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { About, Home, Users } from 'views'

function App() {
  const [count, setCount] = useState(0)

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
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
