
module.exports = {
    siteName: 'Gridsome',
    plugins: [
    //   {
    //     use: '@gridsome/source-filesystem',
    //     options: {
    //       typeName: 'BlogPost',
    //       path: './content/blog/**/*.md'
    //     }
    //   },
      {
        use: '@gridsome/source-strapi',
        options: {
          apiURL: 'http://localhost:1337',
          queryLimit: 1000, // Defaults to 100
          contentTypes: ['post', 'tag'], // StrapiPost
  
        }
      }
    ],
    templates: {
      // StrapiPost为上面Plugin中配置的typeName和contentTypes的组合
      StrapiPost: [
        {
          path: '/post/:id',
          component: './src/templates/Post.vue'
        }
      ],
      StrapiTag: [
        {
          path: '/tag/:id',
          component: './src/templates/Tag.vue'
        }
      ]
    }
  }
  
  