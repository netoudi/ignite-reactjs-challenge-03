import styled, { css } from 'styled-components';

export interface RootProps {
  direction?: 'row' | 'column';
}

export const Root = styled.div<RootProps>`
  ${({ theme, direction = 'row' }) => css`
    display: flex;

    ${direction === 'row' &&
    css`
      flex-direction: row;
      gap: ${theme.spacings.small};
    `}

    ${direction === 'column' &&
    css`
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
    `}
  `};
`;
