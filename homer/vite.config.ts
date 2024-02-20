import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /**
   * If you are deploying to https://<USERNAME>.github.io/<REPO>/
   * (eg. your repository is at https://github.com/<USERNAME>/<REPO>),
   * then set base to '/<REPO>/'.
   * https://vitejs.dev/guide/static-deploy#github-pages
   */
  base: '/my-vite-app/',
})