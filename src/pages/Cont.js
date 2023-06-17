import React from 'react'
import Bottomfooter from '../componets/Bottomfooter'
import pdf from '../images/pa.jpg';
import './cont.css';


export const Cont = () => {
  return (
    <div className='cbody'>
    
    <>
         <h1>Contact As Page</h1>
        
         <img src={pdf} height={300} width={500}/>
           <h1>Wellcome our website</h1>

  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          
        </div>
        <div class="screen-header-right">
          
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT US TO ANY QUERY TO PFD PARSING SYSTEM</span>
            
          </div>
          <div class="app-contact">CONTACT INFO : +99 85 75 74 74 
          ABC@GMAIL.COM ADDRESS:--SHIV BLESSING COMPLEX ,1ST FLLOR,dSHAMESH SOFTWARE SOLUTION</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      
</>
<div>
  <Bottomfooter/>
</div>
 </div>
  )
}


export default Cont
    
