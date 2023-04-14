import React, { useContext } from 'react'
import index from '../style/sass/index.module.scss'
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
    <NeumorphicElement form={'convex'} className={index.myTopNavbar}>
      <div className={index.logo}>
        <p>{'<LUGAMAFE/>'}</p>
      </div>
      <div className={index.lights}>
        <p>{mainColor}</p>
        <label className={index.toggle}>
          <input
            onChange={handleChangeColor}
            className={index.toggleCheckbox}
            type="checkbox"
          ></input>
          <div className={index.toggleSwitch}></div>
        </label>
      </div>
      <div className={index.changeIdiom} form="convex" size="20px">
        <div className={index.buttons}>
          <button className={index.esBoton}>
            <p>Español</p>
          </button>
          <button className={index.InButton}>
            <p>English</p>
          </button>
        </div>
      </div>
      <div className={index.menuToggle}>
        <button>
          <svg>
            <image href="../../assets/images/bx-menu.svg" />
          </svg>
        </button>
      </div>
    </NeumorphicElement>
  )
}
