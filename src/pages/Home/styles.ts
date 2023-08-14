import styled, { css } from 'styled-components';
import { Container } from '@app/components/Container';

export const Wrapper = styled.div``;

///
/// PROFILE
///
export const Profile = styled(Container)``;

export const Content = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Bio = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;
`;

export const Info = styled.div``;

export const Avatar = styled.div``;

export const AvatarImage = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
  object-fit: cover;
`;

///
/// SEARCH
///
export const Search = styled(Container)`
  ${({ theme }) => css`
    padding-top: 7.2rem;
    padding-bottom: 1.6rem;

    form {
      margin-top: 1.2rem;
    }

    input {
      width: 100%;
      padding: 1.2rem 1.6rem;

      border-radius: 0.6rem;
      border: 1px solid ${theme.colors['base-border']};
      background: ${theme.colors['base-input']};

      color: ${theme.colors['base-label']};

      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-style: normal;
      font-weight: ${theme.font.normal};
      line-height: 160%;
    }
  `};
`;

///
/// POSTS
///
export const Posts = styled(Container)``;
