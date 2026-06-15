// import {Command} from "commander";
// const program = new Command();


// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small',' small pizza size')
//   .option('-c, --cheese <type>', 'cheese typed here');

// program.parse(process.argv);

// const options = program.opts();
// if(options.debug) console.log(options);
// if(options.small) console.log('- small pizza size');
// if(options.cheese) console.log(` this  is the ${options.cheese}`)


// program
//   .option('-r, --read', 'reading a file')
//   .argument('<string>')
// program.parse(process.argv);

// const options = program.opts();

// if(options.read) console.log(program.args[0].split("-"));




// import { appendFile,readFile,writeFile } from "fs";

// const user = {
//   "id" : 2,
//   "name" : "sohail",
//   "age" : 24,
//   "city" : "hyderabad"
// };

// function readAndWrite(file,user){
//   return new Promise((resolve,reject)=> {
//     readFile(file,"utf-8",(err,data)=>{
//       if(err){
//         reject(err);
//       }
//       const acqdata = JSON.parse(data);
//       acqdata.push(user);
//       writeFile(file,JSON.stringify(acqdata,null,2),(err)=>{
//         if(err){
//           reject(err);
//         }
//         resolve(acqdata);
//       })
//     })
//   })
// }
// readAndWrite("index.json",user).then(acqdata => console.log(acqdata)).
// catch(err=> console.log(err));

// function editUser(file,id,updateduser){
//   return new Promise((resolve,reject)=>{
//     readFile(file,"utf-8",(err,data)=>{
//       if(err){
//         reject(err);
//         return;
//       }

//       const acqdata = JSON.parse(data);
//       const getuser = acqdata.find(user => user.id === id);
//       if(!getuser){
//         console.log("user not found");
//         return;
//       }
//       Object.assign(getuser,updateduser);
//       writeFile(file,JSON.stringify(acqdata,null,2),(err)=>{
//         if(err){
//           reject(err);
//           return;
//         }
//         console.log("user updated successfullY");
//         resolve(acqdata);
//       })
//     })
//   })
// }

// editUser("index.json",2,user).then(acqdata => console.log(acqdata))
// .catch(err => console.log(err));


// function deleteuser(file,id){
//   return new Promise((resolve,reject)=>{
//     readFile(file,"utf-8",(err,data)=>{
//       if(err){
//         reject(err);
//       }
//       const acqdata = JSON.parse(data);
//       const deletedata = acqdata.filter(user => user.id !== id);
//       writeFile(file,JSON.stringify(deletedata,null,2),(err)=>{
//         if(err){
//           reject(err);
//         }
//         resolve(acqdata);
//         console.log("data deleted.."+ `${id}`);
//       })

//     })
//   })
// }

// deleteuser("index.json",2).then(data => console.log(data)).catch(err => console.log(err));



//=========================================================================================================


// import { Command } from 'commander';
// const program = new Command();

// program
//   .option("-c, --cheese [type]", 'add cheese with options');
// program.parse();
// const options = program.opts();
// if(options.cheese === undefined) console.log("no cheese selected");
// else if(options.cheese === true) console.log("added cheese");
// else console.log(` added cheese ${options.cheese}`);

// console.log("enter a input");
// console.log(process.argv[2]);

//=============================================================

// curd opetations insert update delete , read

import { Command } from 'commander';
import { readFile, writeFile } from 'fs';

const program = new Command();

program
  .option('-r, --read <file>', 'read a file')
  .option('-a, --add-user <file>', 'add a user')
  .option('-i, --id <id>', 'user id')
  .option('-n, --name <name>', 'user name')
  .option('-f, --find-user <file>', 'find user in file')
  .option('-d, --delete-user <file>', 'delete a user from file (requires -i <id>)');

program.parse(process.argv);
const options = program.opts();

if (options.read) {
  readFile(options.read, 'utf-8', (err, data) => {
    if (err) {
      console.log('error in reading');
      return;
    }

    const acqdata = JSON.parse(data);
    console.log(acqdata);
  });
} else if (options.addUser) {
  if (!options.id || !options.name) {
    console.log('please provide both id and name');
  }

  readFile(options.addUser, 'utf-8', (err, data) => {
    if (err) {
      console.log('error in reading');
      return;
    }

    const acqdata = JSON.parse(data);
    const user = {
      id: Number(options.id),
      name: options.name,
    };

    acqdata.push(user);
    writeFile(options.addUser, JSON.stringify(acqdata, null, 2), err => {
      if (err) {
        console.log('error in writing to file');
        return;
      }

      console.log('user added successfully');
    });
  });


} 



else if (options.deleteUser) {
  if (!options.id) {
    console.log('please provide id with -i <id>');
  }

  const id = Number(options.id);

  readFile(options.deleteUser, 'utf-8', (err, data) => {
    if (err) {
      console.log('error in reading a file');
      return;
    }

    const acqdata = JSON.parse(data);
    const finduser = acqdata.find(user => user.id === id);

    if (!finduser) {
      console.log('there is no user with id');
      return;
    }

    const deleteuser = acqdata.filter(user => user.id !== id);
    writeFile(options.deleteUser, JSON.stringify(deleteuser, null, 2), err => {
      if (err) {
        console.log('error in deleting');
        return;
      }

      console.log('data deleted successfully');
    });
  });
}
