import extension from 'webextension-polyfill'
async function openAppPage() {
  const tabs = await extension.tabs.query({})

  const index = extension.runtime.getURL('index.html')
  const tab = tabs.find((tab) => tab.url?.startsWith(index))
  if (tab) {
    await extension.tabs.update(tab.id, { active: true })
    return
  }

  await extension.tabs.create({ url: 'index.html' })
}

extension.action.onClicked.addListener(() => {
  openAppPage()
})
