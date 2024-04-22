import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHome } from '../redux/slices/home';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Language from '../components/Language';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const dispatch = useDispatch();
  const { language, changeLanguage } = useLanguage();
  const { home } = useSelector(state => state.home);
  const loading = home.status === 'loading'

  useEffect(() => {
    dispatch(fetchHome({locale: language}))
  }, [language])

  if(loading) return <div>LOADING SKELETON</div>
  
  console.log(home.item)
  return (
    <div>
      {home.item.title}<br/>
      <br/>
      {home.item.aboutclub}<br/>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('ka')}>ka</button>
      <button onClick={() => changeLanguage('ru')}>ru</button>
    </div>
  )
}
