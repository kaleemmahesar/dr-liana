import logo from './logo.svg';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPosts, fetchPublications, fetchTestimonials } from './redux/slices/postsSlice';
import Header from './components/shared/header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
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
import Presentations from './pages/Presentations';
import Awards from './pages/Awards';
import ThoughtLeadership from './pages/ThoughtLeadership';
import CareerPositions from './pages/CareerPositions';
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
	
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/about' element={<AboutPage />}></Route>
				<Route path='/speaking-consulting' element={<SpeakingConsultingPage />}></Route>
				<Route path='/publications' element={<PublicationsPage />}></Route>
				<Route path='/achievements' element={<AchievementsPage />}></Route>
				<Route path='/gphi' element={<GphiPage />}></Route>
				<Route path='/my-happy-avatar' element={<HappyAvatarPage />}></Route>
				<Route path='/contact-us' element={<ContactUsPage />}></Route>
				<Route path='/publications/:name' element={<SinglePublication />}></Route>
				<Route path='/presentations' element={<Presentations />}></Route>
				<Route path='/awards' element={<Awards />}></Route>
				<Route path='/thought-leadership' element={<ThoughtLeadership />}></Route>
				<Route path='/career-positions' element={<CareerPositions />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
