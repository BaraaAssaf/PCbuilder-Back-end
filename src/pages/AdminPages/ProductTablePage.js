import Table from "../../components/Table";
import { useFetchProductQuery, useUploadimageProductMutation , useRemoveProductMutation } from '../../store';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";


function ProductTablePage() {
  const { data, error, isFetching } = useFetchProductQuery();
  const [uploadimageProduct, Results] = useUploadimageProductMutation();
  const [removeProduct] = useRemoveProductMutation()
  let content;

  const keyFn = (product) => {
    return product.ID;
  };

  const handleFileChange = (e, productid) => {
    const files = e.target.files;
    const file = files[0];
    const formData = new FormData();
    formData.append("image", file);
    uploadimageProduct({ formData, productid });
  };
  
  const handeldelete = (id) =>
  {
    removeProduct(id);
  }

  if (isFetching || Results.isLoading) {
    content = <Loading/>
  } else if (error) {
    content = <div>Error loading.</div>;
  } else {

    const config = [
      {
        label: 'Name',
        render: (product) => <p className="fw-normal mb-1">{product.Productname}</p>,
      },
      {
        label: 'imgae',
        render: (product) => <>
          <img className="card-img-top" src={`data:image/jpeg;base64,${product.ImagePath}`} alt="Cardimagecap" height={200} width={50} />
          <input type="file" onChange={(e) => handleFileChange(e, product.ID)} className='btn btn-primary sm' />
        </>,
      },
      {
        label: 'Cost Price ',
        render: (product) => <p className="fw-normal mb-1">{product.CostPrice}$</p>,
      },
      {
        label: 'Selling Price',
        render: (product) => <p className="fw-normal mb-1">{product.SellingPrice}$</p>,
      },
      {
        label: 'Details',
        render: (product) => <p className="fw-normal mb-1">{product.Details}</p>,
      },
      {
        label: 'Quntity',
        render: (product) => <p className="fw-normal mb-1">{product.Quntity}</p>,
      },

      {
        label: 'Edit',
        render: (product) =>
          <>
            <Link to="/editproduct" state={{ product }} >
            <Button rounded backgroundColor='#000066' color='white'> Edit</Button>
            </Link>
          </>
      ,
      },
      {
        label: 'delete',
        render: (product) =><Button onClick={()=>{handeldelete(product.ID)}} rounded backgroundColor='#b30000' color='white'> Delete</Button>
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
      <li className="breadcrumb-item active">Product Table</li>
    </ol>
    <Link to="/createproduct">
    <Button  rounded backgroundColor='#32F9DD' color='white'>  Add New Product</Button>
</Link>
    {content}
  </div>
  </div>


  );
}

export default ProductTablePage;
