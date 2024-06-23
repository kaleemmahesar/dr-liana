import React, { useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
	fname: Yup.string().min(2, 'Name must be minimum 2').max(100, 'Name must not be more than 100 characters').required('Name is required'),
	email: Yup.string().email().required('Email is required')
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

	const form = useRef();
	const toastId = React.useRef(null);
	const notify = () => toastId.current = toast.info("Sending Message...", {
		position: "bottom-right"
	});
	const handlePostRequest = (values) => {
		emailjs.sendForm('service_8sih95e', 'template_eyctie6', form.current, {
			publicKey: 'h7UubPOdJWxYTc10r',
		}).then(() => {
			console.log('SUCCESS!');
			const dismiss = () => toast.dismiss(toastId.current);
			dismiss()
			toast.success("Message Sent Successful...", {
				position: "bottom-right"
			});
		}, (error) => {
			console.log('FAILED...', error.text);
			toast.error("Something went wrong...", {
				position: "bottom-right"
			});
		})
	}

	return (
		<div className='contactus-area p-top-bottom-90'>
			<ToastContainer />
			<Container data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
				<Row>
					<Col>
						<h2>Get in Touch with<span>Dr. Liana Lianov</span></h2>
						<p className='para'>Please fill out the form below with your contact information and your message. We strive to respond to all inquiries promptly.</p>
						<Formik
							initialValues={{
								fname: '',
								lname: '',
								email: '',
							}}
							validationSchema={validationSchema}
							onSubmit={async values => {
								try {
									handlePostRequest(values);
									notify();
								} catch (error) {
									console.error(error);
								}
							}}
						>
							{(props) => (
								<Form ref={form}>
									<Row>
										<Col lg={6}>
											<ContactFormField name="fname" type="text" label="First Name" placeholder="First Name" />
										</Col>
										<Col lg={6}>
											<ContactFormField name="lname" type="text" label="Last Name" placeholder="Last Name" />
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