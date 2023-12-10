import neonContainer from '../../../assets/images/Vector-13.svg';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { ContactInformation } from './ContactInformation';
import { Form } from './Form';
import style from './contact.module.scss';
const ContactSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: 500,
        intensity: 0.65,
        lightSource: 3,
        distance: 45,
        blur: 90,
      }}
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
