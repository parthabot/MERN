

var x=document.getElementById("title");


document.getElementById("t1").style.backgroundColor="white";
document.getElementById("t2").style.backgroundColor="violet";
document.getElementById("t3").style.backgroundColor="blue";
document.getElementById("t4").style.backgroundColor="green";
document.getElementById("t5").style.backgroundColor="pink";

console.log("The elements in even cells are\n");

for( i=0;i<x.rows.length;i++)
{
    for(j=0;j<x.rows[i].cells.length;j++)
    { if ((i+j)%2!=0) {
        console.log( "value- "+x.rows[i].cells[j].innerHTML+ "    " + "the position is " + "row-" + "   " + (i+1) + " " +"column-" +(j+1))
        console.log("\n")
    }
    
   
}
}