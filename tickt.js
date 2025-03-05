let fetchdata=async()=>{

    let url='http://localhost:3000/flight'

    let res= await fetch(url,{method:"GET"})
    let data= await res.json()

    console.log(data);

    //sreach
    datashow(data)

    
}

//sreach
let sreachh=async()=>{

    let sreachinp=document.querySelector("#sreachinp").value.toLowerCase()

    let url='http://localhost:3000/flight'
    let ress=  await fetch(url,{method:"GET"})
    let data = await ress.json()

    let filterdata=data.filter((e)=>{
        return e.inpdep.toLowerCase().includes(sreachinp) 
    })

    datashow(filterdata)

}

let datashow=(data)=>{

    let a=document.querySelector("#t")
    a.innerHTML=""
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
            <td>${e.inpadult}</td> 
            <td>${e.inpchild}</td> 
           <td onclick="cnfdel('${e.id}')">Cancel</td>
            <td onclick="upd('${e.id}')">Update</td>
            </tr>
            `
        )
    })

}


let cnfdel=()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
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
            "inppas": spass,
            "inpadult": sadult,
            "inpchild": schild
        })
    })
  location.href="show.html"
return false
}



let upd=async(id)=>{

    let url=`http://localhost:3000/flight/${id}`
    let response=await fetch(url,{method:"GET"})

    let data=await response.json()
    console.log(data)

    let formdata =`
           
       
    <form>
    <div id="book">
      
        <br> <br>
        <div id="city">
            <div id="from">First Name:<br>
                <input type="text" placeholder="type departure city" id="updep" value=${data.inpdep}>
            </div>
            <div id="To">
                Last Name: <br>
                <input type="text" placeholder="type destination city" id="updes" value=${data.inpdes}>
            </div>
        </div>
         <br> <br> <br> 
        <div id="date">
        <div id="ddate"> Depart Date :  <br>
            <input type="date" id="update" value=${data.inpdate}>
        </div>
        <div id="rdate"> Return Date: <br>
            <input type="date" id="uprdate" value="${data.inprdate}">
        </div>
        <div id="class">
            CLASS: <br>
           <select id="upsel">
    <option value="Economy" ${data.inpsel === "Economy" ? "selected" : ""}>Economy</option>
    <option value="Business" ${data.inpsel === "Business" ? "selected" : ""}>Business</option>
</select>

        </div>
        </div>
         <br> <br> <br>
        <div id="pass1">
        
<div id="passadult">Mobile No.
    <input type="number" placeholder="enter mobile no"  id="upnum" value=${data.inpnum}>
</div>

<div id="passadult"> Passport No.
    <input type="number" placeholder="enter passport no"  id="uppas" value=${data.inppass}>
</div>

</div>

<br> <br> <br>
<div id="pass">
            <div id="passadult"> ADULT: <br>
                <input type="number" id="upadult" placeholder="add number of adult" value=${data.inpadult}>
            </div>
        
            <div id="passadult">CHILD: <br>
                <input type="number"  id="upchild" placeholder="add number of children" value=${data.inpchild}>
            </div>
          
        
        </div>
         <br> <br> <br> <br> 
         <div id="passadult"> <br>
         <button type="submit" id="flightoptions" onclick="return finalupdate('${id}')" value="update" >BOOK</button>
       
     
</div>
        </div>
        
</form>
 
        
    `
document.querySelector("#formdata").innerHTML=formdata



}


    let finalupdate = (id) => {
        let sdep = document.querySelector("#updep").value;
        let sdes = document.querySelector("#updes").value;
        let sdate = document.querySelector("#update").value;
        let srdate = document.querySelector("#uprdate").value;
        let ssel = document.querySelector("#upsel").value;
        let snum = document.querySelector("#upnum").value;
        let spas = document.querySelector("#uppas").value;
        let sadult = document.querySelector("#upadult").value;
        let schild = document.querySelector("#upchild").value;
    
        let url = `http://localhost:3000/flight/${id}`;
    
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
              "inpdep":sdep,
              "inpdes":sdes,
              "inpdate":sdate,
              "inprdate":srdate,
              "inpsel":ssel,
              "inpnum":snum,
              "inppas":spas,
              "inpadult":sadult,
              "inpchild":schild

            })
        })
    
        return false;
    }