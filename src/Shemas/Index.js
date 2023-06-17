
import * as Yup from "yup";

export const signupshema=Yup.object({
    // userid:Yup.string().min(2).max(20).Required("please enter name required"),
    email:Yup.string().email().required("please valid email"),
    mobile:Yup.string().min(10).max(12).required("enter Valid Mobile no"),
    password:Yup.string().min(6).required("enter password"),
    cpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"password not match")
});

