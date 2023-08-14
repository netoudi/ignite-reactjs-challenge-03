import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: ${theme.border.radius};
    background: ${theme.colors['base-post']};
    padding: ${theme.spacings.medium};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

export const Summary = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;
