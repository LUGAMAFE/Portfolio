import callIcon from '../../../../assets/images/call-1.svg';
import NeumorphicElement from '../../neumorphic/NeumorphicElement';
import style from './ContactInformation.module.scss';
export const ContactInformation = () => {
  return (
    <div className={style.message}>
      <p>Contactame y veamos como puedo ayudarle a tu proyecto o empresa.</p>
      <p>
        <span>Correo:</span> luisjavier004@hotmail.com
      </p>
      <NeumorphicElement
        neumorphicOptions={{
          form: 'convex',
          size: 82,
          intensity: 0.65,
          lightSource: 1,
          distance: 8,
          blur: 16,
        }}
        className={style.number}
      >
        <NeumorphicElement
          neumorphicOptions={{
            form: 'concave',
            size: 88,
            intensity: 0.65,
            lightSource: 1,
            distance: 9,
            blur: 18,
          }}
          className={style.socialIconContainer}
        >
          <div className={style.svgContainer2}>
            <img src={callIcon} alt="neomorphic svg shape" />
          </div>
        </NeumorphicElement>
        <p>9993777732</p>
      </NeumorphicElement>
    </div>
  );
};
