import callIcon from '../../../../assets/images/call-1.svg';
import { FormShape } from '../../../types/neomorphism';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './ContactInformation.module.scss';
export const ContactInformation = () => {
  return (
    <div className={style.ContactInformation}>
      <p className={style.ContactInformation_text}>
        Contactame y veamos como puedo ayudarle a tu proyecto o empresa.
      </p>
      <p className={style.ContactInformation_text}>
        <span className={style.ContactInformation_span}>Correo:</span> luisjavier004@hotmail.com
      </p>
      <NeumorphicElement
        neumorphicOptions={{
          form: FormShape.Convex,
          size: 82,
          intensity: 0.65,
          lightSource: 1,
          distance: 8,
          blur: 16,
        }}
        className={style.ContactInformation_numberContainer}
      >
        <NeumorphicElement
          neumorphicOptions={{
            form: FormShape.Concave,
            size: 88,
            intensity: 0.65,
            lightSource: 1,
            distance: 9,
            blur: 18,
          }}
          className={style.ContactInformation_socialIconContainer}
        >
          <img src={callIcon} alt="neomorphic svg shape" />
        </NeumorphicElement>
        <p className={style.ContactInformation_number}>9993777732</p>
      </NeumorphicElement>
    </div>
  );
};
