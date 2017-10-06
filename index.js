var app  = require('app')
var BrowserWindow = require('browser-window')

var mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  var java = require('java')
  var javaLangSystem = java.import('java.lang.System')
  var version = javaLangSystem.getPropertySync("java.version")
  var ipc = require('electron').ipcMain  
  ipc.on('invokeAction', function(event, data){
  	event.sender.send('actionReply', version)
  })
  mainWindow = new BrowserWindow({ width: 1030, height: 720, frame: false })
  mainWindow.loadUrl('file://' + require('path').join(__dirname, 'browser.html'))
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
