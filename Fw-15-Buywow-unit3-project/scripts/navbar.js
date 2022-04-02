
	function showDiv(){
		document.querySelector('.login-div').style.display = "block";
	 }
	 
	 function hiddDiv(){
		document.querySelector('.login-div').style.display = "none";
	 
	 }
	 
	 
	 function showcheckout(){
		 var sidebr = document.querySelector(".checkout_sid");
		 sidebr.classList.toggle("active");
	 }
	 
	 function search_divhidd(){
		 var sidebr = document.querySelector(".search_div");
		 document.querySelector("#search_item").style.visibility = "hidden";
	 
		 sidebr.classList.toggle("active");
	 }
	 
	 function first_gift(){
			 document.querySelector(".gift_icon").style.visibility = "hidden";
			 document.querySelector(".show_gift_div").style.display = "block"
		 }
	 
		 function first_gift2(){
			 document.querySelector(".gift_icon").style.visibility = "visible";
			 document.querySelector(".show_gift_div").style.display = "none"
	 
	 
		 }
	 
	 
		 
	 
		 var timerId;
	 
		 async function searchMovies(name) {

		   let response = await fetch(`http://localhost:5000/search/${name}`);
		 
		   let data = await response.json();
		//    console.log({"data":data})
		   return data;
		 }
		 
		 async function appendMovies(m) {
		   if (m === undefined) {
			 return false;
		   }
		 
		   m.forEach(function (el){
		 let movies_div = document.getElementById("search_item");
		 
			 // console.log(el)
			 let div  = document.createElement("div")
			 div.setAttribute("id","#search_item")
			 let img = document.createElement("img");
			 
			 img.src=el.img;
			 console.log(img.src=el.img)
			 let title = document.createElement("P");
			 title.innerText = el.title;
		 
			 let price = document.createElement("H3");
			 price.innerText = el.price;
		 
			 div.append(img, title, price)
		 
			 movies_div.append(div);
			 // document.getElementById("search_item").append(div)
			   
		 
		   });
		 }
		 
		 
		 async function main() {
		   let name = document.getElementById("search_query").value;
		   document.getElementById("search_item").innerText = ""
		 
		   if (name.length <= 2) {
			 return false;
		   }
		 
		   console.log("fired");
		   document.getElementById('search_item').style.visibility = "visible";
		 
		   let m = await searchMovies(name);
		//    console.log({"m":m})
		 
		   appendMovies(m);
		 }
		 
	 
		 