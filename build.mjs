import { build } from 'vite'

try {
  await build({
    configFile: 'vite.config.ts',
    outDir: 'dist',
  })
  console.log('Build succeeded!')
} catch (error) {
  console.error('Build failed:', error)
}
