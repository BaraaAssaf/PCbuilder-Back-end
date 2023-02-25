
import Button from "./Button";
import { useUpdateQuntityMutation } from '../store';

function CartItem({ item }) {

  const [updateQuntity, Results] = useUpdateQuntityMutation();
  const handelClickminus = (item) => {
    const quntity = item.quntity - 1;
    updateQuntity({ quntity, ID: item.ID })
  };

  const handelClickplus = (item) => {
    const quntity = item.quntity + 1;
    updateQuntity({ quntity, ID: item.ID })
  };


  return (

    <div className="d-flex align-items-center mb-5">
      <div className="flex-shrink-0">
        <img src={`data:image/jpeg;base64,${item.ImagePath}`}
          className="img-fluid" style={{ width: '150px' }} alt="Genericplaceholderimage" />
      </div>
      <div className="flex-grow-1 ms-3">
        <div className="float-end text-black"><i className="fas fa-times"></i></div>
        <h5 className="text-primary">{item.Productname}</h5>
        <div className="d-flex align-items-center">
          <p className="fw-bold mb-0 me-5 pe-3">{item.SellingPrice}$</p>
          <div className="d-flex justify-content-center">
            <Button className="mr-3" onClick={() => handelClickminus(item)} loading={Results.isLoading} > - </Button>
            <p className="fw-bold text-black mt-2"> {item.quntity}</p>
            <Button className="ml-3" onClick={() => handelClickplus(item)} loading={Results.isLoading} > + </Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CartItem;
