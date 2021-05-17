import alias from '@rollup/plugin-alias'
import path from 'path'

// TODO 写一个自动脚本
const rootPath = path.resolve(__dirname)

export default () => {
  return alias({
    entries: [
      {
        find: 'views',
        replacement: path.resolve(rootPath, '../src/views'),
      },
      {
        find: 'styles',
        replacement: path.resolve(rootPath, '../src/styles'),
      },
    ],
  })
}
