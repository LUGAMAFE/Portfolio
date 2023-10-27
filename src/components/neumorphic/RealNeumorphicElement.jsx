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
  form = undefined,
  color = undefined,
  size = undefined,
  intensity = undefined,
  lightSource = undefined,
  distance = undefined,
  blur = undefined,
  style = undefined,
  onClick = undefined,
  isSVG = undefined,
  SVGElement = undefined,
  children,
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
    isSVG: false,
    SVGElement: null,
  };

  // Merge individual props with neumorphicOptions object and prioritize individual props
  const options = useMemo(
    () => ({
      form: form ?? (neumorphicOptions.form || defaultProps.form),
      isSVG: isSVG ?? (neumorphicOptions.isSVG || defaultProps.isSVG),
      color: color ?? (neumorphicOptions.color || defaultProps.color),
      size: size ?? (neumorphicOptions.size || defaultProps.size),
      intensity: intensity ?? (neumorphicOptions.intensity || defaultProps.intensity),
      lightSource: lightSource ?? (neumorphicOptions.lightSource || defaultProps.lightSource),
      distance: distance ?? (neumorphicOptions.distance || defaultProps.distance),
      blur: blur ?? (neumorphicOptions.blur || defaultProps.blur),
      SVGElement: SVGElement ?? (neumorphicOptions.SVGElement || defaultProps.SVGElement),
    }),
    [form, isSVG, color, size, intensity, lightSource, distance, blur, neumorphicOptions]
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
  const [svgFilters, setSVGFilters] = useState(null);
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
    console.log(SVGElement);
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
    setSVGFilters(
      <defs>
        <linearGradient id="paint0_linear_78_20" x1="1" y1="1" x2="0" y2="0">
          <stop stopColor="var(--firstGradientColor)" />
          <stop offset="1" stopColor="var(--secondGradientColor)" />
        </linearGradient>
        <filter id="inset-shadow-light" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation={`${finalBlur}`} />
          <feOffset dx={`${positionX}`} dy={`${positionY}`} result="offsetblur" />
          <feFlood floodColor="var(--lightColor)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation={`${finalBlur}`} />
          <feOffset dx={`${positionX * -1}`} dy={`${positionY * -1}`} result="offsetblur" />
          <feFlood floodColor="var(--darkColor)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>
    );

    if (shapeId == 0) {
      setClassesToApply(`${styles.pressed}`);
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

  return (
    <>
      {Element === 'input' || Element === 'textarea' ? (
        <Element
          ref={(node) => setRefElement(node)}
          style={{ ...defaultCssVariables, ...style }}
          className={
            contextConfig.isSVG === true
              ? contextConfig.form === 'pressed'
                ? `neuElement ${styles.svgInnerShadowPressed} ${className}`
                : `neuElement ${styles.svgInnerShadow} ${className}`
              : `neuElement ${styles.softShadow} ${classesToApply} ${className}`
          }
          {...tooltipReferenceProps}
          {...rest}
        />
      ) : (
        <Element
          ref={(node) => setRefElement(node)}
          style={{ ...defaultCssVariables, ...style }}
          className={
            contextConfig.isSVG === true
              ? contextConfig.form === 'pressed'
                ? `neuElement ${styles.svgInnerShadowPressed} ${className}`
                : `neuElement ${styles.svgInnerShadow} ${className}`
              : `neuElement ${styles.softShadow} ${classesToApply} ${className}`
          }
          {...tooltipReferenceProps}
          {...rest}
        >
          {neumorphicOptions.isSVG && svgFilters}
          {children}
        </Element>
      )}

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
    distance: PropTypes.string,
    blur: PropTypes.string,
    isSVG: PropTypes.boolean,
    SVGElement: PropTypes.boolean,
  }),
  form: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.number,
  intensity: PropTypes.number,
  lightSource: PropTypes.number,
  distance: PropTypes.string,
  blur: PropTypes.string,
  isSVG: PropTypes.boolean,
  style: PropTypes.object,
  onClick: PropTypes.func,
  SVGElement: PropTypes.any,
  children: PropTypes.node,
};
export default RealNeumorphicElement;
