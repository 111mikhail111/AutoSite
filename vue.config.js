module.exports = {
  pages: {
    'index': {
      entry: './src/pages/first/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    },
    'second': {
      entry: './src/pages/second/main.js',
      template: 'public/second.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'second']
    },
    'help' : {
      entry: './src/pages/help/main.js',
      template: 'public/help.html',
      title: 'Help',
      chunks: [ 'chunk-vendors', 'chunk-common', 'help']
    }
  }
}