import Table from "../../components/Table";
import { useFetchOrderQuery ,useUpdateOrderStatusMutation } from '../../store';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";


function OrderTable() {

  const { data, error, isFetching } = useFetchOrderQuery();
 const [updateOrderStatus,Results] = useUpdateOrderStatusMutation()
  let content;

  const keyFn = (order) => {
    return order.ID;
  };

  const handelupdate = (order) =>
  {
    updateOrderStatus(order)
  }

  if (isFetching || Results.isLoading) {
    content = <Loading/>
  } else if (error) {
    content = <div>Error loading.</div>;
  } else {

    const config = [
        {
            label: 'User Name',
            render: (order) => <p className="fw-normal mb-1">{order.FirstName} {order.LastName}</p>,
        },
        {
         label: 'OrderDate',
         render: (order) => <p className="fw-normal mb-1">{order.OrderDate}</p>,
       },
       {
         label: 'LocationDelivery ',
         render: (order) => <p className="fw-normal mb-1">{order.LocationDelivery}</p>,
       },
       {
         label: 'Total Price',
         render: (order) => <p className="fw-normal mb-1">{order.TotalPrice}$</p>,
       },
       {
         label: 'statue',
         render: (order) => <p className="fw-normal mb-1">{order.statue}</p>,
       },
       {
        label: 'details',
        render: (order) => 
        <Link to="/admin/orderd" state={{order}} >
              <Button  rounded backgroundColor='#32F9DD' color='white'>  Details</Button>
        </Link>
      },
      {
        label: 'Received',
        render: (order) =>
        <Button onClick={()=>{
            handelupdate( {ID:order.ID , status:"Received"} )} }    rounded backgroundColor='#000066' color='white'> Received </Button>
        ,
      },
      {
        label: 'Reject',
        render: (order) =>
          <Button onClick={()=>{handelupdate({ID:order.ID , status:"Reject"})}} rounded backgroundColor='#b30000' color='white'> Reject </Button>
        ,
      },
    ];
    content = <Table data={data} config={config} keyFn={keyFn} />;
  }

  return (

      <div className="content-wrapper " >
      <div className="container-fluid" style={{marginTop:'150px'}}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <div>Dashboard</div>
          </li>
          <li className="breadcrumb-item active">Order Table</li>
        </ol>
        {content}
      </div>
      </div>
  );
}

export default OrderTable;
