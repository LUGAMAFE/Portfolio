import { useContext } from 'react';
import neonContainer from '../../../assets/images/Vector-13.svg';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { ContactInformation } from './ContactInformation';
import { Form } from './Form';
import style from './contact.module.scss';
const ContactSection = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 44 : 500,
        intensity: isChecked ? 0.47 : 0.65,
        lightSource: 3,
        distance: isChecked ? 4 : 45,
        blur: isChecked ? 39 : 90,
      }}
      id="seccion6"
      className={style.Contact}
    >
      <div className={style.Contact_contactContainer}>
        <div className={style.Contact_section}>
          <div className={style.Contact_textContainer}>
            <p className={style.Contact_text}>CONTACTO</p>
          </div>
          <div className={style.Contact_content}>
            <div className={style.Contact_svgContainer}>
              <img src={neonContainer} alt="neon container" />
            </div>
            <Form />
            <ContactInformation />
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};

export default ContactSection;
