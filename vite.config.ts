import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import aliasPlugin from './config/alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), aliasPlugin()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
