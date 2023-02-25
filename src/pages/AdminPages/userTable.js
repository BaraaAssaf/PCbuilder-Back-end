import Table from "../../components/Table";
import { useFetchUsersQuery } from '../../store';
import Loading from "../../components/Loading";



function UserTable() {
  const { data, error, isFetching } = useFetchUsersQuery();

  let content;

  const keyFn = (user) => {
    return user.ID;
  };


  if (isFetching) {
    content = <Loading/>
    } else if (error) {
    content = <div>Error loading.</div>;
  } else {
    const config = [
        {
          label: 'imgae',
            render: (user) => <>
                <img className="img-account-profile rounded-circle mb-2" src={`data:image/jpeg;base64,${user.image}`} alt="" style={{ width: "60px" }} />
            </>,
          },
      {
        label: 'Name ',
        render: (user) => <p className="fw-normal mb-1">{user.FirstName} {user.LastName}</p>,
      },
 
      {
        label: 'Email',
        render: (user) => <p className="fw-normal mb-1">{user.Email}</p>,
      },
      {
        label: 'City',
        render: (user) => <p className="fw-normal mb-1">{user.Address}</p>,
      },
      {
        label: 'Phone Number',
        render: (user) => <p className="fw-normal mb-1">{user.Phone}</p>,
      },
    ];
    content = <Table data={data} config={config} keyFn={keyFn} />;
  }

  return (
    <>
    <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> Data Table Example</div>
        <div className="card-body">
          <div className="table-responsive">
                      {content}
          </div>
        </div>
      </div>

</>
  );
}

export default UserTable;
