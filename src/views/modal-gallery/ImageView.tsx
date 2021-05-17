import { useParams } from 'react-router-dom'
import { IMAGES } from '.'

export const ImageView = () => {
  const { id } = useParams<{ id: string }>()
  const image = IMAGES[parseInt(id, 10)]

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

export const Image = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
        background: color,
      }}
    />
  )
}
