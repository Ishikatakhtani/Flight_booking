let sub1=()=>{
    let ipnumber=document.querySelector("#lognum").value;
    let ippassword=document.querySelector("#logpass").value;

       let localnum=localStorage.getItem("numm")
       let localpas=localStorage.getItem("passs")
  
    if(ipnumber==localnum && ippassword==localpas){
       
        Swal.fire({
            title: "LOGIN SCUSESSFUL",
            icon: "success",
            draggable: true
           
     
        });    
    
        location.href="Home.html"
        return false;
    }
   
    
    }






let sub=()=>{
   
    let ipname=document.querySelector("#Fname").value;
    let Lipname=document.querySelector("#Lname").value;
let ippnumber=document.querySelector("#num").value;
let ipemail=document.querySelector("#Email").value;
let ipassword=document.querySelector("#pass").value;
let ipcpass=document.querySelector("#cpass").value;

let errname=document.querySelector("#errorname");
let errlname=document.querySelector("#errorlname")
let errnumber=document.querySelector("#errornum");
let erremail=document.querySelector("#errmail");
let errpass=document.querySelector("#errorpass");
let errcpass=document.querySelector("#errorcpass");
if(ipname==""){
    //  let nameinput=document.querySelector("#Fname")
    //  nameinput.style.border= "1px solid red"
    // nameinput.placeholder="enter name "
    errname.innerHTML="please enter you name"
    errname.style.color="red"
    return false
}
if(Lipname==""){
    //  let nameinput=document.querySelector("#name")
    //  nameinput.style.border= "1px solid red"
    // nameinput.placeholder="enter name "
    errlname.innerHTML="please enter you name"
    errlname.style.color="red"

    return false
}





else if(ipemail==""){
    //  errnumber.innerHTML=""
    erremail.innerHTML="please enter your email"
    erremail.style.color="red"
    return false
}
else if(!(ipemail.includes('@')&&ipemail.includes(".com"))){
    erremail.innerHTML="email address must contain @ and .com"
    erremail.style.color="red"
    return false
}

else if(ippnumber=="" ){

    erremail.innerHTML=""
  errnumber.innerHTML="please enter your number"
  errnumber.style.color="red"
  return false
}
else if( isNaN(ippnumber)){
  erremail.innerHTML=""
  errnumber.innerHTML="please enter number only"
  errnumber.style.color="red"
  return false
}
else if(ippnumber.length!==10){
  erremail.innerHTML=""
  errnumber.innerHTML="please enter 10 digit number "
  errnumber.style.color="red"
  return false
}

else if(ipassword=="" ){
    erremail.innerHTML=""
        errpass.innerHTML="please enter your password"
        errpass.style.color="red"
        return false
        
}

else if(ipcpass==""){ 
     errpass.innerHTML=""
    errcpass.innerHTML="please enter your confrim password"
    errcpass.style.color="red"
    return false
}
else if(ipassword!=ipcpass){
document.querySelector("#cpass").value="";
document.querySelector("#pass").value="";
document.querySelector("#cpass").focus(); 
    errpass.innerHTML="please enter correct password"
    errpass.style.color="red"
    return false
    }

else if(!( ipassword.match(/[1234567890]/) &&ipassword.match(/[ !@#$%^&*()]/)&&ipassword.match(/[ a-z]/)&&ipassword.match(/[ A-Z]/))){
    errpass.innerHTML="please enter correct password"
    errpass.style.color="green"
    return false  
}

 localStorage.setItem("Fname",ipname)
localStorage.setItem("Lname",Lipname)
 localStorage.setItem("numm",ippnumber)
 localStorage.setItem("Email",ipemail)
 localStorage.setItem("passs",ipassword)
 localStorage.setItem("cpasss",ipcpass)




location.href="index.html"





return false



}



