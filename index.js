// Step 1: Create a Vue instance
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

// Step 2: Create a renderer
// const renderer = require('vue-server-renderer').createRenderer()
const createRenderer = require('vue-server-renderer').createRenderer
const renderer = createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

const context = {
  title: 'hello from the server',
  meta: `
    <meta ...>
    <meta ...>
  `
}

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, context, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">hello world</div>
})
