
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

