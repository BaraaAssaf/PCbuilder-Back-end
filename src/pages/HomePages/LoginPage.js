import { useSelector } from 'react-redux';
import { login } from '../../store';
import { useThunk } from '../../hooks/use-thunk';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import Button  from '../../components/Button';


function Login() {
  const [createlogin, isLoading] = useThunk(login);
  let navigate = useNavigate();
  const { data } = useSelector((state) => {
    if (Cookies.get('token')) {
      var decoded = jwt_decode(Cookies.get('token'));
      if (decoded.token.role_id === 1)
        if (decoded.token.isVerfiy === true)
          navigate("/");
        else navigate("/verify");
      if (decoded.token.role_id === 2) navigate("/admin/Dashboard");

    }
    return state.Auth;
  });

  const initialValues = {
    Email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    Email: Yup.string().email().required("This field is required!"),
    password:Yup.string().min(8, 'must be at least 8 characters long').required("This field is required!"),
  });

  const handlelogin = async (formValue) => {
    await createlogin(formValue);
  };


  const renderForm = (
    <div className=''>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlelogin}
      >
        <Form>

          <div className="form-outline mb-4">
            <label htmlFor="Email">Email</label>
            <Field name="Email" type="text" className="form-control" />
            <ErrorMessage
              name="Email"
              component="div"
              className="alert alert-danger"
            />
          </div>


          <div className="form-outline mb-4">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />

          </div>
          {data.status === 400 && <div className="alert alert-danger" >{data.error} </div>}

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
            </div>

            <div className="col">

            </div>
          </div>
              <Button type="submit" loading={isLoading} rounded backgroundColor='#32F9DD' color='white'> Login</Button>
          

          <div className="text-center">
            <p>Not a member? <Link to='/register'>Register</Link></p>
          </div>
        </Form>
      </Formik>
    </div>
  );
  return (
    <div className='container' style={{width:'400px'}}>
   <h1 className='text-algin-center'>Login</h1>
      
        <div>
          {renderForm}
       
        </div>

     
    </div>
  )
}

export default Login;











