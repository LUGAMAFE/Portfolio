import { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codigoEjemplo } from '../../data/codeSintaxHighlighter';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './code.module.scss';
const CodeSection = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 44 : 500,
        intensity: isChecked ? 0.47 : 0.65,
        lightSource: 3,
        distance: isChecked ? 4 : 45,
        blur: isChecked ? 39 : 90,
      }}
      id="seccion5"
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
