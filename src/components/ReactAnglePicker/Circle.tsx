import styled from 'styled-components';

const CIRCLE_WIDTH: number = 6;

interface WrapperProps {
  left: number;
  top: number;
}
const CircleWrapper = styled.div<WrapperProps>`
  position: absolute;
  width: 0;
  height: 0;
  left: ${(props: WrapperProps) => props.left}px;
  top: ${(props: WrapperProps) => props.top}px;
  z-index: 1;
`;

interface IconProps {
  width: number | undefined;
  color: string | undefined;
}
const IconCircle = styled.div<IconProps>`
  width: ${(props: IconProps) => props.width || CIRCLE_WIDTH}px;
  height: ${(props: IconProps) => props.width || CIRCLE_WIDTH}px;
  background: ${(props: IconProps) => (props.color ? props.color : 'rgba(0,0,0,0.4)')};
  -webkit-border-radius: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

interface CircelProps {
  x: number;
  y: number;
  color?: string | undefined;
  width?: number | undefined;
}

const Circle = (props: CircelProps) => {
  const { x, y, color, width } = props;
  return (
    <CircleWrapper left={x} top={y}>
      <IconCircle color={color} width={width} />
    </CircleWrapper>
  );
};

export default Circle;
