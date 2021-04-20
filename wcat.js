let fs = require("fs");
let input = process.argv.slice(2);
console.log(input);
let options = [];
let filePaths = [];
for(let i = 0 ; i < input.length ; i++){
    if(input[i] == "-s" || input[i] == "-b" || input[i] == "-n"){
        options.push(input[i]); }
    else {
        filePaths.push(input[i]);
    }
    }
//inputs handles options , filePaths arrays have been populated

console.log(options);
console.log(filePaths);
for(let i = 0 ; i < filePaths.length ; i ++ ){
    let isFilePresent = fs.existsSync(filePaths[i]);
    if(isFilePresent == false){
        console.log("filepath" , filePaths[i] , "does not exist");
        return;
    } 
}
// checks if the files passed to us exist or not and terminate the function if those files do not exist. 

let totalContent = "";
for(let i = 0 ; i < Array.length ; i++){
    let currContent = fs.readFileSync(filePaths[0]);
    totalContent += currContent + "\r\n";
}
// console.log(totalContent);
// implements
let isSoption = options.includes("-s");
if(isSoption == true){
    // identify the empty line breaks 
    let contentArr = totalContent.split("\r\n");
    // remove the empty line breaks
    let tempArr = [];
    for(let i = 0 ; i < contentArr.length ; i++){
        if(contentArr[i] !== ""){
            tempArr.push(contentArr[i]);
        }
    }
    totalContent = tempArr.join("\r\n");
}

// -n numbers every line 
let isN = options.includes("-n");   
if(isN == true){
    let count = 1;
    let contentArr = totalContent.split("\r\n");

    // console.log(contentArr);
    for(let i = 0 ; i < contentArr.length; i++){
        contentArr[i] = count +". " + contentArr[i];
        count++;
    }
    totalContent = contentArr.join("\r\n");
}
console.log(totalContent);


