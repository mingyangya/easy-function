import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import babel from '@rollup/plugin-babel';

// export default [
//   // ES module
//   {
//     input: 'src/index.js',
//     output: {
//       file: pkg.main,
//       format: 'es',
//       exports: 'named'
//     },
//     plugins: [
//       resolve(), // so Rollup can find `ms`
//       // @see https://www.rollupjs.com/tools/#rollupplugin-node-resolve
//       // babel({ babelHelpers: 'bundled' })
//       commonjs() // so Rollup can convert `ms` to an ES module
//     ]
//   },
//   {
//     input: 'src/index.js',
//     output: [
//       // CommonJS (for Node)
//       {
//         file: pkg.cjs,
//         format: 'cjs',
//         // exports: 'named'
//       },
//       // browser-friendly UMD build
//       {
//         name: pkg.name,
//         file: pkg.browser,
//         format: 'umd',
//         globals: {
//           'easy-function': 'easyFunction'
//         }
//       }
//     ],
//     plugins: [
//       resolve(), // so Rollup can find `ms`
//       babel({ babelHelpers: 'bundled' }),
//       commonjs() // so Rollup can convert `ms` to an ES module
//     ]
//   }
// ]

// rollup.config.js
import { defineConfig } from 'rollup';

export default defineConfig([
    // ES module
    {
      input: 'src/index.js',
      output: {
        file: pkg.main,
        format: 'es',
        exports: 'named'
      },
      plugins: [
        resolve(), // so Rollup can find `ms`
        // @see https://www.rollupjs.com/tools/#rollupplugin-node-resolve
        // babel({ babelHelpers: 'bundled' })
        commonjs() // so Rollup can convert `ms` to an ES module
      ]
    },
    {
      input: 'src/index.js',
      output: [
        // CommonJS (for Node)
        {
          file: pkg.cjs,
          format: 'cjs',
          // exports: 'named'
        },
        // browser-friendly UMD build
        {
          name: pkg.name,
          file: pkg.browser,
          format: 'umd',
          globals: {
            'easy-function': 'easyFunction'
          }
        }
      ],
      plugins: [
        resolve(), // so Rollup can find `ms`
        babel({ babelHelpers: 'bundled' }),
        commonjs() // so Rollup can convert `ms` to an ES module
      ]
    }
  ])
