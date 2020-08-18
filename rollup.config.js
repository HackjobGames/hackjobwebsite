import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import cProps from '@babel/plugin-syntax-class-properties'
const isProduction = !process.env.ROLLUP_WATCH

const plugins = [
  babel({ 
    exclude: 'node_modules/**',
    presets: ['@babel/preset-react', '@babel/env']
  }),
  resolve(),
  postcss({
    extensions: [ '.css' ]
  }),
  json(),
  commonjs({
    namedExports: {
      'react-js': ['isValidElementType']
    }
  })
]

if(isProduction){
  plugins.push(replace({
    'http://localhost:3000': 'https://hackjob.games/backendServer',
    'process.env.NODE_ENV': JSON.stringify('production')
  }))
}
else {
  plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify('development')
  }))
}
export default {
  plugins,
  input: 'src/index.js',
  output: {
    file: `./dist/client.js`,
    format: 'iife',
    name: 'HackjobWebsite',
    sourcemap: true,
    intro: 'const global = window;'
  }
}