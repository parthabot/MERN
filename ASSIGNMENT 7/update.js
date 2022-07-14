const prompt = require('prompt-sync')();
const fs = require('fs');                 //module fs


function User(id,name,quantity,price){   //constructor function to create obj
   this.id=id;
   this.name=name;
   this.quantity=quantity;
   this.price=price;
}


exports.updateUser  = (id)=>{
    let userArr = JSON.parse (fs.readFileSync("user.json"));

    userArr = userArr.filter(user=>user.id != id)

    const name= prompt(`enter user name ?`);
    const quantity= prompt(`enter user quantity?`);
    const price = prompt(`enter user price?`);

    const userObj = new User(id,name,quantity,price);    //calling the user constructor 
    userArr=[...userArr,userObj];   

    fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{  //write file fun in jsonn file
        if(err)                      //call back funtions 
        console.log(`something went wrong`)
        else
        console.log(`User with ${id} saved success`)
    })
}