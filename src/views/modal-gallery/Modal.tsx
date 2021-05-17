import { MouseEventHandler } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IMAGES } from '.'
import { Image } from './ImageView'

export const Modal = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const image = IMAGES[parseInt(id, 10)]

  const goBack: MouseEventHandler = (e) => {
    e.stopPropagation()
    history.goBack()
  }

  return (
    <div
      onClick={goBack}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        className='modal'
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type='button' onClick={goBack}>
          Close
        </button>
      </div>
    </div>
  )
}
