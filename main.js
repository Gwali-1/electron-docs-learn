const {app, BrowserWindow,ipcMain} = require("electron");
const nodepath = require("node:path");


let window;

const onMac = process.platform === "darwin";

function createMainRenderWindow(){
    window = new BrowserWindow({
        title:"Picture Viewer",
        height:500,
        width:600,
        webPreferences:{
            preload: nodepath.join(__dirname,"preload.js"),
        }
    });


    // ipcMain.handle("waguan",function(){ 
    //     return "mi dey pon ";
    // })

    window.loadFile(nodepath.join(__dirname,"index.html"));
    window.webContents.openDevTools();
}





app.whenReady().then(() => {
    createMainRenderWindow();
});





app.on("window-all-closed",function(){
    if(!onMac){
        app.quit()
    }
});


app.on("activate",function(){
    if(BrowserWindow.getAllWindows().length === 0) createMainRenderWindow()
});