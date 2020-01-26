import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
const isProduction = !process.env.ROLLUP_WATCH

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  resolve(),
  postcss({
    extensions: [ '.css' ]
  }),
  json(),
  babel({ 
    exclude: 'node_modules/**',
    presets: ['@babel/env', '@babel/preset-react']
  }),
  commonjs({
    namedExports: {
      'react-js': ['isValidElementType'],
    }
  }),
]

export default {
  plugins,
  input: 'src/index.js',
  output: {
    file: './renderer.js',
    format: 'iife',
    name: 'HackjobWebsite',
    sourcemap: true,
    intro: 'const global = window;'
  }
}