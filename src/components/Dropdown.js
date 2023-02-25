
import Cookies from "js-cookie";
import * as  React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";


function DropdownMenu({ user }) {
   const navigate = useNavigate();

   const handelLogout = () => {
      localStorage.clear('user-info');
      Cookies.remove('token');
      navigate('/login');
   }

   return (
      <Dropdown>
         <Dropdown.Toggle variant="" id="dropdown-basic" >
            <img src={`data:image/jpeg;base64,${user.image}`} className="rounded-circle" height='30' alt="" />
         </Dropdown.Toggle>

         <Dropdown.Menu>

            <Dropdown.Item>
               <Link to='/profile'>
                  Profile
               </Link>
            </Dropdown.Item>

            <Dropdown.Item onClick={handelLogout}>Logout</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>

   );
};

export default DropdownMenu;