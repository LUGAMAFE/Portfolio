import style from '../style/sass/style.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';

export const ContactSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: '500',
        intensity: '0.65',
        lightSource: 3,
        distance: '45',
        blur: 90,
      }}
      className={style.contact}
    >
      <div className={style.contactContainer}>
        <div className={style.section}>
          <div className={style.textContainer}>
            <p>CONTACTO</p>
          </div>
          <div className={style.content}>
            <div className={style.svgContainer}>
              <svg>
                <image href="../../assets/images/Vector-13.svg" />
              </svg>
            </div>
            <form className={style.form}>
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'pressed',
                  size: '174',
                  intensity: '0.55',
                  lightSource: 1,
                  distance: '13',
                  blur: '23',
                }}
                element={'input'}
                type="text"
                placeholder="Nombre"
              />
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'pressed',
                  size: '174',
                  intensity: '0.55',
                  lightSource: 1,
                  distance: '13',
                  blur: '23',
                }}
                element={'input'}
                type="text"
                placeholder="Correo electronico"
              />
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'pressed',
                  size: '174',
                  intensity: '0.55',
                  lightSource: 1,
                  distance: '13',
                  blur: '23',
                }}
                element={'input'}
                type="text"
                placeholder="Telefono"
              />
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'pressed',
                  size: '174',
                  intensity: '0.55',
                  lightSource: 1,
                  distance: '13',
                  blur: '23',
                }}
                element={'input'}
                type="text"
                placeholder="Razon de contacto"
              />
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'pressed',
                  size: '174',
                  intensity: '0.55',
                  lightSource: 1,
                  distance: '13',
                  blur: '23',
                }}
                element={'textarea'}
                placeholder="mensaje"
              />
              <button>
                <p>Enviar</p>
              </button>
            </form>
            <div className={style.mensaje}>
              <p>Contactame y veamos como puedo ayudarle a tu proyecto o empresa.</p>
              <p>
                <span>Correo:</span> luisjavier004@hotmail.com
              </p>
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'convex',
                  size: '82',
                  intensity: '0.65',
                  lightSource: 1,
                  distance: 8,
                  blur: 16,
                }}
                className={style.number}
              >
                <NeumorphicElement
                  neumorphicOptions={{
                    form: 'concave',
                    size: '88',
                    intensity: '0.65',
                    lightSource: 1,
                    distance: 9,
                    blur: 18,
                  }}
                  className={style.socialIconContainer}
                >
                  <div className={style.svgContainer2}>
                    <svg>
                      <image href="../../assets/images/call-1.svg" />
                    </svg>
                  </div>
                </NeumorphicElement>
                <p>9993777732</p>
              </NeumorphicElement>
            </div>
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};
