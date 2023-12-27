import { RealNeumorphicElementProps } from '../../../types/neomorphism';
import { NeuElementProvider } from '../context/NeuElementContext';
import RealNeumorphicElement from './RealNeumorphicElement';
const NeumorphicElement = ({ ...props }: RealNeumorphicElementProps) => {
  return (
    <NeuElementProvider>
      <RealNeumorphicElement {...props} />
    </NeuElementProvider>
  );
};

export default NeumorphicElement;
