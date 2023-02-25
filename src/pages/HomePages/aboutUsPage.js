import React from 'react';
import aboutimg from  '../../images/Aboutus.jpg'
import { FaShippingFast } from 'react-icons/fa';
import { MdHighQuality } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';

function AboutUsPage()
{

    return(
        <section className="section_all " id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title_all text-center">
                            <h3 className="font-weight-bold">Welcome To <span className="text-custom">PC Builder</span></h3>
                       
                        </div>
                    </div>
                </div>

                <div className="row vertical_content_manage mt-5">
                    <div className="col-lg-6">
                        <div className="about_header_main mt-3">
                            <div className="about_icon_box">
                            </div>
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Why PC Builder?</h4>
                            <p className="text-muted mt-3">
                            At PC Builder , all that you see is hand-picked and 100% true - 
                            sourced straight from the best brands and their approved affiliates from 
                            US and over the world, only for you.
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img_about mt-3">
                            <img src={aboutimg} alt="" className="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <i> <FaShippingFast/></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Fast Deliver</h5>
                                <p className="edu_desc mt-3 mb-0 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                <i> <FaDollarSign/></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Free Deliver</h5>
                                <p className="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                <i> <MdHighQuality/></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Best Quality</h5>
                                <p className="edu_desc mb-0 mt-3 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  )

}

export default AboutUsPage;