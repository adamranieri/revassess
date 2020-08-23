import { app, BrowserWindow, ipcMain } from 'electron';
import {AssessmentSummary, JUnitSuite} from './utils/models'
import {parse} from './utils/maven-test-parser'
const util = require('util');
const exec = util.promisify(require('child_process').exec);

import axios from 'axios';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;


if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


const createWindow = () => {

  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences:{
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
};
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("rev-assess", async (event,name:string)=>{
    const summary:AssessmentSummary = new AssessmentSummary(name);
    await runMvnTests();

    const testSummary1:JUnitSuite = await parse('C:\\Users\\Administrator\\Desktop\\Library\\target\\surefire-reports\\TEST-com.revature.suitetests.BookSuiteTests.xml');
    summary.junitSuites.push(testSummary1);

    await sendTestResults(summary);
    event.reply('test-results',summary);
  });

async function sendTestResults(summary:AssessmentSummary){

    try {
      console.log(await axios.put('http://localhost:7777/assessments',summary));
    } catch (error) {
      console.log(error)
    }

}


async function runMvnTests(){
  try{
    const { stdout, stderr } = await exec('C:\\Users\\Administrator\\Desktop\\RevAssess\\scripts\\runtests');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr)
  }catch(error){
    console.log(error);
  }
 
  
}