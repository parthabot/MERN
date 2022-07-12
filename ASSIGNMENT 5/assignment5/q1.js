let employee = {
    name:"partha",
    email:"partha12@gmail.com",
    phone:9438034063,
    basic_salary:40000,
    
    Total_Salary:function() {
        const hra=0.15
        const splalw=0.20
        var tax
        var total
       var sal=this.basic_salary+this.basic_salary*hra+this.basic_salary*splalw;

if (this.basic_salary<40000) {
        tax=0
        
    }
    else if (this.basic_salary>40000 && this.basic_salary<50000) {
        tax=0.10;
    
    }
    else if (this.basic_salary>50000 && this.basic_salary<70000) {
        tax=0.15;
        
    }
    else if (this.basic_salary>70000 && this.basic_salary<90000) {
        tax=0.20;
        
    }
    else { 
        tax=0.30
    }
    total=sal-this.basic_salary*tax;

    return( total)


},
    

}
console.log("NAME-"+employee.name)
console.log("EMAIL ID-"+employee.email)
console.log("PHONE-"+employee.phone)
console.log("BASIC SALARY-"+employee.basic_salary)
console.log("TOTAL SALARY-"+employee.Total_Salary())

