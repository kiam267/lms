import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/signin': 'http://localhost:8080/api/auth',
      '/main_server': 'http://localhost:8080/api/auth',
      '/users': 'http://localhost:8080/api/admin',
    },
  },
});
