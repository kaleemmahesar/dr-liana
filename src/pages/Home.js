import React, { useEffect, useState } from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import Publications from '../components/Publications'
import Achievements from '../components/Achievements'
import { Spinner } from 'react-bootstrap'

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoading = () => {
		setIsLoading(false);
	}

	useEffect(()=>{
		window.addEventListener("load",handleLoading);
		return () => window.removeEventListener("load",handleLoading);
	},[])

	return !isLoading ? (
		<main className=''>
			<Intro />
			<About />
			<Achievements />
			<Publications />
			<Testimonials />
			<ContactUs />
		</main>
	): (
		<div className='spinner-wrapper'>
			<Spinner animation="grow" variant="info" />
		</div>
	)
}

export default Home