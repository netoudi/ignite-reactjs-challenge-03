import styled, { DefaultTheme, css } from 'styled-components';
import { HeadingProps } from '@app/components/Heading';

const modifiers = {
  small: (theme: DefaultTheme) => css`
    color: ${theme.colors['base-subtitle']};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-style: normal;
    font-weight: ${theme.font.bold};
    line-height: 160%;
  `,

  medium: (theme: DefaultTheme) => css`
    color: ${theme.colors['base-title']};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xlarge};
    font-style: normal;
    font-weight: ${theme.font.bold};
    line-height: 160%;
  `,

  large: (theme: DefaultTheme) => css`
    color: ${theme.colors['base-title']};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxlarge};
    font-style: normal;
    font-weight: ${theme.font.bold};
    line-height: 130%;
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    ${!!size && modifiers[size](theme)}
  `};
`;
