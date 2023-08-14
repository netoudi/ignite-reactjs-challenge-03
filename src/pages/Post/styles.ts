import styled, { css } from 'styled-components';
import { Box } from '@app/components/Box';
import { Container } from '@app/components/Container';

export const Wrapper = styled(Container)``;

export const PostInfo = styled.div``;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.2rem;
`;

export const Link = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${theme.colors.blue};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-style: normal;
    font-weight: ${theme.font.bold};
    line-height: 0;
    text-transform: uppercase;

    a {
      color: ${theme.colors.blue};
      text-decoration: none;
    }
  `};
`;

export const PostContent = styled.div`
  ${({ theme }) => css`
    padding: 4rem 3.2rem;
    color: ${theme.colors['base-text']};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-style: normal;
    font-weight: ${theme.font.normal};
    line-height: 160%;

    a {
      color: ${theme.colors.blue};
      text-decoration: underline;
    }
  `};
`;
