function navbar (){
    return`
    <div id="upper_search">
            <img id="redTohome" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nordstrom_Rack_logo_2021.svg/512px-Nordstrom_Rack_logo_2021.svg.png?20211225005334"/>
            <input type="text" id="query" placeholder="Search for products  or brands"/>
            <div id="icons">
                <!-- sign-up -->
                <a id="signin">Sign In <i class="fa-solid fa-chevron-down"></i></a>
                <div class="sign-modal">
                    <div class="sign-contents">
                
                        <div class="signclose">x</div>
                        <br>
                        <div id="Signin">
                            <button ><a href="../siginnord/signin1.html">Sign In|Create Account</a></button>
                            <ul type="none">Your Account
                              <li>Wish List</li>
                              <li>The Nordy Club Rewards</li>
                              <li>Shipping Addresses</li>
                              <li>Payment Methods</li>
                              <li>Pay & Manage Nordstrom Card</li>
                              <li>Store Locator</li>
                              <li>Account Settings</li>
                              <li>Password & Personal Info</li>
                              <li>Email & Mail Preferences</li>
                            </ul>
                            <ul type="none">Need Help?
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <!-- cart -->
            <a href="../Cart_Page/cartPage.html" id="cart"><i class="fa-solid fa-bag-shopping"></i></a>
            <!-- <div class="cart-modal">
                <div class="cart-contents">
            
                    <div class="cartclose">x</div>
                    <div id="cartapp"></div>
                </div>
            </div> -->
            </div>
        </div>
        <div id="lower_tags">
            <a id="clear">Clearence</a>
            <div class="bg-modal">
                <div class="modal-contents">
            
                    <div class="close">+</div>
                    <div id="clearence"></div>
            
                </div>
            </div>
           
            <a id="womens">Women</a>
            <div class="wbg-modal">
                <div class="wmodal-contents">
            
                    <div class="wclose">+</div>
                    <div id="womensclothing"> </div>
            
                </div>
            </div>
            <a id="mens">Men</a>
            <div class="mbg-modal">
                <div class="mmodal-contents">
            
                    <div class="mclose">+</div>
                    <div id="mensclothing"> </div>
            
                </div>
            </div>
            <a id="kid">Kids</a>
            <div class="kbg-modal">
                <div class="kmodal-contents">
            
                    <div class="kclose">+</div>
                    <div id="kidclothing"> </div>
            
                </div>
            </div>
            <a id="bag">Bags & Accessories</a>
            <div class="abg-modal">
                <div class="amodal-contents">
            
                    <div class="aclose">+</div>
                    <div id="bags"> </div>
            
                </div>
            </div>

            <a id="home">Home</a>
            <div class="hbg-modal">
                <div class="hmodal-contents">
            
                    <div class="hclose">+</div>
                    <div id="Homeapp"> </div>
            
                </div>
            </div>


            <a id="beauty">Beauty</a>
            <div class="bbg-modal">
                <div class="bmodal-contents">
            
                    <div class="bclose">+</div>
                    <div id="Beautyapp"> </div>
            
                </div>
            </div>

            <a id="gifts">Gifts</a>
            <div class="gbg-modal">
                <div class="gmodal-contents">
            
                    <div class="gclose">+</div>
                    <div id="giftsapp"> </div>
            
                </div>
            </div>
        </div>
    `
}

export { navbar };