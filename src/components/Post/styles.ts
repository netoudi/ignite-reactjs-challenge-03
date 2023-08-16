import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${theme.border.radius};
    background: ${theme.colors['base-post']};
    padding: ${theme.spacings.medium};
    border: 2px solid transparent;
    transition: ${theme.transition.fast};

    &:hover {
      border: 2px solid ${theme.colors['base-label']};
    }
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
