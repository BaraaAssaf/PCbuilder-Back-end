
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useCreateContactUsMutation } from '../../store';
import {MdLocationOn} from 'react-icons/md'
import {MdOutlinePhoneAndroid} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'

import * as Yup from "yup";
function ContactUsPage() {
	const [createContactUs] = useCreateContactUsMutation();
	const initialValues = {
		Name: '',
		Subject: '',
		Email: '',
		Message: ''
	};
	const validationSchema = Yup.object().shape({
		Name: Yup.string().required("This field is required!"),
		Subject: Yup.string().required("This field is required!"),
		Email: Yup.string().required("This field is required!"),
		Message: Yup.string().required("This field is required!"),
	});

	const handlesubmit =  (formValue) => {
		
		createContactUs(formValue)
		   };

	return (
		<section className="ftco-section">
			<div className="container bg-dark">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section">Contact Form</h2>
					</div>
				</div>


				<div className="row justify-content-center ">
					<div className="col-md-12">
						<div className="wrapper">
							<div className="row no-gutters">
								<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
									<div className="contact-wrap w-100 p-md-5 p-4">
										<h3 className="mb-4">Get in touch</h3>
										<div id="form-message-warning" className="mb-4"></div>
										<div id="form-message-success" className="mb-4">
											Your message was sent, thank you!
										</div>

										<Formik
											initialValues={initialValues}
											validationSchema={validationSchema}
											onSubmit={handlesubmit}>
											<Form className="contactForm">
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label className="label" forHtml="Name">Name</label>
															<Field name="Name" type="text" className="form-control" placeholder="Name" />
															<ErrorMessage
																name="Name"
																component="div"
																className="alert alert-danger"
															/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
														<label className="label" forHtml="Email">Email Address</label>
															<Field name="Email" type="email" className="form-control" placeholder="Email" />
															<ErrorMessage
																name="Email"
																component="div"
																className="alert alert-danger"
															/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
														<label className="label" forHtml="Subject">Subject</label>
															<Field name="Subject" type="text" className="form-control" placeholder="Subject" />
															<ErrorMessage
																name="Subject"
																component="div"
																className="alert alert-danger"
															/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">														
															<label className="label" forHtml="Message">Message</label>
															<Field name="Message" as="textarea" className="form-control" cols="30" rows="4" placeholder="Message"/>
															<ErrorMessage
																name="Message"
																component="div"
																className="alert alert-danger"
															/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<input type="submit" value="Send Message" className="btn btn-primary" />
															<div className="submitting"></div>
														</div>
													</div>
												</div>


											</Form>
										</Formik>

									</div>
								</div>
								<div className="col-lg-4 col-md-5 d-flex align-items-stretch">
									<div className="info-wrap bg-primary w-100 p-md-5 p-4">
										<h3>Let's get in touch</h3>
										<p className="mb-4">We're open for any suggestion or just to have a chat</p>
										<div className="dbox w-100 d-flex align-items-start">
											<div className="icon d-flex align-items-center justify-content-center">
												<span className="fa fa-map-marker"><MdLocationOn/></span>
											</div>
											<div className="text pl-3">
												<p><span>Address:</span>Jordan</p>
											</div>
										</div>
										<div className="dbox w-100 d-flex align-items-center">
											<div className="icon d-flex align-items-center justify-content-center">
												<span className="fa fa-phone"><MdOutlinePhoneAndroid/></span>
											</div>
											<div className="text pl-3">
												<p><span>Phone:</span>+9623333333333</p>
											</div>
										</div>
										<div className="dbox w-100 d-flex align-items-center">
											<div className="icon d-flex align-items-center justify-content-center">
												<span className="fa fa-paper-plane"><MdEmail/></span>
											</div>
											<div className="text pl-3">
												<p><span>Email:</span> PCbuilder@gmail.com</p>
											</div>
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

};

export default ContactUsPage;