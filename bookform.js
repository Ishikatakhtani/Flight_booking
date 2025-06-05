let change=()=>{
    let a=document.querySelector("#flight1")
    a.style.color='white'
     let b=document.querySelector("#flight2")
    b.style.color='yellow'
    if(a.style.color=='white'){
        a.style.color='yellow'
        b.style.color="white"
    }
}

let change1=()=>{
    let a=document.querySelector("#flight1")
    a.style.color='white'
     let b=document.querySelector("#flight2")
    b.style.color='yellow'
    if(a.style.color=='yellow'){
        a.style.color='white'
        b.style.color="yellow"
    }
}

let logout=()=>{
    localStorage.clear()
    location.href="index.html"
  }

  let hb=()=>{
    let dep=document.querySelector("#inpdep").value;
let des=document.querySelector("#inpdes").value;
let date=document.querySelector("#inpdate").value;
let adult=document.querySelector("#inpadult").value;

let errname=document.querySelector("#errorname");

if(dep==""){
  
  errname.innerHTML="Fill the required feild"
  errname.style.color="red"
  return false
}
if(des==""){
 
  errname.innerHTML="Fill the required feild"
  errname.style.color="red"
  return false
}





else if(date==""){
  
  errname.innerHTML="Fill the required feild"
  errname.style.color="red"
  return false
}
else if(rdate==""){
    errname.innerHTML="Fill the required feild"
    errname.style.color="red"
    return false
}





else if(adult=="" ){
    errname.innerHTML="Fill the required feild"
    errname.style.color="red"
    return false
      
}
location.href="book.html"
return false
  }