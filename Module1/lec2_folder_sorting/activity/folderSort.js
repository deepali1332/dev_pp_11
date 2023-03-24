let fs = require("fs");
let extensionsMapping = require("./util.js");

let testFolderPath = "./Download";
let allFiles = fs.readdirSync(testFolderPath);
console.log(allFiles);
for(let i = 0; i < allFiles.length; i++){
    sortFile (allFiles[i]);
}

//sortFile (allFiles[0]);

function getExtension(file){
    file-file.split(' . ');
    return file[1];

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
function createExtensionFolder(extension){
    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping){
        let extensions = extensionsMapping[key];
        if(extensions.includes(extension)){
            extensionFolderNAme = extensionFolderName +"/"+key;
            break; 
        }
    }
    let isFolderExist = fs.existsSync(extensionFolderName);
    if(!isFolderExist){
        fs.mkdirSync(extensionFolderNAme);
    }
    return extensionFolderName;
}
function moveFile(file, extensionFolderName){
    let sourceFile = testFolderPath +"/"+ file;
    let destinationFile = extensionFolderName + "/" + file;
    fs.copyFileSync(sourceFile, destinationFile);
}
function sortFile(file){
    let extension = getExtension(file);
    let isFolder = checkExtensionFolder(extension);
    moveFile(file, extensionFolderName);
    /*if(isFolder){
        console.log(file +"Extension Folder Exists !!!")
    }
    else{
        console.log(file + "Extension Folder does't Exists !!!");
    }*/
}