import React, { useContext } from 'react'
import style from '../style/sass/style.module.scss'
import { StyleContext } from './context/StyleContext'
import NeumorphicElement from './NeomorphicElement'
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
    <NeumorphicElement form={'convex'} className={style.myTopNavbar}>
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
      <div className={style.changeIdiom} form="convex" size="20px">
        <div className={style.buttons}>
          <button className={style.esBoton}>
            <p>Español</p>
          </button>
          <button className={style.InButton}>
            <p>English</p>
          </button>
        </div>
      </div>
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
