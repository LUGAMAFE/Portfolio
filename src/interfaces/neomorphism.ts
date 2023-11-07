import { CSSProperties, ElementType } from 'react';

export interface RealNeumorphicElementProps {
  element?: ElementType;
  className?: string;
  neumorphicOptions?: {
    form?: 'concave' | 'convex' | 'level' | 'pressed' | 'flat' | null;
    color?: string;
    size?: number;
    intensity?: number;
    lightSource?: number;
    distance?: number;
    blur?: number;
  };
  form?: 'concave' | 'convex' | 'level' | 'pressed' | 'flat' | null;
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
  id?: string | number;
  type?: string;
  placeholder?: string;
  text?: string;
}
