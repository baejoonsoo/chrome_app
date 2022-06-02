// import { app, BrowserWindow } from 'electron';
const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 900,
    height: 900,
  });
  window.loadFile('index.html');

  const template = [
    {
      label: 'simpleApp',
      submenu: [
        {
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          role: 'quit',
        },
      ],
    },
    {
      label: 'dev',
      submenu: [
        {
          label: 'new Background',
          click: () => {
            window.webContents.executeJavaScript(`
            getBackground();
          `);
          },
        },
        {
          type: 'separator',
        },
        {
          label: 'reset preferences',
          click: () => {
            window.webContents.executeJavaScript(`
              localStorage.clear();
              window.location.reload();
            `);
          },
        },
      ],
    },
  ];

  const customMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(customMenu);
};

app.whenReady().then(() => {
  createWindow();
});
