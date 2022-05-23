let fs = require('fs');

fs.writeFile('mycode.txt', 'we are working on node.js', () => {
    console.log('task done');
})     
/* no name function - callback function - iifi {immediately invocable function}

working ---

first it checks if this file exists
if yes, not create new file 
write inside the same files

*/

fs.appendFile('mycode.txt', 'we will be using mongoDb \n', ()=> {
    console.log('text appended');
})

fs.readFile('mycode.txt','utf-8', (err,data)=>{
    if (err) throw err
    console.log(data)
})
// this is to read a file when -- user uploaded a file or username or password or anything 

// fs.rename('mycode.txt', 'mytext.txt', (err)=>{
//     if(err) throw err
//     console.log("file renamed");
// })

fs.unlink('mytext.txt', (err)=>{
    if(err) throw err
    console.log('file deleted');
})


/*
file system 
delete, update, rename etc 
anything we want to do with file

api for file system 
like application to generate logs
*/