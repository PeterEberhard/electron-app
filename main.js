const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('path');

const isMac = process.platform === 'darwin';

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'electron-app',
    width: 1000,
    height: 700,
    resizable: false
  })

  //mainWindow.loadURL("https://www.youtube.com/watch?v=ML743nrkMHw")
  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

app.whenReady().then(() => {
  createMainWindow()

  // mac behavior
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// non mac behavior
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})