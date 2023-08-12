import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};

    border-radius: ${theme.border.radius};
    background: ${theme.colors['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  `}
`;
