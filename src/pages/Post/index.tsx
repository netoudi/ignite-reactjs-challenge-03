import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Heading } from '@app/components/Heading';
import { Info } from '@app/components/Info';
import { PostModel } from '@app/utils/models';
import * as S from './styles';

export function Post() {
  const { id } = useParams();
  const [post, setPost] = React.useState<PostModel | null>();

  React.useEffect(() => {
    axios
      .get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  if (!post) {
    return null;
  }

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
              <a href={post.html_url} target="_blank">
                ver no github
              </a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </S.Link>
          </S.Header>
          <Heading size="large">{post.title}</Heading>
          <Info.Root>
            <Info.Item>
              <Info.Icon>
                <FontAwesomeIcon icon={faGithub} />
              </Info.Icon>
              <Info.Label>{post.user.login}</Info.Label>
            </Info.Item>
            <Info.Item>
              <Info.Icon>
                <FontAwesomeIcon icon={faCalendarDay} />
              </Info.Icon>
              <Info.Label>{post.created_at}</Info.Label>
            </Info.Item>
            <Info.Item>
              <Info.Icon>
                <FontAwesomeIcon icon={faComment} />
              </Info.Icon>
              <Info.Label>{post.comments} comentários</Info.Label>
            </Info.Item>
          </Info.Root>
        </S.Content>
      </S.PostInfo>

      <S.PostContent>
        <ReactMarkdown children={post.body} />
      </S.PostContent>
    </S.Wrapper>
  );
}
