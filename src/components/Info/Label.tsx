import styled, { css } from 'styled-components';

export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors['base-subtitle']};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    font-weight: ${theme.font.normal};
    line-height: 160%;
  `};
`;
