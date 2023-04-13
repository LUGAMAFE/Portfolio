import React from 'react'
import index from '../style/sass/index.module.scss'


export const IntroSection = () => {
  return (
    <>
      <div className={index.intro}>
        <div className={index.circleAnimation}>
          <div className={index.imageComparer}>
            <div className={index.divisorAndCircle}>
              <div className={index.circle}>
                <div className={index.line}></div>
                <img src="../../assets/images/luis.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={index.myIntroduction}>
          <p>!Hola! mi nombre es: <br/> Luis martinez</p>
              <div className={index.lineas}>
                <div className={index.linea1}></div>
                <div className={index.linea2}></div>
              </div>
          <p><strong>Programador</strong> y <em>diseñador</em>  de sitios web</p>
          <div className={index.ilustration}>
            <div className={index.svgContainer}>
              <svg>
                    <image href="../../assets/images/Vector-12.svg"/>
              </svg>
            </div>
            <div className={index.diseño}>
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
