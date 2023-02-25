
import Button from "./Button";
import { useAddCartMutation } from '../store';
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
function ProductCard({ product }) {

    const [addCart,Results] = useAddCartMutation();
    const handleAddCart = () => {
        const id = jwtDecode(Cookies.get('token'));
           addCart({userid:id.token.user_id , productid: product.ID});
      };

    return (
  <div className=" col-md-4">
       <div className="card">

    <div className="view overlay">
         <img className="card-img-top" src={`data:image/jpeg;base64,${product.ImagePath}`} alt="Cardimagecap" width={200} height={200}/>
            <div className="mask rgba-white-slight"></div>
    </div>

    <div class="card-body">

      <h4 className="card-title">{product.Productname}</h4>
      <p className="card-text">{product.SellingPrice}$</p>

    <Button rounded backgroundColor='#32F9DD' color='white'  onClick={handleAddCart} loading={Results.isLoading} >
            Add to Cart</Button>
    </div>

  </div>
  </div>
    )
}

export default ProductCard;
