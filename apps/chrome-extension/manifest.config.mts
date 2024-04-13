import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest(async () => {
  return {
    manifest_version: 3,
    name: 'SYan Chat',
    description: '与多个 AI 一起对话',
    version: '1.45.7',
    icons: {
      '16': 'resources/icon.png',
      '32': 'resources/icon.png',
      '48': 'resources/icon.png',
      '128': 'resources/icon.png'
    },
    background: {
      service_worker: 'src/background/index.ts',
      type: 'module'
    },
    action: {},
    host_permissions: [
      'https://*.bing.com/',
      'https://*.openai.com/',
      'https://bard.google.com/',
      'https://*.anthropic.com/',
      'https://*.claude.ai/'
    ],
    optional_host_permissions: ['https://*/*', 'wss://*/*'],
    permissions: [
      'storage',
      'unlimitedStorage',
      'sidePanel',
      'declarativeNetRequestWithHostAccess',
      'scripting'
    ],
    commands: {
      'open-app': {
        suggested_key: {
          default: 'Alt+J',
          windows: 'Alt+J',
          linux: 'Alt+J',
          mac: 'Command+J',
        },
        description: 'Open SYan App',
      },
    },
    side_panel: {
      default_path: 'sidepanel.html'
    }
  }
})
