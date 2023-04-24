import React from 'react'
import style from '../style/sass/style.module.scss'
import NeumorphicElement from './neumorphic/NeumorphicElement'
export const IntroSection = () => {
  const n = 50 // Or something else
  return (
    <>
      <div className={style.intro}>
        <div className={style.circleAnimation}>
          <NeumorphicElement form={'flat'} className={style.imageComparer}>
            <div className={style.divisorAndCircle}>
              <div className={style.circle}>
                <div className={style.line}></div>
                <img src="../../assets/images/luis.png" alt="" />
              </div>
            </div>
          </NeumorphicElement>
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
                <image></image>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {[...Array(n)].map((e, i) => (
        <NeumorphicElement
          neumorphicOptions={{
            form: 'level',
            size: '60',
            intensity: '0.26',
            lightSource: 1,
          }}
          key={i}
          style={{ width: '200px', height: '200px', margin: '20px' }}
        ></NeumorphicElement>
      ))}
    </>
  )
}
