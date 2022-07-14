const prompt = require('prompt-sync')();
const fs= require('fs');

function User(id,name,quantity,price){   //constructor function to create obj
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
 }

exports.removeItem =(id)=>{
    const Name = prompt('enter the id you want to remove');
    let userArr = JSON.parse(fs.readFileSync('user.json'));
    userArr = userArr.filter(items=> items.id != id);
    fs.writeFile('user.json',JSON.stringify(userArr),(err)=>
    {
        if(err)
         console.log('something went wrong');
         else
         console.log('item REMOVED succesfully');
    }
    )


}