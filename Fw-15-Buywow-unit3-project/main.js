
function map(data,parent,sec_parent){
    let storecart = JSON.parse(localStorage.getItem("cart"))||[];

    parent.innerHTML="";
    sec_parent.innerHTML=""
    data.map(function(ele){
    let div=document.createElement("div");
    
    let img=document.createElement("img");
    img.src=ele.img;
    img.setAttribute("id","gridimg")
    let p1=document.createElement("p");
    p1.textContent=ele.title;

    let p2=document.createElement("p");
    p2.textContent=`from ₹ ${ele.Dprice}`

    let button=document.createElement("button");
    button.textContent="Add To Cart";
    // button.id = "addtocart";
   
    if(window.location.href=="http://127.0.0.1:5501/cart.html"){
         button = ""
    }
    if(window.location.href!=="http://127.0.0.1:5501/cart.html"){
        button.addEventListener("click",() =>{
        alert("product added to cart")
        funcart(ele);
    })
    let funcart = (cartdata) =>{
         storecart.push(cartdata);
         localStorage.setItem("cart",JSON.stringify(storecart))
    } 
    }
   
     div.append(img,p1,p2,button);
    parent.append(div);
})

}

function grid(data,parent,sec_parent,img1,img2){
    img2.src="afterclick2.png"
    img1.src="first.png"
    map(data,parent,sec_parent)
}

function detailed(data,parent,sec_parent,img1,img2){
    img1.src="after.png"
    img2.src="second.png"
    parent.innerHTML="";
    sec_parent.innerHTML="";

       data.map(function(ele){
          let div=document.createElement("div");
           div.setAttribute("id","insidediv")
          let img=document.createElement("img");
          img.src=ele.img;
           img.setAttribute("id","detailedimg")
          let div1=document.createElement("div");

          let p1=document.createElement("p");
        p1.textContent=ele.title;
        p1.setAttribute("id","up")
        let p2=document.createElement("p");
        p2.textContent=`From ₹ ${ele.Dprice}`
        
        let p3=document.createElement("p");
        p3.textContent=ele.info;
        let button=document.createElement("button");
        button.textContent="Add To Cart"; 

        div1.append(p1,p2,p3,button)
        div.append(img,div1)
        sec_parent.append(div)
      })
   }

   function filter(selected,data,parent,sec_parent,img1,img2){
    
    if(selected=="low"){
        let res=data.sort(function(a,b){
            return a.Dprice-b.Dprice
        })
        if( sec_parent.innerHTML==""){
            map(res,parent,sec_parent);
        }
        else{
            detailed(res,parent,sec_parent,img1,img2)
        }
    }
    else if(selected=="high"){
       let res=data.sort(function(a,b){
            return b.Dprice-a.Dprice
        })
        if( sec_parent.innerHTML==""){
            map(res,parent,sec_parent);
        }
        else{
            detailed(res,parent,sec_parent,img1,img2)
        }
    }
}
   
export  {map,grid,detailed,filter}