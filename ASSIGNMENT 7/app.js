
const { addUser} = require('./create');
const  { updateUser } = require('./update');
const { removeItem } = require('./remove');
const prompt = require('prompt-sync')();
const fs = require('fs');

const operation = prompt ('enter which operation need to perform ?');
 
switch(operation){
    case 'add':
        addUser();
        break;
    case 'update':
        const id = prompt('enter the  item id to update');
        updateUser(id);
        break;
    case 'remove':
        const del = prompt('enter the item id to remove');
        
        removeItem(del);
        break;
    case 'total':
        let total=0;
        let userArr=JSON.parse(fs.readFileSync("user.json"));
        for(let i=0;i<userArr.length;i++){
            total +=userArr[i].quantity*userArr[i].price;
        }
        console.log(`Total price of the cart: ${total}`);
        break;
    default:
        console.log('no operations going to be performed')
        break;          
}