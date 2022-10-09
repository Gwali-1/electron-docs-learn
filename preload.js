const {contextBridge,ipcRenderer} = require("electron");


contextBridge.exposeInMainWorld("version",{
    node: () => process.versions.node ,
    electron: () => process.versions.electron,
    malbot : [2,4,6],

})

contextBridge.exposeInMainWorld("say",{
    waguan: (name) => {
        return ipcRenderer.invoke("waguan");
    }
})