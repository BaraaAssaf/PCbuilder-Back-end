import Button from '../../components/Button'
import { useSelector } from 'react-redux';
import { registerUser } from '../../store';
import { useThunk } from '../../hooks/use-thunk';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


function Register() {
  const [addNewUser, isLoading] = useThunk(registerUser);
  let navigate = useNavigate();

  const { data } = useSelector((state) => {
    if (Cookies.get('token')) {
      navigate("/verify");
    }
    return state.Auth;
  });

  const initialValues = {
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Address: "",
    password: "",
    confirmpassword:"",
  };

  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required("This field is required!"),
    LastName: Yup.string().required("This field is required!"),
    Phone: Yup.string().min(10, 'must be at least 10 characters long').required("This field is required!"),
    Email: Yup.string().email().required("This field is required!"),
    Address: Yup.string().required("This field is required!"),
    password: Yup.string().min(8, 'must be at least 8 characters long').required("This field is required!"),
    confirmpassword: Yup.string().min(8, 'must be at least 8 characters long').required("This field is required!").oneOf([Yup.ref('password'), null], 'passwords must match'),
  });


  const handleSignUp = async (formValue) => {
    await addNewUser(formValue);
  };

  const renderForm = (
    <div className=''>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        <Form>
          <div className="form-outline mb-2">
            <label htmlFor="FirstName">FirstName</label>
            <Field name="FirstName" type="text" className="form-control" />
            <ErrorMessage
              name="FirstName"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div className="form-outline mb-2">
            <label htmlFor="LastName">LastName</label>
            <Field name="LastName" type="text" className="form-control" />
            <ErrorMessage
              name="LastName"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div className="form-outline mb-2">
            <label htmlFor="Email">Email</label>
            <Field name="Email" type="text" className="form-control" />
            <ErrorMessage
              name="Email"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div class="form-outline mb-2">
            <label htmlFor="Address">Address</label>
            <Field name="Address" type="text" className="form-control" />
            <ErrorMessage
              name="Address"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div class="form-outline mb-2">
            <label htmlFor="Phone">Phone</label>
            <Field name="Phone" type="text" className="form-control" />
            <ErrorMessage
              name="Phone"
              component="div"
              className="alert alert-danger"
            />
          </div>

          <div class="form-outline mb-2">
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />

          </div>
          <div class="form-outline mb-2">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <Field name="confirmpassword" type="password" className="form-control" />
            <ErrorMessage
              name="confirmpassword"
              component="div"
              className="alert alert-danger"
            />

          </div>
          {data.status === 400 && <div className="alert alert-danger" >{data.error} </div>}
          <Button type="submit" loading={isLoading} rounded backgroundColor='#32F9DD' color='white'> Register</Button>

   
        </Form>
      </Formik>
    </div>
  );
  return (

    <div className='container' style={{width:'400px'}}>
   <h1 className='text-algin-center'>Register</h1>
   <div>
          {renderForm}
      
       </div>

   </div>

  )
}

export default Register;











