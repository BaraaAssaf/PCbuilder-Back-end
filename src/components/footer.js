import React from 'react';
import {MdLocationOn} from 'react-icons/md'
import {MdOutlinePhoneAndroid} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import { Link } from "react-router-dom";

function Footer() {

    return(
<footer className="text-center text-lg-start bg-light text-muted">
  
  <section className="">
    <div className="container text-center text-md-start mt-5 bg-dark">
    
      <div className="row mt-3">
 
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>PC Builder
          </h6>
          <p>
          Register Now & Enjoy In The First Purchase.
          </p>
        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            Pages
          </h6>
          <p>
          <Link to='/' className="text-reset">Home</Link>
          </p>
          <p>
          <Link to='/contact' className="text-reset">ContactUs</Link>

          </p>
          <p>
          <Link to='/testimonial' className="text-reset">TestMonial</Link>

          </p>
          <p>
          <Link to='/about' className="text-reset">AboutUs</Link>
          </p>
        </div>
 


        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"> <MdLocationOn/></i> </p>
          <p >
            <i className="fas fa-envelope me-3"><MdEmail/></i>
          </p>
          <p><i className="fas fa-print me-3"><MdOutlinePhoneAndroid/></i> </p>
     
        </div>
  


        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <div className="text-uppercase fw-bold mb-4">   &nbsp;&nbsp;</div>

          <p>
            <div className="text-reset">Jordan</div>
          </p>
          <p>
            <div  className="text-reset">PCbuilder@gmail.com</div>
          </p>
          <p>
            <div className="text-reset">+962333333</div>
          </p>
        </div>
        
      </div>
   
    </div>
  </section>

  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
  </div>

</footer>

    )
}

export default Footer;
