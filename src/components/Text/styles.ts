import styled, { DefaultTheme, css } from 'styled-components';
import { TextProps } from '@app/components/Text';

const modifiers = {
  small: (theme: DefaultTheme) => css`
    color: ${theme.colors['base-span']};

    font-family: Nunito;
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    font-weight: ${theme.font.normal};
    line-height: 160%;
  `,

  medium: (theme: DefaultTheme) => css`
    color: ${theme.colors['base-text']};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    font-weight: ${theme.font.normal};
    line-height: 160%;
  `,
};

export const Wrapper = styled.p<TextProps>`
  ${({ theme, size, nowrap, truncate }) => css`
    ${!!size && modifiers[size](theme)}

    ${nowrap &&
    css`
      white-space: nowrap;
    `}

    ${truncate &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
    `}
  `};
`;
