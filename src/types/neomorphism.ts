import { CSSProperties, ElementType } from 'react';

export enum FormShape {
  Concave = 'concave',
  Convex = 'convex',
  Level = 'level',
  Pressed = 'pressed',
  Flat = 'flat',
}

export interface NeomorphicElementShape {
  form?: FormShape;
  color?: string;
  size?: number;
  intensity?: number;
  lightSource?: number;
  distance?: number;
  blur?: number;
}

export interface RealNeumorphicElementProps {
  element?: ElementType;
  className?: string;
  neumorphicOptions?: {
    form?: FormShape;
    color?: string;
    size?: number;
    intensity?: number;
    lightSource?: number;
    distance?: number;
    blur?: number;
  };
  form?: FormShape;
  color?: string;
  size?: number;
  intensity?: number;
  lightSource?: number;
  distance?: number;
  blur?: number;
  style?: CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
  nTestId?: string | number;
  id?: string;
  type?: string;
  placeholder?: string;
  text?: string;
}

export interface UseFloatingLogicProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  arrowRef: React.MutableRefObject<null>;
}
