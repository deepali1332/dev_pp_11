let fs = require("fs");
let extensionsMapping = require("./util.js");

let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);
//console.log(extensionsMapping);
//for(let i = 0; i < allFiles.length; i++){
//  sortFile (allFiles[i]);
//}
sortFile (allFiles[0]);

function getExtension(file){

}
function checkExtensionFolder(extension){
    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
        let extensions = extensionsMapping[key];
        if(extensions.includes(extension)){
            extensionFolderName = extensionFolderName +"/"+key;
           //extensionFolderName = key;
            break;
        }
    }
    //let folderToBeChecked = testFolderPath + "/"+ extensionFolderName;
    
    //return fs.existsSync(folderToBeChecked);
    return fs.existsSync(extensionFolderName);
}
function moveFile(file, extension){

}
function createExtensionFolderFolder(extension){
    
}
function sortFile(file){
    let extension = getExtension(file);
    let isFolder = checkExtensionFolder(extension);
    if(isFolder){
        console.log(File +"Extension Folder Exists !!!")
    }
    else{
        console.log(File + "Extension Folder does't Exists !!!");
    }
}