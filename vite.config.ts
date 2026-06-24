import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ks/', // ⚠️ Certifique-se de que o nome aqui seja exatamente o nome do seu repositório no GitHub
})
