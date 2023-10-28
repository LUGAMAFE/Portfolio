import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import style from '../style/sass/style.module.scss';

import { codigoEjemplo } from '../data/codeSintaxHighlighter';
import NeumorphicElement from './neumorphic/NeumorphicElement';
export const CodeSection = () => {
  const customLineNumberStyle = {
    paddingRight: '60px',
  };

  const customTheme = {
    ...okaidia,
    comment: {
      ...okaidia.comment,
      color: '#fff',
    },
    string: {
      ...okaidia.string,
      color: '#e6db74',
    },
    keyword: {
      ...okaidia.string,
      color: '#fd971f',
    },
    function: {
      ...okaidia.string,
      color: '#a6e22e',
    },
    'class-name': {
      ...okaidia.string,
      color: '#a6e22e',
    },
    builtin: {
      ...okaidia.string,
      color: '#66d9ef',
    },
    property: {
      ...okaidia.code,
      color: '#e6db74',
    },
    operator: {
      ...okaidia.code,
      color: '#f92672',
    },
    'code[class*="language-"]': {
      lineHeight: '1.1',
      wordSpacing: '2px',
    },
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
        style={{ ...customTheme }}
        showLineNumbers
        showInlineLineNumbers
        lineNumberStyle={customLineNumberStyle}
        customStyle={{
          paddingLeft: '70px',
          background: 'transparent',
          width: '1877px',
          height: '1248',
          fontSize: '25px',
          fontWeight: '400',
          letterSpacing: '-1px',
          lineHeight: '0.1px',
        }}
      >
        {codigoEjemplo}
      </SyntaxHighlighter>
    </NeumorphicElement>
  );
};
