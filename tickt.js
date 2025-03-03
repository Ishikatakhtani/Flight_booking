let fetchdata=async()=>{

    let url='http://localhost:3000/flight'

    let res= await fetch(url,{method:"GET"})
    let data= await res.json()

    console.log(data);
    

    let a=document.querySelector("#t")
    data.map((e)=>{
        a.innerHTML+=(
            `
            <tr>
            <td>${e.inpdep}</td>
             <td>${e.inpdes}</td>
              <td>${e.inpdate}</td>
               <td>${e.inprdate}</td>
             <td>${e.inpsel}</td>
             <td>${e.inpnum}</td> 
            <td>${e.inppas}</td>   
            <td>${e.inadult}</td> 
            <td>${e.inpchild}</td> 
           <td onclick="del('${e.id}')">Cancel<t/d>
            <td onclick="upd('${e.id}')">Update<t/d>
            </tr>
            `
        )
    })

}

let del=(id)=>{
    let url=`http://localhost:3000/flight/${id}`
fetch(url , {method:"DELETE"})
}


let ins = () => {
    let sdep = document.querySelector("#inpdep").value;
    let sdes = document.querySelector("#inpdes").value;
    let sdate = document.querySelector("#inpdate").value;
    let sdater = document.querySelector("#inprdate").value;
    let ssel = document.querySelector("#inpsel").value;
    let snum = document.querySelector("#inpnum").value;
    let spass = document.querySelector("#inppas").value;
    let sadult = document.querySelector("#inpadult").value;
    let schild = document.querySelector("#inpchild").value;

    let url = 'http://localhost:3000/flight';

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "inpdep": sdep,
            "inpdes": sdes,
            "inpdate": sdate,
            "inprdate": sdater,  
            "inpsel": ssel,
            "inpnum": snum,
            "inppass": spass,
            "inpadult": sadult,
            "inpchild": schild
        })
    })
  
return false
}