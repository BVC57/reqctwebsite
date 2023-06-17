import React from 'react'
import './Footer.css'

export const Bottomfooter = () => {
  return (
    <div>
    {/* <div className="fbody">
      <div className="fh"> this is footer area</div>
        <ul className="ful">
          <p>Instagram</p>
         <li><a href="/" >Home</a></li>
         <li><a href="about.js" >About</a></li>
         <li><a href="contact.js" >Contact</a></li>
         <li><a href="feedback.js" >FeedBack</a></li>
        </ul>

        <ul className="ful">
          <p>whatsapp</p>
         <li><a href="/" >Home</a></li>
         <li><a href="about.js" >About</a></li>
         <li><a href="contact.js" >Contact</a></li>
         <li><a href="feedback.js" >FeedBack</a></li>
        </ul>

        <ul className="ful">
          <p>Twitter</p>
         <li><a href="/" >Home</a></li>
         <li><a href="about.js" >About</a></li>
         <li><a href="contact.js" >Contact</a></li>
         <li><a href="feedback.js" >FeedBack</a></li>
        </ul>

        <ul className="ful">
          <p>Linked</p>
         <li><a href="/" >Home</a></li>
         <li><a href="about.js" >About</a></li>
         <li><a href="contact.js" >Contact</a></li>
         <li><a href="feedback.js" >FeedBack</a></li>
        </ul>
        </div>
     <div className="fci">
       
        <div className="fad">+9685742546,9875642154<br/>dSHAMESH SOFTWARE SOLUSTION, 
        EP MALL 1ST FLOOR AT KALANALA, BHAVNAGAR</div>
     </div> */}

<footer>
       <div>
            <span class="logo">DMS</span>
       </div>

       <div class="row">
            <div class="col-3">                
                <div class="link-cat">
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Solution</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Document Parsing</span></a></li>
                    <li><a href=""><span>Bill parsing</span></a></li>
                    <li><a href=""><span>Any GST File Converted</span></a></li>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" >
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Industries</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>CA Fields</span></a></li>
                    <li><a href=""><span>GST BILL</span></a></li>
                    <li><a href=""><span>ECommerce Bill</span></a></li>
                    <li><a href=""><span>Yearly Bill</span></a></li>
                    <li><a href=""><span>Goverment File</span></a></li>
                </ul>
            </div>
            <div class="col-3">
                <div class="link-cat" >
                    <span class="footer-toggle"></span>
                    <span class="footer-cat">Quick Links</span>
                </div>
                <ul class="footer-cat-links">
                    <li><a href=""><span>Reviews</span></a></li>
                    <li><a href=""><span>Terms & Condition</span></a></li>
                    <li><a href=""><span>Disclaimer</span></a></li>
                    <li><a href=""><span>Site Map</span></a></li>
                </ul>
            </div>
            <div class="col-3" id="newsletter">
                <span>Stay Connected</span>
                <form id="subscribe">
                    <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                    <input type="submit" value="Subscribe" id="btn-scribe"/>
                </form>
                
                <div class="social-links social-2">
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-tumblr"></i></a>
                  
                </div>

                <div id="address">
                    <span>Office Location</span>
                    <ul>
                        <li>
                            <i class="far fa-building"></i>
                            <div>BHAVNAGAR<br/>
                            EP MALL, 1ST FLOOR, dSHAMESH SOFTWARE SOLUSTION</div>
                        </li>
                        <li>
                            <i class="fas fa-gopuram"></i>
                            <div>Delhi<br/>
                            Office 150B, Behind Sana Gate Char Bhuja Tower, Station Road, Delhi</div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div class="social-links social-1 col-6">
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-tumblr"></i></a>
                <a href=""><i class="fab fa-reddit-alien"></i></a>
            </div>
       </div>
       <div id="copyright">
           &copy; All Rights Reserved 2013
       </div>
       <div id="owner">
           <span>
               Designed by <a href="https://www.codingtuting.com">B.V.CHAUHAN</a>
           </span>
       </div>
    </footer>

    </div>
  )
}
export default Bottomfooter
