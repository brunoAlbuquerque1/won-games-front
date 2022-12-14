import styled, { css, DefaultTheme } from "styled-components";
import { HeadingProps, LineColors } from ".";
import media from "styled-media-query";

export const wrapperModifiers = {
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBootom: (theme: DefaultTheme, lineColor: LineColors) => css`
    margin-bottom: ${theme.spacings.medium};
    bottom: -0.5rem;
    width: 5rem;
    border-bottom: 0.5rem solid ${theme.colors[lineColor]};
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineColor, lineBootom,size }) => css`
    color: ${theme.colors[color!]};
    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBootom && wrapperModifiers.lineBootom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}

  `}
`;
