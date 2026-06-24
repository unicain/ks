import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NOME_DO_SEU_REPOSITORIO/', // ⚠️ Substitua pelo nome exato do seu repositório no GitHub
})
