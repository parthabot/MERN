let customer=[
    {
      name:'parash',
      email:'pra@gmail.com',
      no_of_times_shopped:2,
      purchase_history: [
        {
        date_of_purchase:'09/06/2022',
        item_purchased:[
            {
                product_name:'boat earbud neo',
                product_price:3500
            } ,
            {
                product_name:'sg cricket bat',
                product_price:6000 
            },

        ]
     },
     {
        date_of_purchase:'05/07/2022',
        item_purchased:[
            {
                product_name:'cutlery set',
                product_price:2000
            } ,
            

        ]
     }
      ]
    },
    {
        name:'Amresh',
      email:'ash@gmail.com',
      no_of_times_shopped:6,
      purchase_history: [
        {
        date_of_purchase:'29/06/2022',
        item_purchased:[
            {
                product_name:'sony home threatre',
                product_price:15000
            } ,
            {
                product_name:'leather jacket',
                product_price:5000 
            },

        ]
     },
     {
        date_of_purchase:'01/07/2022',
        item_purchased:[
            {
                product_name:'muffler',
                product_price:750
            } ,
            

        ]
     },
     {date_of_purchase:'01/07/2022',
     item_purchased:[
         {
             product_name:'addidas shoes',
             product_price:6800
         } ,
         

     ]

     },
     {date_of_purchase:'01/07/2022',
     item_purchased:[
         {
             product_name:'towel',
             product_price:500
         } ,
         

     ]

     },
     {date_of_purchase:'01/07/2022',
     item_purchased:[
         {
             product_name:'bike gloves',
             product_price:1000
         } ,
         

     ]


     },
     {date_of_purchase:'01/07/2022',
     item_purchased:[
         {
             product_name:'steel box',
             product_price:1200
         } ,
         

     ]


     },
      ]
    },

    {

    
        name:'Tarini',
    email:'tnr@gmail.com',
    no_of_times_shopped:2,
    purchase_history: [
      {
      date_of_purchase:'01/07/2022',
      item_purchased:[
          {
              product_name:'wall hanging',
              product_price:7000
          } ,
          {
              product_name:'usha juicer',
              product_price:5500
          },

      ]
   },
   {
      date_of_purchase:'30/06/2022',
      item_purchased:[
          {
              product_name:'rocking chair',
              product_price:2300
          } ,
          

      ]
   }
    ]

    },

    {

    
        name:'Rajesh',
    email:'rjh@gmail.com',
    no_of_times_shopped:2,
    purchase_history: [
      {
      date_of_purchase:'01/07/2022',
      item_purchased:[
          {
              product_name:'perfumes',
              product_price:600
          } ,
          {
              product_name:' wireless earphone',
              product_price:1500
          },

      ]
   },
   {
      date_of_purchase:'30/06/2022',
      item_purchased:[
          {
              product_name:'pants',
              product_price:1200
          } ,
          

      ]
   }
    ]

    },

    {
        name:'david',
    email:'daa@gmail.com',
    no_of_times_shopped:2,
    purchase_history: [
      {
      date_of_purchase:'01/07/2022',
      item_purchased:[
          {
              product_name:'woolen sweater',
              product_price:3500
          } ,
          {
              product_name:'philips geyser',
              product_price:7000
          },

      ]
   },
   {
      date_of_purchase:'30/06/2022',
      item_purchased:[
          {
              product_name:'horse statue',
              product_price:4000
          } ,
          

      ]
   }
    ]


    }
]
console.log(`                                                   Customers Details`);
for(let a=0;a<customer.length;a++)
{
   console.log("NAME-"+customer[a].name);
    console.log("Email-"+customer[a].email);
   console.log("No of times shopped-"+customer[a].no_of_times_shopped);
    for(let b=0;b<customer[a].purchase_history.length;b++)
    {
        console.log(customer[a].purchase_history[b].date_of_purchase);
        for(let k=0;k<customer[a].purchase_history[b].item_purchased.length;k++)
        {
            console.log("product name-"+customer[a].purchase_history[b].item_purchased[k].product_name);
            console.log("price-"+customer[a].purchase_history[b].item_purchased[k].product_price);
        }
    }
    console.log("\n\n")

}

console.log("\n\n")

console.log(`List of Customers  who shopped more then 5 times :`)
for(let a=0;a<customer.length;a++)
{
    if(customer[a].no_of_times_shopped>5)
    {
        console.log(customer[a].name+" -"+customer[a].no_of_times_shopped);
    }
}

console.log("\n\n")
let s=0;
console.log(`Customers and their total bill `);
console.log("\n")
for(let a=0;a<customer.length;a++)
{
   console.log(customer[a].name);
   for(let b=0;b<customer[a].purchase_history.length;b++)
    {
        for(let k=0;k<customer[a].purchase_history[b].item_purchased.length;k++)
        {
            s=s+customer[a].purchase_history[b].item_purchased[k].product_price;
        }
        
    }
    console.log(`THe Total  price is=${s}`);
    s=0;
}