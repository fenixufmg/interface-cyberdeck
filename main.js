// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");

let mainWindow = null;

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  await mainWindow.loadFile("src/index.html");

  mainWindow.maximize();
}

app.whenReady().then(createWindow);
