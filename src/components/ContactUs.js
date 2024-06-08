import React, { useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field, useField  } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	firstName: Yup.string().min(2, 'Name must be minimum 2').max(100, 'Name must not be more than 100 characters').required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required')
});

const ContactFormField = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	return (
		<>
			<label className="form-label">{label}</label>
			<input className='form-control' {...field} {...props} />
			{meta.touched && meta.error ? (
		  		<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

const ContactUs = () => {

	const [formSubmitting, setFormSubmitting] = useState(false)
	
	return (
		<div className='contactus-area p-top-bottom-90'>
			<Container data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
				<Row>
					<Col>
						<h2>Get in Touch with<span>Dr. Liana Lianov</span></h2>
						<p className='para'>Please fill out the form below with your contact information and your message. We strive to respond to all inquiries promptly.</p>
						<Formik
							initialValues={{
								firstName: '',
								lastName: '',
								email: '',
							}}
							validationSchema={validationSchema}
							onSubmit={async values => {
								// same shape as initial values
								try {
									setFormSubmitting(true);
									// Perform form submission logic here
									console.log(values);
									// Set submitting to false after successful submission
									setFormSubmitting(false);
								} catch (error) {
									// Handle form submission error
									console.error(error);
									setFormSubmitting(false);
								}
							}}
						>
							{(props) => (
								<Form>
									<Row>
										<Col lg={6}>
											<ContactFormField name="firstName" type="text" label="First Name" placeholder="First Name" />
										</Col>
										<Col lg={6}>
											<ContactFormField name="lastName" type="text" label="Last Name" placeholder="Last Name" />
										</Col>
										<Col lg={12}>
											<ContactFormField name="email" type="text" label="Email" placeholder="Email" />
										</Col>
										<Col lg={12} className='text-center'>
											<button className='btn btn-primary' type="submit">Submit</button>
										</Col>
									</Row>
								</Form>
							)}
						</Formik>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ContactUs