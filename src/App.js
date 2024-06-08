import logo from './logo.svg';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, fetchPublications } from './redux/slices/postsSlice';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchPages())
		dispatch(fetchPublications())
		AOS.init();
	}, [])
	
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/dr-liana' element={<HomePage />}></Route>
				<Route path='/about' element={<AboutPage />}></Route>
				<Route path='/speaking-consulting' element={<SpeakingConsultingPage />}></Route>
				<Route path='/publications' element={<PublicationsPage />}></Route>
				<Route path='/achievements' element={<AchievementsPage />}></Route>
				<Route path='/gphi' element={<GphiPage />}></Route>
				<Route path='/my-happy-avatar' element={<HappyAvatarPage />}></Route>
				<Route path='/contact-us' element={<ContactUsPage />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
