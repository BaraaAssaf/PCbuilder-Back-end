
import { Formik, Field, Form, ErrorMessage } from "formik";

function FormComponent({ initialValues, validationSchema, updateitem, onSubmit, Button, ...rest }) {


  const fields = Object.entries(initialValues).map((key) => {
    if (key[1] === 'textarea') {
      return (
        <div className="form-outline mb-1" >
          <label className="small mb-1" forHtml={key[0]}>{key[0]}</label>

          <Field name={key[0]} as="textarea" className="form-control" cols="30" rows="4" placeholder="Message" />
          <ErrorMessage
            name={key[0]}
            component="div"
            className="alert alert-danger"
          />
        </div>
      )

    }
    else {
      return (
        <div className="form-outline mb-1" >
          <label className="small mb-1" forHtml={key[0]}>{key[0]}</label>
          <Field name={key[0]} type={key[0]} className="form-control input-field" />
          <ErrorMessage
            name={key[0]}
            component="div"
            className="alert alert-danger"
          />
        </div>
      )
    }

  });

  if (updateitem) {
    Object.entries(initialValues).forEach((key) => {
      initialValues[key[0]] = updateitem[key[0]];
    });
  }
  else {
    Object.entries(initialValues).forEach((key) => {
      initialValues[key[0]] = '';
    });
  }
  const handlesubmit = (formValue) => {
    if (updateitem) Object.assign(formValue, rest);
    onSubmit(formValue)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handlesubmit}>
      <Form>
        {fields}
        {Button}
      </Form>
    </Formik>
  )
}

export default FormComponent;