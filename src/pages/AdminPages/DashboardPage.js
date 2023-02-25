import Chart from "../../components/Chart";
import StatisticsCard from "../../components/StatisticsCard";
import UserTable from "./userTable";


function Dashboard() {

  return (
    <>


      <div className="content-wrapper " >
        <div className="container-fluid" style={{ marginTop: '150px' }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>Dashboard</div>
            </li>
            <li className="breadcrumb-item active">My Dashboard</li>
          </ol>
          <StatisticsCard />
          <Chart />
          <UserTable />
        </div>

      </div>


    </>
  )
}

export default Dashboard;