import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2';
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"

const name = 'dadi-components'
const file = type => `dist/${name}.${type}.js`

export {name, file}
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    excludeDependenciesFromBundle({ peerDependencies: true, dependencies: false }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {declaration: true},
        exclude: ['node_modules', "tests/**/*.ts", "tests/**/*.tsx"]
      }
    }),
    css({output: 'bundle.css'}),
  ],
  external: ['vue']
}
