const form= document.getElementsByTagName('form')[0]; 
form.addEventListener("submit", (event) => {
    let valid = 0;
    const name = document.querySelector("#name").value;
    console.log(`name: ${name}`);
    if(valid==0 && name==''){
        valid=1;
        error_message='Enter the name!';
    }
    const email = document.querySelector("#email").value;
    if(valid==0 && email==''){
        valid=1;
        error_message='Enter the email!';
    }  
    console.log(`email: ${email}`);
    const gendervalue = document.getElementsByName("gender");
    let gender = ' ';
    for(let i=0;i<gendervalues.length;i++) {
        if(gendervalues[i].checked) {
            gender = gendervalues[i].value;
        }
    }
    console.log(name);
    if(gender==' ' && valid==0){
        valid=1;
        error_message='Select the gender';
    }
    const pin = document.querySelector("pin").value;
    if(pin=='' && valid==0)
    {
        valid=1;
        error_message='Enter address correctly';

    }
    console.log(name);
    const locality = document.querySelector("#locality").value;
    const city = document.querySelector("#City").value;
    const state = document.querySelector("#State").value;
    console.log(`locality: ${locality}`);
    console.log(`city: ${city}`);
    console.log(`state: ${state}`);
    if((locality==''||state==''||city=='') && valid==0)
    {
        valid=1; 
        error_message='Enter address correctly';

    }
    const password = document.querySelector("#pwd").value;
    const confirmPassword = document.querySelector("#conpwd").value;
    if((password==''||confirmPassword=='')&& valid==0){
        valid=1;
        error_message='Enter the password';
    }
    if(confirmPassword != password && valid==0){
        valid=1;
        error_message='Both the password should be same.';
    }
    if(valid==1 && error_message!=''){
        document.querySelector(".error_message").innerText=error_message;
        document.querySelector(".error_message").style.display="block";
        document.querySelector(".error_message").style.color="rgb(211, 51, 51)";
    }
    event.preventFault();
})

