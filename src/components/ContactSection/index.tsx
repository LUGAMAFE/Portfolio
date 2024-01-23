import neonContainer from '../../../assets/images/Vector-13.svg';
import style from '../../style/sass/contact.module.scss';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { ContactInformation } from './ContactInformation';
import { Form } from './Form';
const ContactSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: 500,
        intensity: 0.65,
        lightSource: 3,
        distance: 45,
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
