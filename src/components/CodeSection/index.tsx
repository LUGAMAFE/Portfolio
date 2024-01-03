import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codigoEjemplo } from '../../data/codeSintaxHighlighter';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './code.module.scss';
const CodeSection = () => {
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
      className={style.Code}
    >
      <SyntaxHighlighter
        language="javascript"
        style={synthwave84}
        showLineNumbers
        customStyle={{
          background: FormShape.Pressed,
          width: '100%',
          height: 'auto',
          fontSize: '20px',
          fontWeight: '400',
          fontFamily: 'Fira code',
          backgroundImage: 'none',
          letterSpacing: '-1px',
          fontFeatureSettings: "'liga' 1, 'calt' 1",
        }}
        codeTagProps={{
          style: {
            fontFamily: 'inherit',
          },
        }}
      >
        {codigoEjemplo}
      </SyntaxHighlighter>
    </NeumorphicElement>
  );
};
export default CodeSection;
