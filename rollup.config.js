import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
const isProduction = !process.env.ROLLUP_WATCH

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  resolve(),
  builtins(),
  postcss({
    extensions: [ '.css' ]
  }),
  json()
]

export default {
  plugins,
  input: 'src/renderer.js',
  output: {
    file: './renderer.js',
    format: 'iife',
    name: 'HackjobWebsite',
    sourcemap: true,
    intro: 'const global = window;'
  }
}