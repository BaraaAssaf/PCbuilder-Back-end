import  DropdownMenu  from './Dropdown';
import {useEffect , useState} from "react";
import Cookies from 'js-cookie';
import pic from '../images/pc-builder-logo.svg';
import { Link } from 'react-router-dom';

function AdminSidebar(){

    const [user,setUser] = useState({});

    useEffect(() => {
      if(Cookies.get('token'))
      setUser(JSON.parse(localStorage.getItem('userinfo'))[0]);
    },[user]);
    return(
        <>       
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div className="navbar-brand">  <img src={pic}  height="25" alt="" loading="lazy"/> </div>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link to='/admin/dashboard' className="nav-link">
            <span className="nav-link-text">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
        <Link to='/admin/product' className="nav-link">
            <span className="nav-link-text">Product Table</span>
          </Link>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
        <Link to='/admin/order' className="nav-link">
            <span className="nav-link-text">Order Table</span>
          </Link>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
        <Link to='/admin/contacttable' className="nav-link">
            <span className="nav-link-text">ContactUs Table</span>
          </Link>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
        <Link to='/admin/test' className="nav-link">
            <span className="nav-link-text">TestMonial Table</span>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <div className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left"></i>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item" >
        <DropdownMenu user={user} />
        </li>
      </ul>
    </div>
  </nav>     
    </>
    )
}

export default AdminSidebar;