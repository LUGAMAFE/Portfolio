import { CSSProperties, ElementType } from 'react';

export enum FormShape {
  Concave = 'concave',
  Convex = 'convex',
  Level = 'level',
  Pressed = 'pressed',
  Flat = 'flat',
}

export interface contextConfigNeomorphicElementShape {
  [key: string]: number | string | null;
  form: FormShape | null;
  color: string | null;
  size: number | null;
  intensity: number | null;
  lightSource: number | null;
  distance: number | null;
  blur: number | null;
}

export interface RealNeumorphicElementProps {
  element?: ElementType;
  className?: string;
  neumorphicOptions?: {
    form?: FormShape | null;
    color?: string;
    size?: number;
    intensity?: number;
    lightSource?: number;
    distance?: number;
    blur?: number;
  };
  form?: FormShape | null;
  color?: string | null;
  size?: number | null;
  intensity?: number | null;
  lightSource?: number | null;
  distance?: number | null;
  blur?: number | null;
  style?: CSSProperties;
  onClick?: () => void;
  children?: JSX.Element | JSX.Element[];
  nTestId?: string | number;
  id?: string;
  type?: string;
  placeholder?: string;
  text?: string;
}
