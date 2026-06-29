import esbuild from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outfile: 'dist/index.js',
  jsx: 'automatic',
  platform: 'browser',
  format: 'esm',
  target: 'es2020',
  minify: true,
  sourcemap: false,
  plugins: [],
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.css': 'css',
    '.json': 'json',
  },
}).catch(() => process.exit(1))
