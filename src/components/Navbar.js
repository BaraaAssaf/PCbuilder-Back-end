
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCountCartQuery } from '../store';
import { useEffect, useState } from 'react'
import pic from '../images/pc-builder-logo.svg';
import Button from "./Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import DropdownMenu from "./Dropdown";
import jwt_decode from 'jwt-decode'
function Navbar() {
  let id;
  const [user,setUser] = useState({});
  if(Cookies.get('token'))
  {
  var decoded = jwt_decode(Cookies.get('token'));
  id = decoded.token.user_id
  }
  useEffect(() => {
    if(Cookies.get('token'))
    setUser(JSON.parse(localStorage.getItem('userinfo'))[0])

  },[user]);
  const { data } = useCountCartQuery(id);

   
  

  return (

    <nav className="navbar navbar-expand-lg" data-bs-theme="light"  style={{backgroundColor:'whitesmoke'}}>


    <div className="container-fluid ">
        <div className="navbar-brand mt-0" >
           <img src={pic} alt="Bootstrap" width="150" />
      </div>
      <ul className="navbar-nav mt-1 mb-0">
        <li className="nav-item ">
          <Link to="/" className="nav-link btn" >Home</Link>
        </li>
        <li className="nav-item ">
          <Link to="/about" className="nav-link btn" >About Us</Link>
        </li>
        <li className="nav-item ">
      
        </li>
        <li className="nav-item ">
        <Link to="/contact"  className="nav-link btn">ContactUs</Link>
        
        </li>

        <li className="nav-item">
        <Link to="/testMonial"  className="nav-link btn">TestMonial</Link>
        </li>

{Cookies.get('token') ?<> 
  
<li className="nav-item ">
     <Link to="/user" className="nav-link btn">Shop</Link>
</li>

<li className="nav-item" >
  <DropdownMenu user={user}/>
 </li>

<li className="nav-item mt-2" style={{marginLeft: '20px' , marginRight: '30px'}}>

      <Link to="/cart"> 
      
 <AiOutlineShoppingCart  style={{color:'#32F9DD' ,width:'30px' , height:'30px'}}/>  
 {data && <span className="position-absolute start-1 translate-middle p-1 bg-danger badge rounded-pill btn">
     {data.count}
 </span>
}
</Link>
 </li>

{ decoded.token.role_id === 2 && <>
  <li className="nav-item ">
   <Link to="/admin/dashboard" className="nav-link btn">Dashboard</Link>
</li>
   </>} 

 </>
 :
 <>
       <li className="nav-item mt-2" style={{marginLeft: '50px'}}>
       <Link to="/login"><Button rounded backgroundColor='#32F9DD' color='white' >
           Login</Button></Link>
       </li>
     <li className="nav-item mt-2" style={{marginLeft: '10px'}}>
     <Link to="/register">  <Button rounded backgroundColor='#32F9DD' color='white'>SginUp</Button></Link>
      </li>
 </>
 }
      </ul>
      </div>
</nav>


  );
}

export default Navbar;
