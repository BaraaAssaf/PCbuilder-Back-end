
function OrderCard({ order }) {

    return (
  <div className="col-xs-12 col-sm-6 col-md-4">
       <div className="card">
    <div className="view overlay">
         <img className="card-img-top" src={`data:image/jpeg;base64,${order.ImagePath}`} alt="Cardimagecap" width={350} height={350}/>
            <div className="mask rgba-white-slight"></div>
    </div>
    <div className="card-body">
      <h4 className="card-title">{order.Productname}</h4>
      <p className="card-text">{order.SellingPrice}$</p>
      <p className="card-text">Quntity: {order.Quntity}$</p>
    </div>
  </div>
  </div>
    )
}

export default OrderCard;
