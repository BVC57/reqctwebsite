import React from 'react'
import { Link } from 'react-router-dom'
import Bottomfooter from '../componets/Bottomfooter'

import pdf from '../images/1.png'
import './home.css'

export const Home = () => {
  return (
    <div>
    <>

        <h1>Home Page</h1>
        <div className='imgi'> <img src={pdf} />
        </div> 

      
     <hr/>
       {/* pdf upload code */}  
     <div className='pdd'>
        <div class="frame">
	        <div class="center">
		        <div class="title">
			        <h1>Drop file to upload</h1>
		       </div>

		      <div class="dropzone">
            
			      <img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" accept="image/*" required/>
			      <input type="file" class="upload-input" />
		      </div>

		      <button type="button" class="btn" name="uploadbutton">Upload file</button>

	       </div>
       </div>

       <div className='hh'><h1>PLEASE UPLOAD YOUR FILE TO CONVERT INTO ANY TYPE...</h1></div>
      
      </div> 
      <hr/>

       {/* code for step button */}
        <div className='step'>
                    <div className='sh'><p> THE STEP FOR HOW IT'S PDF PARSING  WORK </p></div>
                    <div class="container">
                      <div class="steps">
                        <span class="circle active">1</span>
                        <p>Upload PDF
                        
                        </p>
                        
                        <span class="circle">2</span>
                        <p>Work In Backend
                        
                        </p>
                        <span class="circle">3</span>
                        <p>Lambda Function Fire
                        
                        </p>
                        <span class="circle">4</span>
                        <p>fetch The Tesult
                        
                        </p>
                      </div>
                    </div>
        </div>  

        <div>
            <Bottomfooter/>
        </div> 
    </>
        
    </div>
  )
}
