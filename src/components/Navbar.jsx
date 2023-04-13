import React, { useContext } from 'react'
import index from '../style/sass/index.module.scss'
import { StyleContext } from './context/StyleContext'
import NeumorphicElement from './NeomorphicElement'
export const Navbar = () => {
  const {
    style,
    handleChangeColor: styleHandleChangeColor,
    handleChangeSize,
    handleChangeRadius,
    handleChangeShape,
    handleChangeDistance,
    handleChangeColorDifference,
    handleChangeMaxSize,
    handleChangeMaxRadius,
    handleChangeGradient,
  } = useContext(StyleContext)

  const handleChangeColor = (event) => {
    const isChecked = event.target.checked
    styleHandleChangeColor(isChecked)
  }
  return (
    <NeumorphicElement
      positionX={10}
      positionY={10}
      angle={180}
      blur={1}
      color={style.secondaryColor}
      darkColor="#333"
      lightColor="#ddd"
      firstGradientColor={style.thirdColor}
      secondGradientColor={style.primaryColor}
      radius={5}
      maxRadius={0}
      gradient={5}
      shape={5}
      form="primary"
      className={index.myTopNavbar}
    >
      <div className={index.logo}>
        <p>{'<LUGAMAFE/>'}</p>
      </div>
      <div className={index.lights}>
        <p>{style?.primaryColor}</p>
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
