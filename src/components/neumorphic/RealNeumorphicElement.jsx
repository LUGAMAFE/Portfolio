import PropTypes from 'prop-types';
import { useContext, useEffect, useMemo, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import styles from '../../style/sass/style.module.scss';
import { angleGradient, colorLuminance, getContrast, getIfGradient, getIntFormValue } from '../../utils';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeuTooltipTool from './NeuTooltipTool';
import { NeuElementContext } from './context/NeuElementContext';

const RealNeumorphicElement = ({
  element: Element = 'div',
  className = '',
  neumorphicOptions = {}, // Add this new prop
  form = undefined,
  color = undefined,
  size = undefined,
  intensity = undefined,
  lightSource = undefined,
  distance = undefined,
  blur = undefined,
  style = undefined,
  onClick = undefined,
  ...rest
}) => {
  const { contextConfig, setContextConfig } = useContext(NeuElementContext);
  // Set default values for individual props if they are not provided
  const defaultProps = {
    form: null,
    color: null,
    size: 100,
    intensity: 0.15,
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
      lightSource: lightSource ?? (neumorphicOptions.lightSource || defaultProps.lightSource),
      distance: distance ?? (neumorphicOptions.distance || defaultProps.distance),
      blur: blur ?? (neumorphicOptions.blur || defaultProps.blur),
    }),
    [form, color, size, intensity, lightSource, distance, blur, neumorphicOptions]
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
  const [defaultCssVariables, setDefaultCssVariables] = useState({});

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
      gradient && shapeId !== 1 ? (shapeId === 3 ? lightGradientColor : darkGradientColor) : colorToUse;
    const secondGradientColor =
      gradient && shapeId !== 1 ? (shapeId === 2 ? lightGradientColor : darkGradientColor) : colorToUse;

    let finalDistance = contextConfig.distance;
    let finalBlur = contextConfig.blur;

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
    } else {
      setClassesToApply(``);
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

  return (
    <>
      <Element
        ref={(node) => setRefElement(node)}
        style={{ ...defaultCssVariables, ...style }}
        className={`neuElement ${styles.softShadow} ${classesToApply} ${className}`}
        {...tooltipReferenceProps}
        {...rest}
      />
      {editorMode && <NeuTooltipTool refElement={refElement} setRefProps={setTooltipReferenceProps} onClick={onClick} />}
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
    distance: PropTypes.string,
    blur: PropTypes.string,
  }),
  form: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.number,
  intensity: PropTypes.number,
  lightSource: PropTypes.number,
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
