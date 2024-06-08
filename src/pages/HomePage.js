import React, { useEffect, useState } from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import Publications from '../components/Publications'
import Achievements from '../components/Achievements'
import { Spinner } from 'react-bootstrap'

const HomePage = () => {
	
	return (
		<main className='site-content'>
			<Intro />
			<About />
			<Achievements />
			<Publications />
			<Testimonials />
			<ContactUs />
		</main>
	)
}

export default HomePage