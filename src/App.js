import logo from './logo.svg';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, fetchPublications } from './redux/slices/postsSlice';
import Header from './components/shared/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SpeakingConsulting from './pages/SpeakingConsulting';
import Publications from './pages/Publications';
import Achievements from './pages/Achievements';
import Gphi from './pages/Gphi';
import HappyAvatar from './pages/HappyAvatar';
import ContactUs from './pages/ContactUs';
import { fetchPages } from './redux/slices/pagesSlice';
import Footer from './components/shared/footer/Footer';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		// dispatch(fetchPosts())
		// dispatch(fetchPages())
		// dispatch(fetchPublications())
	}, [])
	
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/speaking-consulting' element={<SpeakingConsulting />}></Route>
				<Route path='/publications' element={<Publications />}></Route>
				<Route path='/achievements' element={<Achievements />}></Route>
				<Route path='/gphi' element={<Gphi />}></Route>
				<Route path='/my-happy-avatar' element={<HappyAvatar />}></Route>
				<Route path='/contact-us' element={<ContactUs />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
