import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHome } from '../redux/slices/home';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/home/Slider';
import Ad from '../components/home/Ad';
import Search from '../components/home/Search';
import Wave from '../components/Wave';
import AboutComp from '../components/home/AboutComp';
import Language from '../components/Language';

export default function Home() {
  const dispatch = useDispatch();
  const { language, changeLanguage } = useLanguage();
  const { home } = useSelector(state => state.home);
  const loading = home.status === 'loading'

  useEffect(() => {
    dispatch(fetchHome({locale: language}))
  }, [language])

  if(loading) return <div>LOADING SKELETON</div>
  
  return (
    <main className="flex gap-5 flex-col items-center ">
      <Header/>
      <Slider/>
      <Ad/>
      <Search/>
      <Wave/>
      <AboutComp/>
      <Footer/>
  </main>
  )
}
