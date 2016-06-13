import {readFileSync, writeFileSync} from 'fs'
import {dirname} from 'path'
import mkdirp from 'mkdirp'
import stylus from 'stylus'
import autoprefixer from 'autoprefixer-stylus'
import koutoSwiss from 'kouto-swiss'
import sanitizeStyl from 'sanitize.styl'
import typographic from 'typographic'
import rupture from 'rupture'
import jeet from 'jeet'

const entry = 'src/index.styl'
const outfile = 'release/index.css'
const stylusPaths = [`${__dirname}/src`]

const isProduction = process.env.NODE_ENV === 'production'

const data = readFileSync(entry, 'utf8')
const options = {
  filename: entry,
  compress: isProduction,
  sourcemap: {inline: true}
}

stylus(data, options)
.set('paths', stylusPaths)
.use(autoprefixer())
.use(koutoSwiss())
.use(sanitizeStyl())
.use(typographic())
.use(rupture())
.use(jeet())
.render((error, css) => {
  if (error) {
    throw error
  }

  mkdirp(dirname(outfile))
  writeFileSync(outfile, css)
  console.log(`rendered ${outfile}`)
})
