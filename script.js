let div =document.createElement("div");
div.style.textAlign="center";

let input = document.createElement("input");
input.setAttribute("type","text")
input.setAttribute("id","name")
input.setAttribute("placeholder"," search by name ")
let btn = document.createElement("button")
btn.setAttribute("type","button")
btn.setAttribute("id","bycity")
btn.classList.add("btn","btn-primary");
btn.innerHTML="search"
btn.addEventListener("click",brew)

let div1 = document.createElement("div");
div1.setAttribute("id","list");

div.append(input,btn,div1);
document.body.append(div);
async function brew(){
    const choose = document.getElementById('name').value
    console.log(choose)
    const url = `https://api.openbrewerydb.org/breweries?by_name=${choose}`
    
    let res= await fetch(url);
    let res1=await res.json();
    console.log(res1);
    
  

          try {
            res1.forEach(brewery => {
                const div2 = document.createElement('div')
                div2.innerHTML=`
                <div class="card text-white bg-info mb-3" style="max-width:18rem;margin-top:20px; margin-left:31vw ">
  
  <div class="card-body">
    <h5 class="card-title">Brewery Details</h5>
    <ul class="list-group list-group-flush" style="color:black;">
    <li class="list-group-item"> name: ${brewery.name}</li>
    <li class="list-group-item"> type: ${brewery.brewery_type}</li>
    <li class="list-group-item"> address: ${brewery.address_2}</li>
    <li class="list-group-item"> website url: ${brewery.website_url}</li>
    <li class="list-group-item"> phone no: ${brewery.phone}</li>
  </ul>
  </div>`
                
                document.getElementById('list').append(div2);
                console.log(brewery.name);
                console.log(brewery.brewery_type);
                console.log(brewery.address_2);
                console.log(brewery.website_url);
                console.log(brewery.phone);
            
              })
             
          } catch (error) {
            console.log(error);
            
          }
        
       
        }