import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import aliasPlugin from './_vite-config/alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), aliasPlugin()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  base: process.env.NODE_ENV === 'development' ? '/' : './',
})
