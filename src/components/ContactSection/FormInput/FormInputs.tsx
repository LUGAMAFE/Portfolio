import { useContext } from 'react';
import { FormShape } from '../../../types/neomorphism';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './FormInput.module.scss';
interface FormInputsProps {
  placeHolder: string;
}
export const FormInputs = ({ placeHolder }: FormInputsProps) => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  return (
    <NeumorphicElement
      className={style.FormInput}
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 49 : 174,
        intensity: isChecked ? 0.23 : 0.55,
        lightSource: 1,
        distance: isChecked ? 5 : 13,
        blur: isChecked ? 10 : 23,
      }}
      element={'input'}
      type="text"
      placeholder={placeHolder}
    />
  );
};
