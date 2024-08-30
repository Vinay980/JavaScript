let regFormEl=document.getElementById("reg-form");
let usnBox=document.getElementById("usn");
let emailBox=document.getElementById("email");
let pwBox=document.getElementById("pw");
let dobBox=document.getElementById("dob");
let cityBox=document.getElementById("city");


regFormEl.addEventListener('submit',function(event)
{
    event.preventDefault(); //used for stop the Default functionality
    
    let username=usnBox.value;
    let email=emailBox.value;
    let password=pwBox.value;
    let dateofbirth=dob.value;
    let cityname=cityBox.value; 

    console.log(username,email,password,dateofbirth,cityname);
})