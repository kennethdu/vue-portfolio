// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {

  //  api.chainWebpack((config, {
  //    isServer
  //  }) => {
  //    if (isServer) {
  //      config.externals([
  //        nodeExternals({
  //          whitelist: [/^vuetify/],
  //        }),
  //      ])
  //    }
  //  }),

  api.loadSource(async store => {
    const { data } = await axios.get('https://my-json-server.typicode.com/kennethdu/test-json-server/projects')

    const contentType = store.addContentType({ typeName: 'projects', route: '/projects/:id' })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        path: '/projects/' + item.id,
        fields: {
          description: item.description,
          tech: item.tech,
          github: item.github,
          imgURL: item.imgURL
        }
      })
    }
  })
  api.loadSource(async store => {
    const { data } = await axios.get('https://my-json-server.typicode.com/kennethdu/test-json-server/tech')
        
    const contentType = store.addContentType({ typeName: 'tech' })
    
    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        fields: {
          type: item.type
        }
      })
    }
  })
  api.loadSource(async store => {
    const { data } = await axios.get('https://my-json-server.typicode.com/kennethdu/test-json-server/hobbies')

    const contentType = store.addContentType({ typeName: 'hobbies' })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        fields: {
          description: item.description
        }
      })
    }
  })
  // api.loadSource(async store => {
  //   const { data } = await axios.get('https://my-json-server.typicode.com/kennethdu/test-json-server/homeContent')
  
  //   const contentType = store.addContentType({ typeName: 'content' })
  
  //   console.log("Home Content:" + data);
  
  //   for (const item of data) {
  //     contentType.addNode({
  //       id: item.id,
  //       title: item.title,
  //       fields: {
  //         description: item.description
  //       }
  //     })
  //   }
  // })
}

