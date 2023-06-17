import React from 'react'
import './Forgot.css';
import{ FaMailBulk, FaSign, FaUser,} from 'react-icons/fa';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const Forgotpass = () => {
  return (
    <div className='fpbody'>
        <div class="fbox">
		<h1>Forgot Password</h1>
		<h6 class="information-text">Enter your registered 
 email to Get Notification <AddAlertIcon/> </h6>
		<div class="form-group">
            <p><label for="username"> <PersonIcon/>User Name </label></p>
			<input type="text" name="user_email" id="user_email"/>
			<p><label for="username"> <MailIcon/>Email</label></p>
            <input type="email" name="user_email" id="user_email"/>
			<button onclick="showSpinner()"> Reset Password <ExitToAppIcon/></button>
		</div>
		<div class="footer">
			<h5>New here? <a href="#">Sign Up</a></h5>
			<h5>Already have an account? <a href="#">Sign In.</a></h5>
		</div>
	</div>
    </div>
  )
}
