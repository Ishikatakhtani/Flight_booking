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