import React, { useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field, useField  } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Cf7FormWrapper from './CForm/cf7-form-wrapper';

const validationSchema = Yup.object().shape({
	title: Yup.string().min(2, 'Name must be minimum 2').max(100, 'Name must not be more than 100 characters').required('Name is required'),
	content: Yup.string().required('Email is required')
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

const jsonToFormData = (json) => {
	try {
	  const data = new FormData()
  
	  for (let k in json) {
		data.append(k, json[k])
	  }
  
	  return data
	} catch (error) {
	  console.error(error)
	  return null
	}
  }


  const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	}
	else
		delete axios.defaults.headers.common["Authorization"];
 }

const ContactUs = () => {

	const [formSubmitting, setFormSubmitting] = useState(false)
	const [isSent, setSent] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const [hasError, setError] = useState(null)
	// const postUserData = (values, nonce) => {
	// 	// console.log(val)
	// 	axios.get(`http://localhost/wp-react/server/api/user/register/?username=${values.firstName}&email=${values.email}&nonce=${nonce}&display_name=${values.lastName}&insecure=cool`)
	// 	.then(res => {
	// 		console.log('User inserted')
	// 	}).catch(error => {
	// 		console.log(error.response)
	// 	})
	// }
	// const JWT = require('jsonwebtoken')
	const jwtKey = 'e-comm'
	
	const user = localStorage.getItem('user');
	

	const handlePostRequest = (values) => {
		// axios.post('http://localhost/wp-react/server/wp-json/contact-form-7/v1/contact-forms', {

		// }).then(response => {
												
		// 										})
		// axios.post('http://localhost/wp-react/server/wp-json/contact-form-7/v1/contact-forms', {
		// 	values
		//   })
		//   .then(function (response) {
		// 	console.log(response);
		//   })
		//   .catch(function (error) {
		// 	console.log(error);
		//   });
		console.log(values)
	}
	return (
		<div className='contactus-area p-top-bottom-90'>
			<Container data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
				<Row>
					<Col>
						<h2>Get in Touch with<span>Dr. Liana Lianov</span></h2>
						<p className='para'>Please fill out the form below with your contact information and your message. We strive to respond to all inquiries promptly.</p>
						<Cf7FormWrapper url="http://localhost/wp-react/server" formId="c4855cb">
							<Formik
								initialValues={{
									title: '',
									content: '',
									// email: '',
								}}
								validationSchema={validationSchema}
								onSubmit={async values => {
									// same shape as initial values
									const siteUrl = 'http://localhost/wp-react/server'
									const formId = 'c4855cb'
									const apiUrl =`${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`
									try {
										const loginPayload = {
											username: 'Admin',
											password: 'Admin'
										  }
										
										  axios.post("http://localhost/wp-react/server/wp-json/jwt-auth/v1/token", loginPayload)
											.then(response => {
											  //get token from response
											  const token  =  response.data.token;
												
											  //set JWT token to local
											  localStorage.setItem("token", token);
												
											  console.log(token)
											  //set token to axios common header
											  setAuthToken(token);
											  handlePostRequest(values);
									   //redirect user to home page
											//   window.location.href = '/'
											})
											.catch(err => console.log(err));
										// fetch(apiUrl, {
										// 	method: "POST",
										// 	body: jsonToFormData(values),
										//   })
										// 	.then((resp) => resp.json())
										// 	.then((resp) => {
										// 	  if (resp.status !== "mail_sent") throw resp.message
										// 	  setSent(true)
										// 	})
										// 	.catch((error) => {
										// 	  setError(error)
										// 	})
										// 	.finally(() => {
										// 	  setLoading(false)
										// 	})
										// console.log(values)
										// const { token } = JSON.parse(user);
										// const headers = {
										// 	Authorization: `Bearer ${token}`,
										// };
										// const post = {
										// 	...values,
										// 	status: 'publish'
										// };

										// axios.post(`${process.env.REACT_APP_API_ROOT}/posts`, post, {
										// 	headers: headers
										// })
										// .then((res) => {
										// 	console.log('res', res);
										// })
										// .catch((err) => {
										// 	console.log('err', err.message);
										// });
										// setFormSubmitting(true);
										// Perform form submission logic here
										// console.log(values);
										// axios.get('http://localhost/wp-react/server/api/get_nonce/?controller=user&method=register')
										// .then(res => {
										// 	console.log(res.data)
										// 	postUserData(values, res.data.nonce)
										// }).catch(error => {
										// 	console.log(error.response)
										// })
										// setFormSubmitting(false);
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
												<ContactFormField name="title" type="text" label="First Name" placeholder="First Name" />
											</Col>
											<Col lg={6}>
												<ContactFormField name="content" type="text" label="Last Name" placeholder="Last Name" />
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
						</Cf7FormWrapper>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ContactUs