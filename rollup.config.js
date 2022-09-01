export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/dist.js',
      format: 'cjs'
    },
    {
      file: './dist/dist.umd.js',
      format: 'umd',
      name: 'EasyFunction'
    },
    {
      file: './dist/dist.es.js',
      format: 'es'
    }
  ]
}
