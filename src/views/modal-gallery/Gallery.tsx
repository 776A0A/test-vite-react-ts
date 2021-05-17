import { Link, useLocation } from 'react-router-dom'
import { IMAGES } from '.'
import { Thumbnail } from './Thumbnail'

export const Gallery = () => {
  const location = useLocation()

  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          // TIP 如果是点击的gallery中的图片，则会给state传参数
          to={{ pathname: `/img/${i.id}`, state: { background: location } }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  )
}
