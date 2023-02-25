
import { useFetchOrderByIDQuery } from '../store';
import OrderCard from './OrderCard';
import { useLocation } from 'react-router-dom';
import Loading from './Loading';

function OrderDetails() {
  const location = useLocation();
  const { order } = location.state;
  const { data, error, isFetching } = useFetchOrderByIDQuery(order);
  let content;
  if (isFetching) {
    content = <Loading />;
  } else if (error) {
    content = <div>Error loading </div>;
  } else {
    content = data.map((order) => {
      return <OrderCard key={order.ID} order={order} />;
    });
  }
  return (
    <div className="content-wrapper " >
      <div className="container-fluid" style={{ marginTop: '150px' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <div>Dashboard</div>
          </li>
          <li className="breadcrumb-item active">Order Table</li>
        </ol>
        <div className="row">
          <div className="col">
            <div className="card-deck row">

              {content}


            </div>

          </div>

        </div>

      </div>
    </div>


  )
}

export default OrderDetails;