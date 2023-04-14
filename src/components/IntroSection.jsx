import React from 'react'
import style from '../style/sass/style.module.scss'

export const IntroSection = () => {
  return (
    <>
      <div className={style.intro}>
        <div className={style.circleAnimation}>
          <div className={style.imageComparer}>
            <div className={style.divisorAndCircle}>
              <div className={style.circle}>
                <div className={style.line}></div>
                <img src="../../assets/images/luis.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.myIntroduction}>
          <p>
            !Hola! mi nombre es: <br /> Luis martinez
          </p>
          <div className={style.lineas}>
            <div className={style.linea1}></div>
            <div className={style.linea2}></div>
          </div>
          <p>
            <strong>Programador</strong> y <em>diseñador</em> de sitios web
          </p>
          <div className={style.ilustration}>
            <div className={style.svgContainer}>
              <svg>
                <image href="../../assets/images/Vector-12.svg" />
              </svg>
            </div>
            <div className={style.diseño}>
              <svg>
                <image href="../../assets/images/Ilustracion-Diseño.svg" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
