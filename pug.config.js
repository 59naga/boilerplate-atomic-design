import {readFileSync} from 'fs'
import {load as loadYaml} from 'js-yaml'
import _padstart from 'lodash.padstart'

const isDevelopment = process.env.NODE_ENV !== 'production'

// pug-cli esModule unsuported
module.exports = {
  pretty: isDevelopment,
  basedir: 'src',
  atomicDesign: loadYaml(readFileSync('./atomic-design.yml')),
  zeroPadding(number, length, chars) {
    return _padstart(number, length || 2, chars || '0')
  }
}
