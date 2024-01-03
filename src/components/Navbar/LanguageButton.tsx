import { RealNeumorphicElementProps } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';

interface LanguageSwitcherProps {
  config: RealNeumorphicElementProps;
  onClick: (id: string) => void;
}

export const LanguageButton = ({ config, onClick }: LanguageSwitcherProps) => {
  <NeumorphicElement
    key={config.id}
    element={'button'}
    onClick={() => onClick(config.id!)}
    neumorphicOptions={config.neumorphicOptions}
    className={config.className}
  >
    <p>{config.text}</p>
  </NeumorphicElement>;
};
