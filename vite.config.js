import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1100,
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress eval warning from three-stdlib/lottie (third-party dependency)
        if (warning.code === 'EVAL') return
        warn(warning)
      },
      output: {
        // Split vendors to reduce main bundle and improve caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', 'three-stdlib', '@react-three/fiber', '@react-three/drei'],
          'vendor-gsap': ['gsap', '@gsap/react'],
        },
      },
    },
  },
})
