import syan from '@syan/client-js'

import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const showAlert = () => {
    syan.nativeUI.alert('test')
  }

  const showConfirm = () => {
    syan.nativeUI
      .confirm('test', {
        buttons: ['确定', '222']
      })
      .then((res) => {
        console.log(res)
      })
  }

  const showConfirmWithCustomStyles = () => {
    syan.nativeUI
      .confirm('test', {
        title: '自定义',
        buttons: ['确定', '222']
      })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={showAlert}>
            Show Native Alerts Dialog.
          </a>
          <a target="_blank" rel="noreferrer" onClick={showConfirm}>
            Show Native Confirm Dialog.
          </a>
          <a target="_blank" rel="noreferrer" onClick={showConfirmWithCustomStyles}>
            Show Native Confirm Dialog With Custom Styles.
          </a>
        </div>
      </div>
    </>
  )
}

export default App
