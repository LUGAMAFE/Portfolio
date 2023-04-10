import React, { useState } from 'react'
import index from '../style/sass/index.module.scss'



export const Navbar = () => {
    const [color, setColor] = useState('#ffffff');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className= {index.myTopNavbar}>
        <div className={index.logo}>
          <p>{'<LUGAMAFE/>'}</p>
        </div>
        <div className={index.lights}>
          <p>Encender luces</p>
          <label className={index.toggle}>
            <input onClick={handleChangeColor} className={index.toggleCheckbox} type="checkbox"></input>
            <div className={index.toggleSwitch}></div>
          </label>
        </div>
        <div className={index.changeIdiom}>
         <div className={index.buttons}>
          <button className={index.EsButton}>
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
              <image href="../../assets/images/bx-menu.svg"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
