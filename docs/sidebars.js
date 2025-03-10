module.exports = {
  main: [
    'introduction',
    'quick-start',
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        { type: 'doc', label: 'Foreword', id: 'tutorial/foreword' },
        {
          'Chapter 1': [
            'tutorial/chapter1/prerequisites',
            'tutorial/chapter1/installation',
            'tutorial/chapter1/file-structure',
            'tutorial/chapter1/first-page',
            'tutorial/chapter1/second-page',
            'tutorial/chapter1/layouts',
          ],
        },
        {
          'Chapter 2': [
            'tutorial/chapter2/getting-dynamic',
            'tutorial/chapter2/cells',
            'tutorial/chapter2/side-quest',
            'tutorial/chapter2/routing-params',
          ],
        },
        {
          'Chapter 3': [
            'tutorial/chapter3/forms',
            'tutorial/chapter3/saving-data',
          ],
        },
        {
          'Chapter 4': [
            'tutorial/chapter4/authentication',
            'tutorial/chapter4/deployment',
          ],
        },
        'tutorial/intermission',
        {
          'Chapter 5': [
            'tutorial/chapter5/storybook',
            'tutorial/chapter5/first-story',
            'tutorial/chapter5/testing',
            'tutorial/chapter5/first-test',
          ],
        },
        {
          'Chapter 6': [
            'tutorial/chapter6/the-redwood-way',
            'tutorial/chapter6/multiple-comments',
            'tutorial/chapter6/comments-schema',
            'tutorial/chapter6/comment-form',
          ],
        },
        {
          'Chapter 7': [
            'tutorial/chapter7/rbac',
            'tutorial/chapter7/api-side-currentuser',
          ],
        },
        'tutorial/afterword',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        slug: '/index',
      },
      items: [
        'a11y',
        'app-configuration-redwood-toml',
        'assets-and-files',
        {
          type: 'category',
          label: 'Authentication',
          link: {
            type: 'doc',
            id: 'authentication',
          },
          items: [
            { type: 'doc', id: 'auth/dbauth' },
            { type: 'doc', id: 'auth/auth0' },
            { type: 'doc', id: 'auth/azure' },
            { type: 'doc', id: 'auth/clerk' },
            { type: 'doc', id: 'auth/custom' },
            { type: 'doc', id: 'auth/firebase' },
            { type: 'doc', id: 'auth/gotrue' },
            { type: 'doc', id: 'auth/magic-link' },
            { type: 'doc', id: 'auth/netlify' },
            { type: 'doc', id: 'auth/nhost' },
            { type: 'doc', id: 'auth/okta' },
            { type: 'doc', id: 'auth/supabase' },
            { type: 'doc', id: 'auth/wallet-connect' },
          ],
        },
        'builds',
        'cells',
        'cli-commands',
        'connection-pooling',
        'contributing-overview',
        'contributing-walkthrough',
        'cors',
        'custom-web-index',
        'data-migrations',
        {
          type: 'category',
          label: 'Deployment',
          link: {
            type: 'generated-index',
            title: 'Deployment',
            slug: 'deployment/index',
          },
          items: [
            { type: 'doc', label: 'Introduction', id: 'deploy/introduction' },
            { type: 'doc', label: 'Baremetal', id: 'deploy/baremetal' },
            {
              type: 'doc',
              label: 'AWS via Flightcontrol',
              id: 'deploy/flightcontrol',
            },
            { type: 'doc', label: 'Layer0', id: 'deploy/layer0' },
            { type: 'doc', label: 'Netlify', id: 'deploy/netlify' },
            { type: 'doc', label: 'Render', id: 'deploy/render' },
            {
              type: 'doc',
              label: 'Serverless Framework',
              id: 'deploy/serverless',
            },
            { type: 'doc', label: 'Vercel', id: 'deploy/vercel' },
          ],
        },
        'directives',
        'environment-variables',
        'forms',
        'graphql',
        'local-postgres-setup',
        'logger',
        'mocking-graphql-requests',
        'prerender',
        'project-configuration-dev-test-build',
        'redwoodrecord',
        'router',
        'schema-relations',
        'security',
        'seo-head',
        'serverless-functions',
        'services',
        'storybook',
        'testing',
        'toast-notifications',
        {
          type: 'category',
          label: 'TypeScript',
          link: {
            type: 'generated-index',
            title: 'TypeScript',
            slug: 'typescript/index',
          },
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'typescript/introduction',
            },
            {
              type: 'doc',
              id: 'typescript/generated-types',
            },
            {
              type: 'doc',
              label: 'Utility Types',
              id: 'typescript/utility-types',
            },
            {
              type: 'doc',
              label: 'Strict Mode',
              id: 'typescript/strict-mode',
            },
          ],
        },
        'webhooks',
        'webpack-configuration',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      link: {
        type: 'generated-index',
        title: 'How To',
        slug: '/how-to/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'how-to',
        },
      ],
    },
  ],
}
