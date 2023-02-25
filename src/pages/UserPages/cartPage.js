import CartItem from '../../components/CartItem';
import { useFetchCartQuery, useConfirmOrderMutation } from '../../store';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';


function Cart() {
  var user = JSON.parse(localStorage.getItem('userinfo'))[0];
  const { data, error, isFetching } = useFetchCartQuery(user.ID);
  const [confirmOrder, Results] = useConfirmOrderMutation();
  let content;
  let Totalprice;

  const initialValues = {
    visanumber: 0,
    security_code: 0,
    LocationDelivery: "",
  };
  const handleconfirm = (formValue) => {
    formValue.TotalPrice = Totalprice;
    Object.assign(formValue, { user_id: user.ID }, { TotalPrice: Totalprice });

    confirmOrder(formValue)

  }



  const validationSchema = Yup.object().shape({
    visanumber: Yup.number().required("This field is required!"),
    security_code: Yup.number().required("This field is required!"),
    LocationDelivery: Yup.string().required("This field is required!")
  });

  if (isFetching) {
    content = <Loading/>;
  } else if (error) {
    content = <div>Error loading</div>;
  } else {
    Totalprice = data.reduce((sum, item) => {
      return sum + item.SellingPrice * item.quntity;
    }, 0);
    initialValues.TotalPrice = Totalprice
    content = data.map((item) => {
      return <CartItem key={item.ID} item={item} />;
    });

  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5 bg-dark">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card" style={{ borderRadius: "15px" }}>

              <div className="row">
                <div className="col-lg-6 px-5 py-4">
                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                  {content}
                  <hr className="mb-4" style={{ height: ' 2px', backgroundColor: '#1266f1', opacity: '1' }} />
                  <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: '#e1f5fe' }}>
                    <h5 className="fw-bold mb-0">Total:</h5>
                    <h5 className="fw-bold mb-0">{Totalprice}$</h5>
                  </div>

                </div>
                <div className="col-lg-6 px-5 py-4">

                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleconfirm}
                  >
                    <Form className="mb-5">
                      <div className="form-outline mb-5">
                        <label htmlFor="LocationDelivery" className="form-label">Location Delivry</label>
                        <Field name="LocationDelivery" type="text" className="form-control form-control-lg" />
                        <ErrorMessage
                          name="LocationDelivery"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <div className="form-outline mb-5">
                        <label className="form-label" htmlFor="visanumber">Card Number</label>
                        <Field name="visanumber" type="number" className="form-control form-control-lg" />
                        <ErrorMessage
                          name="visanumber"
                          component="div"
                          className="alert alert-danger"
                        />

                      </div>

                      <div className="form-outline mb-5">
                        <label className="form-label" htmlFor="security_code">security_code </label>
                        <Field name="security_code" type="password" className="form-control form-control-lg"
                          size="1" minlength="3" maxlength="3" />
                        <ErrorMessage
                          name="security_code"
                          component="div"
                          className="alert alert-danger"
                        />

                      </div>
                      {Results.error && <div className="alert alert-danger">{Results.error.data.error}</div>}
                      <button type="submit" className="btn btn-primary btn-block" >
                        Buy now
                      </button>
                      <Link to='/user' className="fw-bold mb-5">
                        Back to shopping
                      </Link>
                    </Form>
                  </Formik>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart;