import * as S from "./styles";

export type LineColors = "primary" | "secondary";
export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  lineLeft: boolean;
  lineBootom: boolean;
  lineColor?: LineColors;
  size?: "small" | "medium" | "huge";
};

const Heading = ({
  children,
  color,
  lineLeft,
  lineBootom,
  lineColor,
  size,
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineColor={lineColor}
    lineBootom={lineBootom}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
