import alias from '@rollup/plugin-alias'
import path from 'path'

const rootPath = path.resolve(__dirname)

export default () => {
  return alias({
    entries: [
      {
        find: 'views',
        replacement: path.resolve(rootPath, '../src/views'),
      },
    ],
  })
}
