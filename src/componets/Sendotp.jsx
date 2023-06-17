import React from 'react'
import './Sendotp.css';


export const Sendotp = () => {
  return (
    <div className='otpbody'>
      <div className="otpcontainer">
         <div className="otpcard"> 
            <div className="carddetail">
             <h6>Please enter the one time password <br/> to verify your account</h6>
              <div> <span>A code has been sent to</span> <small>*******9897</small> </div>
               <div id="otp" className="otpe">
                      <input className="otpi" type="text" id="first" maxlength="1" />
                      <input className="otpi" type="text" id="second" maxlength="1" />
                      <input className="otpi" type="text" id="third" maxlength="1" />
                      <input className="otpi" type="text" id="fourth" maxlength="1" />
                      <input className="otpi" type="text" id="fifth" maxlength="1" />
                      <input className="otpi" type="text" id="sixth" maxlength="1" /> 
                </div>
                       <div className="otpbtn"> <button>Confirm Your OTP</button> </div>
                    <div className='cardretry'>
                       <h5>Didn't get the code </h5>
                        <a href="#" className="">Resend(1/3)</a> 
                     </div>
             </div> 
        </div>  
    </div>
</div>

  )
}
export default Sendotp
