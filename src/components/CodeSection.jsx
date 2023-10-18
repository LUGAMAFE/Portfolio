import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codigoEjemplo } from '../data/codeSintaxHighlighter';

import style from '../style/sass/style.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';
export const CodeSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: '500',
        intensity: '0.65',
        lightSource: 3,
        distance: '45',
        blur: 90,
      }}
      className={style.code}
    >
      <SyntaxHighlighter
        language="javascript"
        style={okaidia}
        showLineNumbers
        customStyle={{
          background: 'transparent',
          width: '1877px',
          height: '1248',
          fontSize: '20px',
          fontWeight: '400',

          letterSpacing: '-1px',
        }}
      >
        {codigoEjemplo}
      </SyntaxHighlighter>
    </NeumorphicElement>
  );
};
