import React from 'react';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Box } from '@app/components/Box';
import { Grid } from '@app/components/Grid';
import { Heading } from '@app/components/Heading';
import { Info } from '@app/components/Info';
import { Post } from '@app/components/Post';
import { Text } from '@app/components/Text';
import { PostModel, UserModel } from '@app/utils/models';
import * as S from './styles';

export function Home() {
  const [user, setUser] = React.useState<UserModel | null>(null);
  const [posts, setPosts] = React.useState<PostModel[]>([]);

  React.useEffect(() => {
    axios.get('https://api.github.com/users/rocketseat-education').then((response) => {
      setUser(response.data);
    });
    axios
      .get('https://api.github.com/search/issues?q=%20repo:rocketseat-education/reactjs-github-blog-challenge')
      .then((response) => {
        setPosts(response.data.items);
      });
  }, []);

  const totalPost = posts.length;

  return (
    <S.Wrapper>
      <S.Profile>
        <Box>
          <S.Content>
            <S.Avatar>
              <S.AvatarImage src={user?.avatar_url} alt="" />
            </S.Avatar>
            <S.Info>
              <S.Header>
                <Heading>{user?.name}</Heading>
                <S.Link>
                  <a href={user?.html_url} target="_blank">
                    Github
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </S.Link>
              </S.Header>
              <S.Bio>
                <Text>{user?.bio}</Text>
              </S.Bio>
              <Info.Root>
                <Info.Item>
                  <Info.Icon>
                    <FontAwesomeIcon icon={faGithub} />
                  </Info.Icon>
                  <Info.Label>{user?.login}</Info.Label>
                </Info.Item>
                <Info.Item>
                  <Info.Icon>
                    <FontAwesomeIcon icon={faBuilding} />
                  </Info.Icon>
                  <Info.Label>{user?.type}</Info.Label>
                </Info.Item>
                <Info.Item>
                  <Info.Icon>
                    <FontAwesomeIcon icon={faUserGroup} />
                  </Info.Icon>
                  <Info.Label>{user?.followers} seguidores</Info.Label>
                </Info.Item>
              </Info.Root>
            </S.Info>
          </S.Content>
        </Box>
      </S.Profile>

      <S.Search>
        <S.Header>
          <Heading size="small">Publicações</Heading>
          <Text size="small">{totalPost} publicações</Text>
        </S.Header>
        <form>
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </S.Search>

      <S.Posts>
        <Grid>
          {posts.map((post) => {
            return (
              <Link key={post.number} to={`post/${post.number}`}>
                <Post title={post.title} summary={post.body} datetime={post.created_at} />
              </Link>
            );
          })}
        </Grid>
      </S.Posts>
    </S.Wrapper>
  );
}
