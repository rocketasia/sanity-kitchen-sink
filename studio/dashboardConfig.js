export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63133f791b29b1098eb25017',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ibmmwd82',
                  apiId: '531ed411-172e-4ee5-a443-0838584c7c9d'
                },
                {
                  buildHookId: '63133f7ac38f740970439e2a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-m9bq1q86',
                  apiId: '5047b0a1-53b4-427f-85ed-3fde540664c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rocketasia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-m9bq1q86.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
