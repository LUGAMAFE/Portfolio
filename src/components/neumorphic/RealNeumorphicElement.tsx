import { useContext, useEffect, useMemo, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import styles from '../../style/sass/style.module.scss';
import { NeomorphicElementShape, RealNeumorphicElementProps } from '../../types/neomorphism';
import {
  angleGradient,
  colorLuminance,
  getContrast,
  getIfGradient,
  getIntFormValue,
} from '../../utils';
import { MakeRequired } from '../../utils/type-utils';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeuTooltipTool from './NeuTooltipTool';
import { NeuElementContext } from './context/NeuElementContext';

const RealNeumorphicElement = ({
  element: Element = 'div',
  className = '',
  neumorphicOptions = {},
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
}: RealNeumorphicElementProps) => {
  const { contextConfig, setContextConfig } = useContext(NeuElementContext);

  const defaultProps: MakeRequired<
    NeomorphicElementShape,
    'size' | 'intensity' | 'lightSource' | 'distance' | 'blur'
  > = {
    form: undefined,
    color: undefined,
    size: 100,
    intensity: 0.15,
    lightSource: 1,
    distance: 45,
    blur: 90,
  };

  const options: NeomorphicElementShape = useMemo(
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

  const [refElement, setRefElement] = useState<HTMLElement | null>(null);
  const [tooltipReferenceProps, setTooltipReferenceProps] = useState({});
  const [classesToApply, setClassesToApply] = useState<string>(styles.softShadow);
  const [defaultCssVariables, setDefaultCssVariables] = useState({});

  useEffect(() => {
    if (!mainColorContext) return;
    if (contextConfig.form == null) {
      throw new Error('Form for neumorphic element not provided');
    }

    let colorToUse: string, usingContextColor: boolean;
    if (contextConfig.color != null) {
      usingContextColor = false;
      colorToUse = contextConfig.color;
    } else {
      usingContextColor = true;
      colorToUse = mainColorContext;
    }

    let darkColor: string;
    let lightColor: string;
    let darkGradientColor: string;
    let lightGradientColor: string;

    if (usingContextColor && contextConfig.intensity == colorDifference) {
      darkColor = darkColorContext;
      lightColor = lightColorContext;
      darkGradientColor = darkGradientColorContext;
      lightGradientColor = lightGradientColorContext;
    } else {
      darkColor = colorLuminance(colorToUse, contextConfig.intensity! * -1);
      lightColor = colorLuminance(colorToUse, contextConfig.intensity!);
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

    finalDistance = Math.round(size ? size : defaultProps.size * 0.1);
    finalBlur = Math.round(size ? size : defaultProps.size * 0.2);

    if (contextConfig.distance) {
      finalDistance = contextConfig.distance;
      finalBlur = blur ? blur : defaultProps.blur * 2;
    }
    if (contextConfig.blur) {
      finalBlur = contextConfig.blur;
    }
    const { positionX, positionY, angle } = angleGradient(
      contextConfig.lightSource ? contextConfig.lightSource : defaultProps.lightSource,
      finalDistance
    );

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
      <Element
        ref={(node: HTMLElement | null) => setRefElement(node)}
        style={{ ...defaultCssVariables, ...style }}
        className={`neuElement ${styles.softShadow} ${classesToApply} ${className}`}
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

export default RealNeumorphicElement;
