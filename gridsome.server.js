// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const {
      data
    } = await axios.get('https://my-json-server.typicode.com/kennethdu/test-json-server/projects')

    console.log(data);

    const contentType = store.addContentType({ typeName: 'projects', route: '/projects/:id' })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        path: '/projects/' + item.id,
        fields: {
          description: item.description,
          tech: item.tech,
          github: item.github
          // links: item.links
        }
      })
    }
  })
}