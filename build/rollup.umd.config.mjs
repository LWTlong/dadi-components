import basicConfig, { file, name } from './rollup.config.mjs'
import vue from 'rollup-plugin-vue'

basicConfig.plugins.push(vue({ css: false, template: { optimizeSSR: true } }))

export default {
  ...basicConfig,
  output: {
    // name: 'DadiComponents',
    name,
    file: file('umd'),
    format: 'umd',
    // globals: {
    //   'vue': 'Vue',
    //   'lodash-es': '_'
    // },
    // exports: 'named'
  }
}
