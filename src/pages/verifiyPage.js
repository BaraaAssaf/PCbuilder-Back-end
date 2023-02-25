import { Formik, Field, Form } from "formik";
import {verifyUser,resendVerify } from '../store';
import { useThunk } from '../hooks/use-thunk';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import {  Link, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import '../App.css'
import { date } from "yup";
function Verify(){

    let navigate = useNavigate();
    const [checkVerify , isLoading ] = useThunk(verifyUser);
    const [resend] = useThunk(resendVerify);
    


    const { verifydata , data } = useSelector((state) => {
     if(state.Auth.verifydata.status === 200)
     {
          Cookies.remove('token');
          navigate('/login');
          return state.Auth;

     }
     return state.Auth;
   });

    const email = jwt_decode(Cookies.get('token'));
    console.log(email.token.Email)
    const initialValues = {
        Email: email.token.Email,
        VerificationCode: "",
      };
    const  handleVerify = (formdata) =>{
        checkVerify(formdata);
      }

      const handelResend = () =>{
        resend({Email: initialValues.Email})
      }

    return(
        <div>   <div className="container">
        <header>
          <i className="bx bxs-check-shield"></i>
        </header>
        <h4>Enter Verify Code</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={handleVerify}>
          <Form>
          <div className="input-field">
            <Field  name="VerificationCode" type="number"  maxlength="5" className="form-control"/>
            {verifydata.status === 201 && <div    className="alert alert-danger" > {verifydata.data}</div>}
          </div>
          <div className="text-center">
          <Link onClick={handelResend}>Resend</Link>
        </div>

        {date  && <div className="alert alert-success" >{data.data}</div>}
          <button type="submit" disabled={isLoading}>
                {isLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}Verify</button>
    
        </Form>
        </Formik>
      </div></div>
    )
}

export default Verify;