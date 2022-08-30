const fs = require('fs-extra')
const chalk = require('chalk')
const execa = require('execa')
const { gzipSync } = require('zlib')
const { compress } = require('brotli')

<<<<<<< HEAD
async function run(config, files) {
  await Promise.all([build(config), copy()])
  checkAllSizes(files)
=======
const files = [
  'dist/vuex.esm-browser.js',
  'dist/vuex.esm-browser.prod.js',
  'dist/vuex.esm-bundler.js',
  'dist/vuex.global.js',
  'dist/vuex.global.prod.js',
  'dist/vuex.cjs.js'
]

async function run() {
  await Promise.all([build(), copy()])
  checkAllSizes()
>>>>>>> 01f87f0c3d59d0796a2535719dfa8328d1af390d
}

async function build() {
  await execa('rollup', ['-c', 'rollup.config.js'], { stdio: 'inherit' })
}

async function copy() {
<<<<<<< HEAD
  await fs.copy('src/index.mjs', 'dist/vuex.mjs')
}

function checkAllSizes(files) {
=======
   await fs.copy('src/index.mjs', 'dist/vuex.mjs')
 }

function checkAllSizes() {
>>>>>>> 01f87f0c3d59d0796a2535719dfa8328d1af390d
  console.log()
  files.map((f) => checkSize(f))
  console.log()
}

function checkSize(file) {
  const f = fs.readFileSync(file)
  const minSize = (f.length / 1024).toFixed(2) + 'kb'
  const gzipped = gzipSync(f)
  const gzippedSize = (gzipped.length / 1024).toFixed(2) + 'kb'
  const compressed = compress(f)
  const compressedSize = (compressed.length / 1024).toFixed(2) + 'kb'
  console.log(
    `${chalk.gray(
      chalk.bold(file)
    )} size:${minSize} / gzip:${gzippedSize} / brotli:${compressedSize}`
  )
}

run()
