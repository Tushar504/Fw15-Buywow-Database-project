let url = 'http://localhost:5000/Best';

async function getData(url,fun){

   try{
    let res= await fetch(url);

      let data = await res.json();
 
     fun(data); 
    //  console.log(data);

   }
 catch(err) {
   console.log(err);
   }
}

getData(url,appendData);
function appendData(data){
  var a=document.querySelector("#Container2");
  a.innerHTML=""
data.map(function (ndata) {
  var cont=document.getElementById("Container2")

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var image = document.createElement("img");
    image.setAttribute('id','image1')
    image.setAttribute(  "src", ndata.img);


    var product = document.createElement("p");
    product.textContent = ndata.title;

    var rating = document.createElement("p");
    rating.setAttribute("id","Prate")
    rating.textContent = ndata.rate;
    

    var name = document.createElement("p");
    name.textContent = ndata.Dprice;

    var designation = document.createElement("button");
    designation.setAttribute("id","Pbut")
    designation.textContent = ndata.role;
    designation.addEventListener("click",function(){
      addTocart(ndata)
    })
   
    div2.append( image,product,name,rating,designation);


    document.querySelector("#Container2").append(div2);
    
    function addTocart(ndata){
      console.log(ndata)
      cart.push(ndata)
      localStorage.setItem("cart",JSON.stringify(cart))
    }
    

  });
  var Button2= document.createElement("button")
  Button2.setAttribute("id","Showmore")
   Button2.innerHTML="SHOWMORE"
   document.querySelector("#MainCont").append(Button2)
}
// /______________________Best Selling Nutrition & Health

var linkBest="http://localhost:5000/home";
getData(linkBest,appendDatabest);
function appendDatabest(data2){
 
  var b=document.querySelector("#Health")
  b.innerHTML=""

data2.map(function (ndata) {
  var cont1=document.getElementById("P")

    var divT = document.createElement("div");
    divT.setAttribute("id", "flex");

    var image = document.createElement("img");
    image.setAttribute('id','image1')
    image.setAttribute(  "src", ndata.img);


    var product = document.createElement("p");
    product.textContent = ndata.title;

    var rating = document.createElement("p");
    rating.setAttribute("id","Prate")
    rating.textContent = ndata.rate;
    

    var name = document.createElement("p");
    name.textContent = ndata.Dprice;

    var designation = document.createElement("button");
    designation.setAttribute("id","Pbut")
    designation.textContent = ndata.role;
    designation.addEventListener("click",function(){
      addTocart(ndata)
    })
   
    divT.append( image,product,name,rating,designation);
document.querySelector("#Health").append(divT)


function addTocart(ndata){
  console.log(ndata)
  cart.push(ndata)
  localStorage.setItem("cart",JSON.stringify(cart))
}

  });
  
  var Button3= document.createElement("button")
  Button3.setAttribute("id","Showmore")
   Button3.innerHTML="SHOWMORE"
   document.querySelector("#M").append(Button3)
}
  //  """""""""""""""""""""""""""""""""Summer essentials
  var linkBest2="http://localhost:5000/summer";
  getData(linkBest2,appendDatasummer);
   function appendDatasummer(data3){
    var c=document.querySelector("#p")
    c.innerHTML=""
  data3.map(function (ndata) {
    var cont1=document.getElementById("pcont")
  
      var divTw = document.createElement("div");
      divTw.setAttribute("id", "flex");
  
      var image = document.createElement("img");
      image.setAttribute('id','image1')
      image.setAttribute(  "src", ndata.img);
  
  
      var product = document.createElement("p");
      product.textContent = ndata.title;
  
      var rating = document.createElement("p");
      rating.setAttribute("id","Prate")
      rating.textContent = ndata.rate;
      
  
      var name = document.createElement("p");
      name.textContent = ndata.Dprice;
  
      var designation = document.createElement("button");
      designation.setAttribute("id","Pbut")
      designation.textContent = ndata.role;
      designation.addEventListener("click",function(){
        addTocart(ndata)
      })
     
      divTw.append( image,product,name,rating,designation);
  document.querySelector("#p").append(divTw)
  
  function addTocart(ndata){
    console.log(ndata)
    cart.push(ndata)
    localStorage.setItem("cart",JSON.stringify(cart))
  }
 
    });
    
    var Button4= document.createElement("button")
    Button4.setAttribute("id","Showmore")
     Button4.innerHTML="SHOWMORE"
     document.querySelector("#m").append(Button4)
  }
// *****************Body Cupid Range
var linkBest3="http://localhost:5000/body";
getData(linkBest3,appendDatabody);
function appendDatabody(data4){
  var d=document.querySelector("#t")
  d.innerHTML=""

data4.map(function (ndata) {
  var cont1=document.getElementById("t")

    var divTwt = document.createElement("div");
    divTwt.setAttribute("id", "flex");

    var image = document.createElement("img");
    image.setAttribute('id','image1')
    image.setAttribute(  "src", ndata.img);


    var product = document.createElement("p");
    product.textContent = ndata.title;

    var rating = document.createElement("p");
    rating.setAttribute("id","Prate")
    rating.textContent = ndata.rate;
    

    var name = document.createElement("p");
    name.textContent = ndata.Dprice;

    var designation = document.createElement("button");
    designation.setAttribute("id","Pbut")
    designation.textContent = ndata.role;
    designation.addEventListener("click",function(){
      addTocart(ndata)
    })
   
    divTwt.append( image,product,name,rating,designation);
document.querySelector("#t").append(divTwt)
function addTocart(ndata){
  console.log(ndata)
  cart.push(ndata)
  localStorage.setItem("cart",JSON.stringify(cart))
}


  
  });
  
  var Button5= document.createElement("button")
  Button5.setAttribute("id","Showmore")
   Button5.innerHTML="SHOWMORE"
   document.querySelector("#u").append(Button5)
}


// ????????

document.getElementById("Showmore").onclick=function(){
  location.href="https://www.buywow.in/"
}


// >>>>>>>>>>>>>>>>>>.LOCALSTORAGE


