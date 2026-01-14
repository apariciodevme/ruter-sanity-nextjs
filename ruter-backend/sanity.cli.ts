import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'e6e2wm3q',
    dataset: 'production'
  },
  deployment: {
    appId: 'vvlpmbd1mdx4wm09414ts1c0',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
