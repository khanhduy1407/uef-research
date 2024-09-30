import { defineConfig } from 'lahm'
import basicSsl from '@lahmjs/plugin-basic-ssl'
import react from '@lahmjs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  build: {
    minify: true,
    cssMinify: true
  }
})
