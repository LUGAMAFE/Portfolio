import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codigoEjemplo } from '../data/codeSintaxHighlighter';

import style from '../style/sass/style.module.scss';

import NeumorphicElement from './neumorphic/NeumorphicElement';
export const CodeSection = () => {
  const customLineProps = (lineNumber) => ({
    style: {
      backgroundColor: lineNumber === 2 ? 'yellow' : 'transparent',
      fontSize: lineNumber === 2 ? '100px' : '50px',
    },
  });
  const customLineNumberStyle = {
    paddingRight: '50px',
    color: 'white !important',
  };

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
      <div className={style.lineCode}></div>

      <SyntaxHighlighter
        language="typescript"
        style={okaidia}
        showLineNumbers
        showInlineLineNumbers
        lineProps={customLineProps}
        lineNumberStyle={customLineNumberStyle}
        customStyle={{
          background: 'transparent',
          width: '1877px',
          height: '1248',
          fontSize: '25px',
          fontWeight: '400',
          letterSpacing: '-1px',
          lineHeight: '0.1px',
          comment: {
            color: 'green', // Cambia el color de los comentarios a verde
          },
        }}
      >
        {String(codigoEjemplo).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </NeumorphicElement>
  );
};
