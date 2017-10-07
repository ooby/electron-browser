const app = require('app');
const BrowserWindow = require('browser-window');

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const java = require('java');
  const javaLangSystem = java.import('java.lang.System');
  let version = javaLangSystem.getPropertySync('java.version');
  let ipc = require('electron').ipcMain;
  ipc.on('invokeAction', (event, data) => {
    event.sender.send('actionReply', version);
  });
  mainWindow = new BrowserWindow({ width: 1030, height: 720, frame: false });
  mainWindow.loadUrl('file://' + require('path').join(__dirname, 'browser.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
