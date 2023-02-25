import FormComponent from "../FormCompnent";
import * as Yup from "yup";
import Button from "../Button";
import { useCreateProductMutation } from "../../store";
import { useNavigate } from "react-router-dom";
function CreateProduct() {
    const [createProduct, Results] = useCreateProductMutation();
    const navigate = useNavigate();

    const initialValues = {
        Productname: "text",
        CostPrice: "number",
        SellingPrice: "numper",
        Quntity: "numper",
        Details: "text",
        ImagePath: "file"
    };

    const validationSchema = Yup.object().shape({
        Productname: Yup.string().required("This field is required!"),
        CostPrice: Yup.number().required("This field is required!"),
        SellingPrice: Yup.number().required("This field is required!"),
        Quntity: Yup.number().required("This field is required!"),
        Details: Yup.string().required("This field is required!"),
    });

    const handlesubmit = (formValue) => {

        createProduct(formValue);
        navigate('/admin/product');
    };

    let button = <Button type="submit" rounded backgroundColor='#32F9DD' color='white' loading={Results.isLoading}>Save Changes</Button>

    let content = <>   <FormComponent initialValues={initialValues}
        validationSchema={validationSchema} onSubmit={handlesubmit} Button={button} /> </>

    return (
        <div className="content-wrapper" style={{ width: '500px' }} >
            <div className="container-fluid" style={{ marginTop: '150px' }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <div>Dashboard</div>
                    </li>
                    <li className="breadcrumb-item active">Create Product</li>
                </ol>

                {content}
            </div>
        </div>
    );
}

export default CreateProduct;
