import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '@app/components/Heading';
import { Info } from '@app/components/Info';
import * as S from './styles';

const content = `
Programming languages all have built-in data structures, but these often differ from one language to
another. This article attempts to list the built-in data structures available in JavaScript and what
properties they have. These can be used to build other data structures. Wherever possible, comparisons with
other languages are drawn.

[Dynamic typing](https://github.com)

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with
any particular value type, and any variable can be assigned (and re-assigned) values of all types:
`;

export function Post() {
  return (
    <S.Wrapper>
      <S.PostInfo>
        <S.Content>
          <S.Header>
            <S.Link>
              <FontAwesomeIcon icon={faChevronLeft} />
              <Link to="/">voltar</Link>
            </S.Link>
            <S.Link>
              <a href="https://github.com" target="_blank">
                ver no github
              </a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </S.Link>
          </S.Header>
          <Heading size="large">JavaScript data types and data structures</Heading>
          <Info.Root>
            <Info.Item>
              <Info.Icon>
                <FontAwesomeIcon icon={faGithub} />
              </Info.Icon>
              <Info.Label>cameronwll</Info.Label>
            </Info.Item>
            <Info.Item>
              <Info.Icon>
                <FontAwesomeIcon icon={faCalendarDay} />
              </Info.Icon>
              <Info.Label>Há 1 dia</Info.Label>
            </Info.Item>
            <Info.Item>
              <Info.Icon>
                <FontAwesomeIcon icon={faComment} />
              </Info.Icon>
              <Info.Label>5 comentários</Info.Label>
            </Info.Item>
          </Info.Root>
        </S.Content>
      </S.PostInfo>

      <S.PostContent>
        <ReactMarkdown children={content} />
      </S.PostContent>
    </S.Wrapper>
  );
}
