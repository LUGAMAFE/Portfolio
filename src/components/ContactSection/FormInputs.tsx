import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';

interface FormInputsProps {
  placeHolder: string;
}
export const FormInputs = ({ placeHolder }: FormInputsProps) => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: 174,
        intensity: 0.55,
        lightSource: 1,
        distance: 13,
        blur: 23,
      }}
      element="input"
      type="text"
      placeholder={placeHolder}
    />
  );
};
