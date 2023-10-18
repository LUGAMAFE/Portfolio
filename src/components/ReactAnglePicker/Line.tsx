import styled from 'styled-components';

interface IconProps {
  width: number | undefined;
  color: string | undefined;
  angle?: number | undefined;
}

const LineIcon = styled.div<IconProps>`
  --width: 5px;
  --height: 17px;
  width: var(--width);
  height: var(--height);
  background-color: black;
  position: absolute;
  left: calc(50% - var(--width) / 2);
  top: calc(50% - var(--width) / 2);
  border-radius: 5px;
  rotate: ${(props: IconProps) => props.angle}deg;
  transform-origin: center calc(var(--width) / 2);
  z-index: -1;
`;

interface CircelProps {
  x: number;
  y: number;
  color?: string | undefined;
  width?: number | undefined;
  angle?: number | undefined;
}

const Line = (props: CircelProps) => {
  const { color, width, angle } = props;

  return <LineIcon color={color} width={width} angle={angle ? angle - 90 : angle} />;
};

export default Line;
