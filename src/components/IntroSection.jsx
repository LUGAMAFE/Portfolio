import React from 'react'


export const IntroSection = () => {
  return (
    <>
      <div className='intro'>
        <div className='circleAnimation'>
          <div className='imageComparer'>
            <div className='divisorAndCircle'>
              <div className='circle'>
                <div className='line'></div>
                <img src="../../assets/images/luis.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='myIntroduction'>
          <p>!Hola! mi nombre es: <br/> Luis martinez</p>
              <div className='lineas'>
                <div className='linea1'></div>
                <div className='linea2'></div>
              </div>
          <p><strong>Programador</strong> y <em>diseñador</em>  de sitios web</p>
          <div className='ilustration'>
            <div className='svgContainer'>
              <svg>
                    <image href="../../assets/images/Vector-12.svg"/>
              </svg>
            </div>
            <div className='diseño'>
              <svg>
                  <image href="../../assets/images/Ilustracion-Diseño.svg"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
