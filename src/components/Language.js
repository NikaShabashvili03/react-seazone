import React, { useEffect, useReducer, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocales } from '../redux/slices/locales';
import clsx from 'clsx';

export default function Language() {
  const {language, changeLanguage} = useLanguage();
  const { locales } = useSelector(state => state.locales);
  const [drop, setDrop] = useState(false);
  const loading = locales.status === 'loading'
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocales())
  }, [language])

  return (
   <div className='relative'>
      <button onClick={() => setDrop(!drop)} className={"transition-all bg-white w-[81px] h-[49px] flex items-center justify-center gap-1"}>
            <p className="text-base mr-1 font-bold">{language.toUpperCase()}</p>
            <img alt="arrow" className={clsx(
              'rotate-0',
              drop && 'rotate-180 transition-all'
            )} src="/arrow.png"/>
      </button>
      {loading 
        ? <ChangeLangSkeleton drop={drop}/>
        : <ChangeLang language={language} drop={drop} locales={locales} changeLanguage={changeLanguage}/>
      }
   </div>
  )
}


const ChangeLang = ({drop, locales, changeLanguage, language}) => {
  return (
    <div className={
      clsx(
        'absolute bg-white transition-all justify-between z-40 top-50 shadow-2xl right-3  rounded-bl-3xl rounded-tr-3xl rounded-tl-lg rounded-br-lg',
        drop ? 'flex' : 'hidden'
      )
    }>
      <ul className='w-full [&>li:nth-last-child(-n+1)]:rounded-bl-3xl flex justify-center items-center flex-col gap-1 h-full'>
        {locales.item.map((locale, i) => {
          if(locale.code === language) return null;
          return (
            <li key={i} className='w-full cursor-pointer text-nowrap hover:bg-gray-100 justify-start items-center px-5 flex py-1'>
              <button onClick={() => changeLanguage(locale.code)}>{locale.name}</button>
            </li>)
        })}
      </ul>
    </div>
  )
}

const ChangeLangSkeleton = ({drop}) => {
  return (
    <div className={
      clsx(
        'absolute bg-white transition-all justify-between z-40 top-50 w-[100px] shadow-2xl right-3  rounded-bl-3xl rounded-tr-3xl rounded-tl-lg rounded-br-lg',
        drop ? 'flex' : 'hidden'
      )
    }>
      <ul className='w-full [&>li:nth-last-child(-n+1)]:rounded-bl-3xl flex justify-center items-center flex-col gap-1 h-full'>
        {Array.from({ length: 3 }).map((_, i) => 
          <li key={i} className='w-full cursor-pointer text-nowrap h-[30px] animate-pulse bg-gray-200 justify-start items-center px-5 flex py-1'></li>
        )}
      </ul>
    </div>
  )
}
