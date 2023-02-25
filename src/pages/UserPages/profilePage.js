import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getUserbyID } from '../../store';
import { ChangePassword } from '../../store';

import { updateUser, updateimage } from '../../store';
import { useThunk } from '../../hooks/use-thunk';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


function ProfilePage({ ID }) {
  const [getbyID, isLoading] = useThunk(getUserbyID);
  const [update,updateLoading] = useThunk(updateUser);
  const [changePassword,Changeloading] = useThunk(ChangePassword);

  const [upload] = useThunk(updateimage);

  let con;
  useEffect(() => {
    getbyID(ID.token.user_id);
  }, [getbyID, ID]);

const {data} =   useSelector((state) => {
    return state.Auth;
  });


  const handleFileChange = e => {
    const files = e.target.files;
    const file = files[0];
    const formData = new FormData();
    formData.append("image", file);
    upload(formData);
    window.location.reload();
  };


  if (isLoading) {

    con = <Loading />


  } else if (localStorage.getItem('userinfo')) {
    let user = JSON.parse(localStorage.getItem('userinfo'))[0];
    const initialValues = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Phone: user.Phone,
      Email: user.Email,
      Address: user.Address

    };
    const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required("This field is required!"),
    LastName: Yup.string().required("This field is required!"),
    Phone: Yup.string().min(10, 'must be at least 10 characters long').required("This field is required!"),
    Email: Yup.string().required("This field is required!"),
    Address: Yup.string().required("This field is required!"),
    });

    const changePasswordValue = {
      OldPassword: '',
      NewPassword: '',
      ConfirmPassword: '',
    };

    const changePasswordSchema = Yup.object().shape({
      OldPassword: Yup.string().min(8, 'must be at least 8 characters long').required("This field is required!"),
      NewPassword: Yup.string().min(8, 'must be at least 8 characters long').required("This field is required!"),
      ConfirmPassword: Yup.string().min(8, 'must be at least 8 characters long').required("This field is required!").oneOf([Yup.ref('NewPassword'), null], 'passwords must match'),
    });

    const handleupdate = async (formValue) => {
      await update(formValue);
    };

    const handlechangePassword =  (formValue) => {
      Object.assign(formValue, { Email: user.Email });
      changePassword(formValue);
    };

    con = (
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-4">

            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">

                <img className="img-account-profile rounded-circle mb-2" src={`data:image/jpeg;base64,${user.image}`} alt="" style={{ width: "60px" }} />

                <div className="small font-italic text-muted mb-4"></div>
                <input type="file" onChange={(e) => handleFileChange(e)} />
              </div>
            </div>
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Change Password</div>
              <div className="card-body text-center">

              <Formik
                  initialValues={changePasswordValue}
                  validationSchema={changePasswordSchema}
                  onSubmit={handlechangePassword}>
                  <Form>
                    <div className="mb-3 auto">
                      <label className="small mb-1" forHtml="OldPassword">Old Password</label>
                      <Field name="OldPassword" type="password" className="form-control input-field"/>
                      <ErrorMessage
                        name="OldPassword"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    <div className="mb-3 auto">
                      <label className="small mb-1" forHtml="NewPassword">New Password</label>
                      <Field name="NewPassword" type="password" className="form-control input-field"/>
                      <ErrorMessage
                        name="NewPassword"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>

                    <div className="mb-3 auto">
                      <label className="small mb-1" forHtml="ConfirmPassword">Confirm Password</label>
                      <Field name="ConfirmPassword" type="password" className="form-control input-field"/>
                      <ErrorMessage
                        name="ConfirmPassword"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    {data.status === 400 && <div className="alert alert-danger" >{data.error} </div>}

                    <Button type="submit" loading={Changeloading} rounded backgroundColor='#32F9DD' color='white'> Save Changes</Button>
                  </Form>
                </Formik>

              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleupdate}>
                  <Form>
                    <div className="mb-3 auto">
                      <label className="small mb-1" forHtml="Email">Username</label>
                      <Field name="Email" type="email" className="form-control input-field" placeholder="name@example.com" />
                      <ErrorMessage
                        name="Email"
                        component="div"
                        className="alert alert-danger"
                      />

                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" forHtml="FirstName">First name</label>
                        <Field name="FirstName" type="text" className="form-control" placeholder="First Name" />
                        <ErrorMessage
                          name="FirstName"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" forHtml="LastName">Last Name</label>
                        <Field name="LastName" type="text" className="form-control" placeholder="Last Name" />
                        <ErrorMessage
                          name="LastName"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" forHtml="Phone"> Phone</label>
                        <Field name="Phone" type="tel" className="form-control" placeholder="First name" />
                        <ErrorMessage
                          name="Phone"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="small mb-1" forHtml="Address">Address</label>
                        <Field name="Address" type="text" className="form-control" placeholder="irbid" />
                        <ErrorMessage
                          name="Address"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                    </div>

                    <Button type="submit" loading={updateLoading} rounded backgroundColor='#32F9DD' color='white'> Save Changes</Button>
                  </Form>
                </Formik>
                <Link to='/'>back to home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
  return (
    <>
      {con}
    </>

  )

}
export default ProfilePage;