import React, { useContext } from 'react'
import style from '../style/sass/style.module.scss'
import { StyleContext } from './context/StyleContext'
import NeumorphicElement from './neumorphic/NeumorphicElement'
export const Navbar = () => {
  const {
    handleChangeColor: styleHandleChangeColor,
    styles: { mainColor },
  } = useContext(StyleContext)

  const handleChangeColor = (event) => {
    const isChecked = event.target.checked
    styleHandleChangeColor(isChecked)
  }
  return (
    <NeumorphicElement form={'flat'} className={style.myTopNavbar} nTestId="navbar">
      <div className={style.logo}>
        <p>{'<LUGAMAFE/>'}</p>
      </div>
      <div className={style.lights}>
        <p>{mainColor}</p>
        <label className={style.toggle}>
          <input
            onChange={handleChangeColor}
            className={style.toggleCheckbox}
            type="checkbox"
          ></input>
          <div className={style.toggleSwitch}></div>
        </label>
      </div>
      <NeumorphicElement className={style.changeIdiom} neumorphicOptions={{"form":"level","size":"55","intensity":"0.19","lightSource":1}}>
        <div className={style.buttons}>
          <NeumorphicElement element={"button"} className={style.esBoton} neumorphicOptions={{"form":"flat","size":100,"intensity":0.15,"lightSource":1}}>
            <p>Español</p>
          </NeumorphicElement>
          <NeumorphicElement element={"button"} className={style.InButton} neumorphicOptions={{"form":"pressed","size":100,"intensity":"0.13","lightSource":1}}>
            <p>English</p>
          </NeumorphicElement>
        </div>
      </NeumorphicElement>
      <div className={style.menuToggle}>
        <button>
          <svg>
            <image href="../../assets/images/bx-menu.svg" />
          </svg>
        </button>
      </div>
    </NeumorphicElement>
  )
}
