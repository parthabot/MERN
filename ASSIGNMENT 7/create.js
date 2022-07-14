const prompt = require('prompt-sync')();
const fs = require('fs');                 //module fs


function User(id,name,quantity,price){   //constructor function to create obj
   this.id=id;
   this.name=name;
   this.quantity=quantity;
   this.price=price;
}


exports.addUser = ()=>{
    const howmanyusers =prompt(`enter how many item`);
    let userArr = [];
    for(let i=0;i<howmanyusers;i++){
        const id= prompt(`enter item  id?`);
        const name= prompt(`enter item name ?`);
        const quantity= prompt(`enter item  quantity?`);
        const price = prompt(`enter item price?`);
        const user = new User(id,name,quantity,price);    //calling the user constructor 
        
        userArr = [...userArr,user];    //storing the objects in user arry
    }
    //fs.writeFileSync("user.json",JSON.stringify(userArr));
    fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{  //write file fun in jsonn file
        if(err)                      //call back funtions 
        console.log(`something went wrong`)
        else
        console.log(`User(s) saved success`)
    })
}