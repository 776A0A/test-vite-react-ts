import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { Location } from 'history'
import { ImageView } from './ImageView'
import { Gallery } from './Gallery'
import { Modal } from './Modal'

export const ModalGallery = () => {
  const location = useLocation<{ background: Location }>()

  const background = location.state && location.state.background

  return (
    <div>
      {/* TIP 根据不同的状态设置location，会使用该location来匹配子组件 */}
      <Switch location={background || location}>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/img/:id'>
          <ImageView />
        </Route>
      </Switch>
      {background && (
        <Route path='/img/:id'>
          <Modal />
        </Route>
      )}
    </div>
  )
}

const Home = () => (
  <div>
    <Link to='/gallery'>Visit the Gallery</Link>
    <h2>Featured Images</h2>
    <ul>
      <li>
        <Link to='/img/2'>Tomato</Link>
      </li>
      <li>
        <Link to='/img/4'>Crimson</Link>
      </li>
    </ul>
  </div>
)

export const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' },
]
