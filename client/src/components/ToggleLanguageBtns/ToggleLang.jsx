import React from "react"
import { useTranslation } from "react-i18next"

export default function ToggleLang() {
  const [ t, i18n ] = useTranslation()


  return (
    <div className='changeLang'>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("cz")}>CZ</button>
    </div>
  )
}
