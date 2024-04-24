import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Language() {
    const {language, changeLanguage} = useLanguage();
  return (
        <div>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ka")}>KA</button>
        </div>
  )
}
