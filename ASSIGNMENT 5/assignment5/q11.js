let Employee = {
    name: "partha",
    email: "partha@gmail.com",
    phone: 9912391804,
    basicSalary: 40000,
    totalSalary: function(){
      const HRA = .15*this.basicSalary;
      const specialAllowance = .2*this.basicSalary;
      var tax
      var total
      var sal= this.basicSalary + HRA + specialAllowance;
      if(this.basicSalary>90000){
        tax=0.30;
      }
        
      else if(this.basicSalary>70000){
        tax=0.20;
      }
       
      else if(this.basicSalary>50000)
      {
        tax=0.15;
      }
        
      else if(this.basicSalary>40000){
        tax=0.10;
      }
      else if(this.basicSalary>0){
        tax=0;
      }
        total=sal-this.basicSalary*tax;
      return (total)
    },
  }
  console.log(Employee.name);
  console.log(Employee.email);
  console.log(Employee.phone);
  console.log(Employee.basicSalary);
  console.log(Employee.totalSalary());