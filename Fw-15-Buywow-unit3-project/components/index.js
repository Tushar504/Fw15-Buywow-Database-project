function navbar(){
	return `<div class="search_div">
		<span><i class="fa fa-times" aria-hidden="true" class="search_1" onclick="search_divhidd()"></i></span>
		<p>Find anything you need</p>
		<i class="fa fa-search" aria-hidden="true"></i>
		<input type="text" name="" placeholder="Search Products...">


	</div>

<div class="nav_top">
	<div>SHOP FOR MORE THAN ₹<sub>799</sub> & GET<sub>2</sub> FREEBIES WORTH ₹<sub>824</sub>
	</div>
</div>	

<div class="navbar">
	<div class="ham_bur"><i class="fas fa-bars"></i></div>

	<div class="navbar_img" onclick="window.location.href='home.html'">
	<img  src="https://cdn.shopify.com/s/files/1/1375/4957/files/WOW_logo-02-02-01_5f70367a-c63c-479d-9ebe-21f1eebf6189_256x.png?v=1640789890">
	</div>
			<div class="span_nav">
				<div id="spna_1" class="span_hover"><span>Skin</span>
					<div class="span_1_inner">
						<ul>
							<li onclick="window.location.href='skin_Face_Wash.html'">Face Wash</li>
							<li>Face Scrub</li>
							<li>Face Serum</li>
							<li>Face Cream</li>
							<li>Face Mask</li>
							<li>Moisturizer</li>
							<li>Sunscreen</li>
							<li>Toner</li>
							<li>Make Up Remover</li>
							<li>Under Eye Cream</li>

						</ul>
					</div>
				</div>
				<div id="spna_2" class="span_hover"><span>Hair</span>
					<div class="span_2_inner">
						<ul>
							<li onclick="window.location.href='hair_shampoo.html'">Shampoo</li>
							<li>Conditioner</li>
							<li>Hair Combo Kit</li>
							<li>Hair Oil</li>
							<li>Hair Mask</li>
							<li>Hair Serum</li>
							<li>Scalp Brush</li>
							<li>Hair Spray / Revitalizer</li>

						</ul>
					</div>
				</div>
				<div id="spna_3" class="span_hover"><span>Bath & Body</span>
					<div class="span_3_inner">
						<ul>
							<li onclick="window.location.href='wellness.html'">Wellness</li>
							<li>Hand Cream</li>
							<li>Hand Wash</li>
							<li>Body Wash</li>
							<li>Body Scrub</li>
							<li>Body Lotion</li>
							<li>Body Butter</li>
							<li>Massage Oil</li>
							<li>Bathing Bar</li>

						</ul>
					</div>
				</div>
				<div id="spna_4" class="span_hover"><span>Mother & Child</span>
					<div class="span_4_inner">
						<ul>

							<li onclick="window.location.href='massage.html'">Massage Oil</li>
							<li>Stretch Care</li>
							<li>3 in 1 Kids</li>
							<li>Kids Body Lotion</li>
							<li>Kids Sunscreen</li>
							<li>Kids Face Wash</li>

						</ul>
					</div>
				</div>
				<div id="spna_5" class="span_hover"><span>Nutrition & Health</span>
					<div class="span_5_inner">
						<ul>
							<li onclick="window.location.href='nutrition_health.html'">Omega Fatty Acids</li>
							<li>Multivitamins</li>
							<li>Weight Management</li>
							<li>Immunity Care</li>
							<li>Detox</li>
							<li>Gut Health</li>
							<li>Proteins</li>
							<li>Antioxidants</li>
							<li>Men's Health</li>
							<li>Vitamins</li>
							<li>Skin & Hair Nutrition</li>
							<li>Specialty Supplements</li>
						</ul>
					</div>
				</div>
				<div id="spna_6" class="span_hover"><span>Collections</span>
					<div class="span_6_inner">
						<ul>
							<li onclick="window.location.href='collections_activcharcoal.html'">Activated Charcoal</li>
							<li>Aloe Vera</li>
							<li>Macadamia</li>
							<li>Rice water</li>
							<li>Apple Cider Vinegar</li>
							<li>Argan Oil</li>
							<li>Coconut</li>
							<li>Men's Care</li>
							<li>Red Onion Black Seed Oil</li>
							<li>Himalayan Rose</li>
							<li>Amazon Rainforest</li>
							<li>Super Hero</li>
							<li>Ubtan</li>
							<li>Vitamin C</li>

						</ul>
					</div>
				</div>
				<div id="spna_7" class="span_hover"><span>Combos</span>
					
				</div>
				<div id="spna_8" class="span_hover"><span>⚡Deals</span>

				</div>
			</div>

					<div class="icondiv">
						<i class='fa fa-user-circle-o blue-color' onclick="showDiv()"></i>
						<i class="fa fa-search" aria-hidden="true" onclick="search_divhidd()"></i>
						<i class="fa-solid fa-trash-can" onclick="showcheckout()"></i>
     				</div>
					
</div>

<div class="login-div">
	<ul>
		<div class="cross">
		<i class="fa fa-times" aria-hidden="true" onclick="hiddDiv()"></i>
		</div>

		<li onclick="window.location.href='sigin.html'"> <i class="fa fa-arrow-circle-left"></i>  Log in</li>

		<li onclick="window.location.href='register.html'"><i class="fa fa-user" aria-hidden="true"></i>Register</li>
		<li onclick="window.location.href='cart.html'"><i class="fa fa-shopping-bag" aria-hidden="true"></i>  View cart</li>

	</ul>
</div>

<div class="checkout_sid">
	
	<div class="cross2">
		<span>Your cart (0)</span>
		<span onclick="showcheckout()">CLOSE</span>
	</div>

	<div class="checkout_sid2">
		<i class="fa fa-shopping-bag" aria-hidden="true"></i>
		<p>Your cart is empty</p>
		<button onclick="window.location.href='cart.html'">Check out our offering</button>
	</div>

</div>`

}


function footer(){

	return	`
	<div class="footer">
		<div class="footer_1">
			<div class="footer_img">
				<img  src="https://cdn.shopify.com/s/files/1/1375/4957/files/WOW_logo-02-02-01_5f70367a-c63c-479d-9ebe-21f1eebf6189_256x.png?v=1640789890">
			</div>
		</div>
		<div class="footer_2">
			<div>
				<span class="footer_span">WHO WE ARE</span>
				<p class="footer_p">WOW Skin Science Products are completely free from Harmful Sulphates, Silicones & Parabens. Our Products are safe, nature inspired & dermatologically tested for your safety. Try Today & Fall in love with the complete range of Nutrition, Skin Care, Hair Care and Bath & Body Products.</p>
			</div>
		</div>
		<div class="footer_3">
			<div>
				<span class="footer_span">STAY CONNECTED</span>
			</div>
			<div class="footer_icon">
				<i class="fab fa-facebook-f"></i>
				<i class="fab fa-instagram"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				<i class="fa-brands fa-youtube"></i>
				<i class="fa fa-pinterest" aria-hidden="true"></i>	

			</div>
		</div>
		<div class="footer_4">
			<div>
				<span class="footer_span footer_li_span">MAIN MENU</span>
			</div>
			<div class="footer_lu footer_lu_li">
				<ul>
					<li>Skin</li>
					<li>Hair</li>
					<li>Bath & Body</li>
					<li>Mother & Child</li>
					<li>Nutrition & Health</li>
					<li>Collections</li>
					<li>Combos</li>
					<li>⚡Deals</li>
				</ul>
			</div>
		</div>
		<div class="footer_5">
			<div>
				<span class="footer_span footer_li_span2">INFORMATION</span>
				<div class="footer_lu">
				<ul>
					<li>About Us</li>
					<li>Return / Refund / Cancellation Policy</li>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
					<li>Shipping & Delivery Policy</li>
					<li>Track your Order</li>
					<li>Contact Us</li>
					<li>Blog</li>
					<li>Ecovia Packaging</li>

				</ul>
				</div>
			</div>
		</div>
	</div>
<div class="bottom_icon">
	<img src="https://img.icons8.com/color/48/000000/visa.png"/>
	<img src="https://img.icons8.com/color/48/000000/mastercard.png"/>
	<img src="https://img.icons8.com/color/48/000000/amex.png"/>
	<img src="https://img.icons8.com/color/48/000000/jcb.png"/>
	<img src="https://img.icons8.com/color/48/000000/paypal.png"/>
</div>

<div class="gift_icon" id=""  onclick="first_gift()">
	<div class="inner_gift">
		<p>1</p>
	</div>
	<div>
	<i class="fa-solid fa-gift"></i>
	</div>
</div>

<div class="gift_icon2" onclick="first_gift2()">
	<div class="inner_gift">
		<p>1</p>
	</div>
	<div>
	<i class="fa fa-times" aria-hidden="true"></i>
	</div>
</div>

<div class="show_gift_div">
	<div class="show_gift_div_inner">
		<p>If you spend ₹699.00 (₹340.00 more), you will get free gift.</p>
		<hr>
		<div class="main_img_div">
			<div class="inner_img_div">
				<img src="https://cdn.shopify.com/s/files/1/1375/4957/products/Front-Combo-1024X1024_d36e6f72-1b19-464b-9ecd-bc3b5938f455.jpg?v=1645597746">
			</div>
			<div class="inner_p_div">
				<p>Shea Butter and Cocoa Butter Moisturizing Body Lotion + Himalayan Rose Gold Scrub By Body Cupid - 400 ml</p>
			</div>
		</div>
	</div>
</div>


`
}

export {navbar, footer};