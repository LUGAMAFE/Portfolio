import NeumorphicElement from '../../neumorphic/NeumorphicElement';
import style from './FormInput.module.scss';
interface Props {
  placeHolder: string;
}
export const FormInputs = ({ placeHolder }: Props) => {
  return (
    <NeumorphicElement
      className={style.customInput}
      neumorphicOptions={{
        form: 'pressed',
        size: 174,
        intensity: 0.55,
        lightSource: 1,
        distance: 13,
        blur: 23,
      }}
      element={'input'}
      type="text"
      placeholder={placeHolder}
    />
  );
};
