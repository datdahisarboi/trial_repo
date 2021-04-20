// contains synchronous functions only


let fs = require('fs');     // imports module
let data = fs.readFileSync("abc.txt");  // creates an object that contains data of abc.txt
console.log(data.toString()); // object data is in buffer form , use the function to make it readable 

let w_data = "write that data";     // just some data (to be written)
let written = fs.writeFileSync("ideas.txt", w_data);    // writes data to a file
fs.appendFileSync("ideas.txt" , " append this data");   // appends data to a file 
fs.writeFileSync("new_file.js" , "this file was created using the fs.writeFileSync function. It will soon be deleted ")       // creates a new file (creating this just so that we can delete it in the next line)
console.log("just created a new file named new_file.js      the next line will delete it");
fs.unlinkSync('F://code//pepcoding//javascript_0//new_file.js'); // will delete a file
console.log("file deleted");

var content_array = fs.readdirSync('F://code//pepcoding//javascript_0');        // returns an array of strings (contents of the dir)
console.log(content_array);

fs.mkdirSync("To_be_deleted");
console.log("Folder created , will be deleted by the next line");
var content_array = fs.readdirSync('F://code//pepcoding//javascript_0'); 

console.log(content_array);
fs.rmdirSync("To_be_deleted");                     // deletes a directory // wont delete a directory contining stuff 

console.log("Folder deleted");
var content_array = fs.readdirSync('F://code//pepcoding//javascript_0'); 
console.log(content_array);

console.log(fs.existsSync('F://code//pepcoding//javascript_0'));    // checks if a file exists at a certain path --> only 1 parameter ie. path



