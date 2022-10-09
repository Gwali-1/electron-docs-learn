const information = document.querySelector(".info");


information.textContent = `
node version: ${window.version.node()}
electron version: ${window.version.electron()}
garbae: ${window.version.malbot},
`


async function response (){
    try{
        const reply = await window.say.waguan("bob");
        console.log(reply)
        information.textContent = reply;
    
    }catch(err){
        console.log(err);
    }
   
}

