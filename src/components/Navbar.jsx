import React, { useState } from 'react'


export const Navbar = () => {
    const [color, setColor] = useState('#ffffff');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className='myTopNavbar'>
        <div className='logo'>
          <p>{'<LUGAMAFE/>'}</p>
        </div>
        <div className='lights'>
          <p>Encender luces</p>
          <label className="toggle">
            <button onClick={handleChangeColor} className="toggle-checkbox" type="checkbox"></button>
            <div className="toggle-switch"></div>
          </label>
        </div>
        <div className='changeIdiom'>
         <div className="buttons">
          <button className='EsButton'>
            <p>Español</p>
          </button>
          <button className='InButton'>
            <p>English</p>
          </button>
        </div>
        </div>
        <div className='menuToggle'>
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
