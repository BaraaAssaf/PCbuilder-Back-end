

import FormComponent from "../../components/FormCompnent";
import Button from "../../components/Button";
import * as Yup from "yup";
import { useCreateTestimonialMutation } from "../../store";
function TestMonialForm({userid}) {
  
   const[createTestimonial] =  useCreateTestimonialMutation()
   const initialValues = {
    Message:"textarea",
  };

const validationSchema = Yup.object().shape({
Message: Yup.string().required("This field is required!"),
});

const handleSubmit =  (formValue) => {
    Object.assign(formValue, {userid : userid});
    createTestimonial(formValue)
   };
   
   console.log(userid)
let button = <Button type="submit" rounded backgroundColor='#32F9DD' color='white'> Send</Button>

let content = <> <FormComponent initialValues={initialValues} 
validationSchema={validationSchema} Button={button} onSubmit={handleSubmit}   /> </>

  return (
    <div className="container bg-light">
        <h2>Send Review</h2>
      {content}
    </div>
  );
}

export default TestMonialForm;

