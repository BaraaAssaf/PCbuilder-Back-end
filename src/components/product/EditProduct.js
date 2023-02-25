import FormComponent from "../FormCompnent";
import * as Yup from "yup";
import { useLocation } from "react-router-dom"; 
import { useEditProductMutation } from "../../store";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
function EditProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state;
   const[editProduct,Results] =  useEditProductMutation()

   const initialValues = {
    Productname:"text",
    CostPrice: "number",
    SellingPrice: "numper",
    Quntity:"numper",
    Details: "text" 
  };

const validationSchema = Yup.object().shape({
Productname: Yup.string().required("This field is required!"),
CostPrice: Yup.number().required("This field is required!"),
SellingPrice: Yup.number().required("This field is required!"),
Quntity: Yup.number().required("This field is required!"),
Details: Yup.string().required("This field is required!"),
});

const handleSubmit =  (formValue) => {
    editProduct(formValue)
    navigate('/admin/product')
   };
   let button = <Button type="submit"  rounded backgroundColor='#32F9DD' color='white' loading={Results.isLoading} >Save Changes</Button>

let content = <> <FormComponent initialValues={initialValues}  updateitem={product} 
validationSchema={validationSchema} ID={product.ID} onSubmit={handleSubmit} Button={button}/> </>

  return (
    <div className="content-wrapper"  style={{width:'500px'}} >
    <div className="container-fluid" style={{marginTop:'150px'}}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <div>Dashboard</div>
        </li>
        <li className="breadcrumb-item active">Edit Product</li>
      </ol>

      {content}
    </div>
    </div>
  );
}

export default EditProduct;
