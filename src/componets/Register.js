import React, { useState } from 'react'
import './Register.css';
import { useFormik } from "formik";
import{signupshema, validsign} from "../Shemas/Index";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Loginpage } from './Loginpage';


const initialValues ={
  username:"",//create the usestate variable
  email:"",
  mobile:"",
  city:"",
  pin:"",
  password:"",
  cpassword:""
};
export const Register = () => {
     
    const history= useNavigate();
     
    const{values, errors,touched, handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signupshema,
    onSubmit:(values ,action)=>{
      console.log("validation form",values);
      action.resetForm();
     
    },
    
  });
  console.log("validation form",errors);

 const userreg =()=>{
  alert("You've signed up successfully. Proceed to login");
history("/Loginpage");


 }


// const [records, setrecords] = useState([]);

//   // input type text is handle by the onchangehandle
//   const handleinput =(e) =>{

//       const name=e.target.name;// create and target the value of field name
//       const value=e.target.value; // create and target the value of field value
//       console.log(name,value);
      
//     setureg({... setureg,[name]:value});// handle the daynamic data by the user

//   }

  // const handlesubmit = (e) =>{

  //     e.preventDefault();
  //     const newRecords={... setureg ,id: new Date().getTime().toString()}
  //     console.log(records);
  //     setrecords([... records, newRecords]);

  //     setureg({username: "",email:"",mobile:"",city:"",pin:"", password:""});

  // }
  
  return (
    <div>
      <>     
       <form action="" onSubmit={handleSubmit}>
         
          
        <div className="container">


          <div className='fh'>
              <h1>User Registaration Form</h1>
          </div>
          <div className='cont'>
            <div className="row">
                <div className="col-10">
                    <label htmlFor="fname">User Name:</label>
                </div>
                <div className="col-90">
                    <input type="text" id="fname"  name="userid" 
                    value={values.userid} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    autoComplete='off' placeholder="Enter your first name" />
                   {errors.userid && touched.userid ? (
                      <h5 className="form-error">{errors.userid}</h5>
                    ) : null
                    }
                </div>
            </div>
          
            <div className="row">
                <div className="col-10">
                    <label htmlFor="email">Email:</label>
                </div>
                <div className="col-90">
                    <input type="email" id="email"  name="email" value={values.email}
                    onChange={handleChange} 
                    onBlur={handleBlur}  placeholder="it should contain @,."  autoComplete='off' />
                    {errors.email && touched.email ? (
                      <h5 className="form-error">{errors.email}</h5>
                    ) : null}
                    
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <label htmlFor="mobile">Mobile:</label>
                </div>
                <div className="col-90">
                    <input type="number" id="mobile " name="mobile" value={values.mobile}
                    onChange={handleChange} 
                    onBlur={handleBlur}   autoComplete='off' placeholder="only 10 digits are allowed" />

                    {errors.mobile && touched.mobile ? (
                      <h5 className="form-error">{errors.mobile}</h5>
                    ) : null}
                </div>
            </div>
  
           
            <div className="row">
                <div className="col-10">
                    <label htmlFor="city">City:</label>
                </div>
                <div className="col-90">
                    <input type="text" id="city"  name="city" value={values.city}
                    onChange={handleChange} 
                    onBlur={handleBlur}   placeholder="Enter City" autoComplete='off' maxLength="10" />
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <label htmlFor="pincode">Area PIN:</label>
                </div>
                <div className="col-90">
                    <input type="number" id="pin"  name="pin" value={values.pin}
                    onChange={handleChange} 
                    onBlur={handleBlur}  placeholder="Enter your city pincode" maxLength={6}  autoComplete='off' />
                </div>
            </div>
          
            <div className="row">
                <div className="col-10">
                    <label htmlFor="password">Password:</label>
                </div>
                <div className="col-90">
                    <input type="password" id="password"  autoComplete='off' value={values.password} 
                    onChange={handleChange} 
                    onBlur={handleBlur} name="password"  maxLength={8} placeholder='Must Be Enter Storng Password'/>
                    {errors.password && touched.password ? (
                      <h5 className="form-error">{errors.password}</h5>
                    ) : null}
                </div>
            </div>

            <div className="row">
                <div className="col-10">
                    <label htmlFor="c-password">Confirm Password:</label>
                </div>
                <div className="col-90">
                    <input type="password" id="cpassword"  autoComplete='off' 
                    onChange={handleChange} 
                    onBlur={handleBlur} name="cpassword"  maxLength={8} value={values.cpassword} placeholder='Must Be Enter same  Password'/>
                 {errors.cpassword && touched.cpassword ? (
                      <h5 className="form-error">{errors.cpassword}</h5>
                    ) : null}
                </div>
            </div>

            <div className="row">
                 <button onClick={userreg}>register</button>
                
            </div>  
        </div> 
        </div>
      </form>

      {/* <div>
        {
          records.map((curElem)=>{
            return(
                <div className='showd' key={curElem.id}>
                  <h5>{curElem.username}</h5>
                  <p>{curElem.email}</p>
                  <p>{curElem.mobile}</p>
                  <p>{curElem.city}</p>
                  <p>{curElem.pin}</p>
                  <p>{curElem.password}</p>
                </div>
            )
          })
        }
      </div> */}

      
      </>
    </div>
  )
}
