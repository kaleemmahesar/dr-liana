import logo from './logo.svg';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPosts, fetchPublications, fetchTestimonials } from './redux/slices/postsSlice';
import Header from './components/shared/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchPages } from './redux/slices/pagesSlice';
import Footer from './components/shared/footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpeakingConsultingPage from './pages/SpeakingConsultingPage';
import PublicationsPage from './pages/PublicationsPage';
import AchievementsPage from './pages/AchievementsPage';
import GphiPage from './pages/GphiPage';
import HappyAvatarPage from './pages/HappyAvatarPage';
import ContactUsPage from './pages/ContactUsPage';
import SinglePublication from './components/SinglePublication';
import Login from './components/Login';
import Cf7FormWrapper from './components/CForm/cf7-form-wrapper';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchPages())
		dispatch(fetchPublications())
		dispatch(fetchTestimonials())
		// AOS.init();
	}, [])
	
	// function Form({ handler, isLoading, isSent, hasError }) {
	// 	const [formState, setFormState] = useState([])
	  
	// 	const handleFieldChange = (field, e) => {
	// 	  setFormState({
	// 		...formState,
	// 		[field]: e.target.value,
	// 	  })
	// 	}
	  
	// 	const handleFormSubmit = (e) => {
	// 		//   handler(e, formState)
	// 		// console.log(e)
	// 	}
	  
	// 	return (
	// 	  <form onSubmit={handleFormSubmit}>
	// 		<div>isLoading: {isLoading ? "Loading" : "false"}</div>
	// 		<div>isSent: {isSent ? "Sent" : "false"}</div>
	// 		<div>Error: {hasError || "null"}</div>
	  
	// 		<div>Enter your name:</div>
	// 		<input onChange={(e) => handleFieldChange("your-name", e)} type="text" />
	// 		<div>Enter your email:</div>
	// 		<input onChange={(e) => handleFieldChange("your-email", e)} type="text" />
	// 		<div>Enter your phone:</div>
	// 		<input onChange={(e) => handleFieldChange("your-phone", e)} type="text" />
	// 		<div>Enter your country:</div>
	// 		<input onChange={(e) => handleFieldChange("country", e)} type="text" />
	// 		<input type="submit" value="Send" />
	// 	  </form>
	// 	)
	// }

	return (
		<BrowserRouter>
			<Header />
			{/* <Cf7FormWrapper url="http://localhost/wp-react/server">
				<Form />
			</Cf7FormWrapper> */}
			<Routes>
				<Route path='/dr-liana' element={<HomePage />}></Route>
				<Route path='/about' element={<AboutPage />}></Route>
				<Route path='/speaking-consulting' element={<SpeakingConsultingPage />}></Route>
				<Route path='/publications' element={<PublicationsPage />}></Route>
				<Route path='/achievements' element={<AchievementsPage />}></Route>
				<Route path='/gphi' element={<GphiPage />}></Route>
				<Route path='/my-happy-avatar' element={<HappyAvatarPage />}></Route>
				<Route path='/contact-us' element={<ContactUsPage />}></Route>
				<Route path='/publications/:name' element={<SinglePublication />}></Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
