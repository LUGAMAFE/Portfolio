import { Power2, TweenMax } from 'gsap';
import PropTypes from 'prop-types';
import { useContext, useEffect, useMemo, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import styles from '../../style/sass/style.module.scss';
import {
  angleGradient,
  colorLuminance,
  getContrast,
  getIfGradient,
  getIntFormValue,
} from '../../utils';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeuTooltipTool from './NeuTooltipTool';
import { NeuElementContext } from './context/NeuElementContext';

const RealNeumorphicElement = ({
  element: Element = 'div',
  className = '',
  neumorphicOptions = {}, // Add this new prop
  form = 'flat',
  color = undefined,
  size = undefined,
  intensity = undefined,
  lightSource = undefined,
  angleLightSource = undefined,
  distance = undefined,
  blur = undefined,
  style = undefined,
  onClick = undefined,

  ...rest
}) => {
  const { contextConfig, setContextConfig, updateContextConfigProp } =
    useContext(NeuElementContext);
  // Set default values for individual props if they are not provided
  const defaultProps = {
    form: 'flat',
    color: null,
    size: 100,
    intensity: 0.15,
    angleLightSource: 145,
    lightSource: 1,
    distance: '',
    blur: '',
  };

  // Merge individual props with neumorphicOptions object and prioritize individual props
  const options = useMemo(
    () => ({
      form: form ?? (neumorphicOptions.form || defaultProps.form),
      color: color ?? (neumorphicOptions.color || defaultProps.color),
      size: size ?? (neumorphicOptions.size || defaultProps.size),
      intensity: intensity ?? (neumorphicOptions.intensity || defaultProps.intensity),
      angleLightSource:
        angleLightSource ?? (neumorphicOptions.angleLightSource || defaultProps.angleLightSource),
      lightSource: lightSource ?? (neumorphicOptions.lightSource || defaultProps.lightSource),
      distance: distance ?? (neumorphicOptions.distance || defaultProps.distance),
      blur: blur ?? (neumorphicOptions.blur || defaultProps.blur),
    }),
    [form, color, size, intensity, angleLightSource, lightSource, distance, blur, neumorphicOptions]
  );

  useDeepCompareEffect(() => {
    setContextConfig(options);
  }, [options]);

  const {
    colorDifference,
    editorMode,
    styles: {
      darkColor: darkColorContext,
      mainColor: mainColorContext,
      lightColor: lightColorContext,
      darkGradientColor: darkGradientColorContext,
      lightGradientColor: lightGradientColorContext,
    },
  } = useContext(NeumorphicStylesContext);

  const [refElement, setRefElement] = useState(null);
  const [tooltipReferenceProps, setTooltipReferenceProps] = useState({});

  const [classesToApply, setClassesToApply] = useState(styles.softShadow);
  const [defaultCssVariables, setDefaultCssVariables] = useState({
    '--positionX': '0x',
    '--positionXOpposite': '0px',
    '--positionY': '0px',
    '--positionYOpposite': '0px',
    '--angle': '145deg',
    '--blur': '20px',
    '--textColor': '#F6F5F7',
    '--textColorOpposite': '#26292e',
    '--mainColor': '#26292e',
    '--darkColor': '#212428',
    '--lightColor': '#2b2e34',
    '--firstGradientColor': '#26292e',
    '--secondGradientColor': '#26292e',
  });

  useEffect(() => {
    if (!mainColorContext) return;
    if (contextConfig.form == null) {
      throw new Error('Form for neumorphic element not provided');
    }

    let colorToUse, usingContextColor;
    if (contextConfig.color != null) {
      usingContextColor = false;
      colorToUse = contextConfig.color;
    } else {
      usingContextColor = true;
      colorToUse = mainColorContext;
    }

    let darkColor;
    let lightColor;
    let darkGradientColor;
    let lightGradientColor;

    if (usingContextColor && contextConfig.intensity == colorDifference) {
      darkColor = darkColorContext;
      lightColor = lightColorContext;
      darkGradientColor = darkGradientColorContext;
      lightGradientColor = lightGradientColorContext;
    } else {
      darkColor = colorLuminance(colorToUse, contextConfig.intensity * -1);
      lightColor = colorLuminance(colorToUse, contextConfig.intensity);
      darkGradientColor = colorLuminance(colorToUse, -0.1);
      lightGradientColor = colorLuminance(colorToUse, 0.07);
    }
    const shapeId = getIntFormValue(contextConfig.form);
    const gradient = getIfGradient(shapeId);

    if (shapeId == 4) {
      darkColor = '#00000000';
      lightColor = '#00000000';
    }

    const firstGradientColor =
      gradient && shapeId !== 1
        ? shapeId === 3
          ? lightGradientColor
          : darkGradientColor
        : colorToUse;
    const secondGradientColor =
      gradient && shapeId !== 1
        ? shapeId === 2
          ? lightGradientColor
          : darkGradientColor
        : colorToUse;

    let finalDistance = contextConfig.distance;
    let finalBlur = contextConfig.blur;
    // let finalAngleLightSource = contextConfig.angleLightSource;

    finalDistance = Math.round(contextConfig.size * 0.1);
    finalBlur = Math.round(contextConfig.size * 0.2);

    if (contextConfig.distance) {
      finalDistance = contextConfig.distance;
      finalBlur = contextConfig.blur * 2;
    }
    if (contextConfig.blur) {
      finalBlur = contextConfig.blur;
    }

    const { positionX, positionY, angle } = angleGradient(contextConfig.lightSource, finalDistance);

    // setTimeout(() => {
    //   updateContextConfigProp('form', neumorphicOptions.form);
    // }, 2000);
    // const handleShape = (e) => {
    //     updateContextConfigProp('form', e.target.name);
    //   };

    setDefaultCssVariables({
      '--positionX': `${positionX}px`,
      '--positionXOpposite': `${positionX * -1}px`,
      '--positionY': `${positionY}px`,
      '--positionYOpposite': `${positionY * -1}px`,
      '--angle': `${angle}deg`,
      '--blur': `${finalBlur}px`,
      '--textColor': `${getContrast(colorToUse)}`,
      '--textColorOpposite': `${colorToUse}`,
      '--mainColor': `${colorToUse}`,
      '--darkColor': `${darkColor}`,
      '--lightColor': `${lightColor}`,
      '--firstGradientColor': `${firstGradientColor}`,
      '--secondGradientColor': `${secondGradientColor}`,
    });

    if (shapeId == 0) {
      setClassesToApply(`${styles.pressed}`);
    } else if (shapeId == 5) {
      setClassesToApply(`${styles.svgInnerShadow}`);
    } else {
      setClassesToApply('');
    }
  }, [
    contextConfig,
    mainColorContext,
    darkColorContext,
    lightColorContext,
    darkGradientColorContext,
    lightGradientColorContext,
    colorDifference,
  ]);

  useEffect(() => {
    // Resto del código anterior...
    if (!mainColorContext) return;
    if (contextConfig.form == null) {
      throw new Error('Form for neumorphic element not provided');
    }

    let colorToUse, usingContextColor;
    if (contextConfig.color != null) {
      usingContextColor = false;
      colorToUse = contextConfig.color;
    } else {
      usingContextColor = true;
      colorToUse = mainColorContext;
    }

    let darkColor;
    let lightColor;
    let darkGradientColor;
    let lightGradientColor;

    if (usingContextColor && contextConfig.intensity == colorDifference) {
      darkColor = darkColorContext;
      lightColor = lightColorContext;
      darkGradientColor = darkGradientColorContext;
      lightGradientColor = lightGradientColorContext;
    } else {
      darkColor = colorLuminance(colorToUse, contextConfig.intensity * -1);
      lightColor = colorLuminance(colorToUse, contextConfig.intensity);
      darkGradientColor = colorLuminance(colorToUse, -0.1);
      lightGradientColor = colorLuminance(colorToUse, 0.07);
    }
    const shapeId = getIntFormValue(contextConfig.form);
    const gradient = getIfGradient(shapeId);

    if (shapeId == 4) {
      darkColor = '#00000000';
      lightColor = '#00000000';
    }

    const firstGradientColor =
      gradient && shapeId !== 1
        ? shapeId === 3
          ? lightGradientColor
          : darkGradientColor
        : colorToUse;
    const secondGradientColor =
      gradient && shapeId !== 1
        ? shapeId === 2
          ? lightGradientColor
          : darkGradientColor
        : colorToUse;

    let finalDistance = contextConfig.distance;
    let finalBlur = contextConfig.blur;
    // let finalAngleLightSource = contextConfig.angleLightSource;

    finalDistance = Math.round(contextConfig.size * 0.1);
    finalBlur = Math.round(contextConfig.size * 0.2);

    if (contextConfig.distance) {
      finalDistance = contextConfig.distance;
      finalBlur = contextConfig.blur * 2;
    }
    if (contextConfig.blur) {
      finalBlur = contextConfig.blur;
    }

    const { positionX, positionY, angle } = angleGradient(contextConfig.lightSource, finalDistance);
    // Añadir animación para cambiar a neumorphicOptions.form
    if (contextConfig.form == 'flat') {
      // Calcular los valores finales para la animación
      const finalCssVariables = {
        '--positionX': `${positionX}px`,
        '--positionXOpposite': `${positionX * -1}px`,
        '--positionY': `${positionY}px`,
        '--positionYOpposite': `${positionY * -1}px`,
        '--angle': `${angle}deg`,
        '--blur': `${finalBlur}px`,
        '--textColor': `${getContrast(colorToUse)}`,
        '--textColorOpposite': `${colorToUse}`,
        '--mainColor': `${colorToUse}`,
        '--darkColor': `${darkColor}`,
        '--lightColor': `${lightColor}`,
        '--firstGradientColor': `${firstGradientColor}`,
        '--secondGradientColor': `${secondGradientColor}`,
      };

      // Duración de la animación en segundos
      const duration = 2;

      // Iniciar la animación con GSAP
      TweenMax.to(defaultCssVariables, duration, {
        // Valores finales
        ...finalCssVariables,

        ease: Power2.easeIn, // Easing para una transición suave
        onUpdate: () => {
          // Actualizar los valores a medida que avanza la animación
          // Esto aplicará la animación gradualmente
          setDefaultCssVariables({ ...defaultCssVariables });
        },
        onComplete: () => {
          // Actualizar el valor de contextConfig.form después de la animación
          updateContextConfigProp('form', neumorphicOptions.form);
        },
      });
    }
  }, [
    contextConfig,
    mainColorContext,
    darkColorContext,
    lightColorContext,
    darkGradientColorContext,
    lightGradientColorContext,
    colorDifference,
    neumorphicOptions.form, // Agregar neumorphicOptions.form como dependencia
  ]);

  return (
    <>
      <Element
        ref={(node) => setRefElement(node)}
        style={{ ...defaultCssVariables, ...style }}
        className={
          contextConfig.form === 'svgInnerShadow'
            ? `neuElement ${styles.svgInnerShadow} ${className}`
            : `neuElement ${styles.softShadow} ${classesToApply} ${className}`
        }
        {...tooltipReferenceProps}
        {...rest}
      />
      {editorMode && (
        <NeuTooltipTool
          refElement={refElement}
          setRefProps={setTooltipReferenceProps}
          onClick={onClick}
        />
      )}
    </>
  );
};

RealNeumorphicElement.propTypes = {
  element: PropTypes.elementType,
  className: PropTypes.string,
  neumorphicOptions: PropTypes.shape({
    form: PropTypes.any,
    color: PropTypes.string,
    size: PropTypes.number,
    intensity: PropTypes.number,
    lightSource: PropTypes.number,
    angleLightSource: PropTypes.number,
    distance: PropTypes.string,
    blur: PropTypes.string,
  }),
  form: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.number,
  intensity: PropTypes.number,
  lightSource: PropTypes.number,
  angleLightSource: PropTypes.number,
  distance: PropTypes.string,
  blur: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

RealNeumorphicElement.defaultProps = {
  className: '',
  neumorphicOptions: {},
};

export default RealNeumorphicElement;
