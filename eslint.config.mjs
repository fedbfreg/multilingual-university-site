import { globalIgnores } from 'eslint/config'
import { eslintPresets } from '@lark-apaas/coding-presets-react'

export default [
  globalIgnores(['dist', '**/components/ui/**']),
  ...eslintPresets.client,
]
