import { RealNeumorphicElementProps } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';

export const LanguageButton = ({
  config,
  onClick,
}: {
  config: RealNeumorphicElementProps;
  onClick: (id: string) => void;
}) => {
  return (
    <NeumorphicElement
      key={config.id}
      element={'button'}
      onClick={() => onClick(config.id!)}
      neumorphicOptions={config.neumorphicOptions}
      className={config.className}
    >
      <p>{config.text}</p>
    </NeumorphicElement>
  );
};
