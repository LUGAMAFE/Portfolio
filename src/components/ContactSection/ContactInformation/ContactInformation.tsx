import { useContext } from 'react';
import callIcon from '../../../../assets/images/call-1.svg';
import { FormShape } from '../../../types/neomorphism';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './ContactInformation.module.scss';

export const ContactInformation = () => {
  const { initialMainColorNeon, isChecked } = useContext(NeumorphicStylesContext);
  return (
    <div className={style.ContactInformation}>
      <p className={style.ContactInformation_text}>Contactame y veamos como puedo ayudarle a tu proyecto o empresa.</p>
      <p className={style.ContactInformation_text}>
        <span className={style.ContactInformation_span} style={{ backgroundImage: initialMainColorNeon }}>Correo:</span> luisjavier004@hotmail.com
      </p>
      <NeumorphicElement
        neumorphicOptions={{

          form: isChecked ? FormShape.Level : FormShape.Convex,
          size: isChecked ? 99 : 82,
          intensity: isChecked ? 0.16 : 0.65,
          lightSource: 1,
          distance: isChecked ? 10 : 8,
          blur: isChecked ? 15 : 16,
        }}
        className={style.ContactInformation_numberContainer}
      >
        <NeumorphicElement
          neumorphicOptions={{

            form: isChecked ? FormShape.Level : FormShape.Concave,
            size: isChecked ? 34 : 88,
            intensity: isChecked ? 0.3 : 0.65,
            lightSource: 1,
            distance: isChecked ? 3 : 9,
            blur: isChecked ? 8 : 18,
          }}
          className={style.ContactInformation_socialIconContainer}
        >
          <img src={callIcon} alt="neomorphic svg shape" />
        </NeumorphicElement>
        <p className={style.ContactInformation_number} style={{ backgroundImage: initialMainColorNeon }}>9993777732</p>
      </NeumorphicElement>
    </div>
  );
};
