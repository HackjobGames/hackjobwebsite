const json = require('@rollup/plugin-json')
const postcss = require('rollup-plugin-postcss')
const commonjs = require('rollup-plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { babel } = require('@rollup/plugin-babel')
const copy = require('rollup-plugin-copy')
const typescript = require('@rollup/plugin-typescript')
const replace = require('@rollup/plugin-replace')

const isProduction = !process.env.ROLLUP_WATCH

const plugins = [
  commonjs({
    namedExports: {
      'react': ['isValidElement', 'Children', 'cloneElement', 'useRef', 'useEffect', 'useState','memo',
      'Fragment', 'createElement', 'forwardRef', 'createRef', 'useMemo', 'createContext', 'findDOMNode',
      'useCallback', 'useImperativeHandle', 'useContext', 'useLayoutEffect', 'Component', 'useDebugValue', 'useReducer'],
      'react-dom': ['findDOMNode', 'createPortal', 'render', 'unmountComponentAtNode'],
      'prop-types': ['elementType'],
      'react-js': ['isValidElementType', 'isValidElement', 'isFragment'],
      'react-is': ['ForwardRef', 'Memo', 'isFragment', 'isValidElementType'],
      'react-router-dom': ['BrowserRouter', 'Switch', 'Route'],
      'react/jsx-runtime': ['jsx', 'jsxs']

    }
  }),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: true,
    declarationDir: 'dist',
  }),
  babel({ 
    exclude: 'node_modules/**',
    presets: ['@babel/preset-react', '@babel/env'],
    babelHelpers: "bundled"
  }),
  postcss({
    extensions: [ '.css', 'scss' ]
  }),
  copy({
    targets: [
      { src: 'src/client/index.html', dest: 'dist/client' },
      { src: 'src/client/index.css', dest: 'dist/client' },
      { src: 'src/client/extensions/*', dest: 'dist/client/extensions' },
      { src: 'src/client/resources/*', dest: 'dist/client/resources' }
    ]
  }),
  json(),
  nodeResolve(),
  replace({
    'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
    preventAssignment: true
  })
]

module.exports = {
  plugins,
  input: './src/client/index.tsx',
  output: {
    file: `./dist/client/index.js`,
    format: 'cjs',
    name: 'Template',
    sourcemap: true,
    intro: 'const global = window;'
  },
}

