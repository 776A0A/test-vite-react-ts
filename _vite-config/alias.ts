import alias from '@rollup/plugin-alias'
import path from 'path'
import fs from 'fs'

const rootPath = path.resolve(__dirname)

export default () => {
  return alias({
    entries: [...generateAlias()],
  })
}

function generateAlias() {
  const items = fs.readdirSync(path.resolve(rootPath, '../src'), {
    withFileTypes: true,
  })

  const folders = items
    .filter((item) => item.isDirectory())
    .map((item) => item.name)

  return folders.map((folderName) => ({
    find: folderName,
    replacement: path.resolve(rootPath, `../src/${folderName}`),
  }))
}
