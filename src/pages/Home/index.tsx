import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@app/components/Box';
import { Grid } from '@app/components/Grid';
import { Heading } from '@app/components/Heading';
import { Info } from '@app/components/Info';
import { Post } from '@app/components/Post';
import { Text } from '@app/components/Text';
import * as S from './styles';

export function Home() {
  return (
    <S.Wrapper>
      <S.Profile>
        <Box>
          <S.Content>
            <S.Avatar>
              <S.AvatarImage src="/images/avatar.png" alt="" />
            </S.Avatar>
            <S.Info>
              <S.Header>
                <Heading>Cameron Williamson</Heading>
                <S.Link>
                  <a href="https://github.com" target="_blank">
                    Github
                  </a>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </S.Link>
              </S.Header>
              <S.Bio>
                <Text>
                  Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
                  malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </Text>
              </S.Bio>
              <Info.Root>
                <Info.Item>
                  <Info.Icon>
                    <FontAwesomeIcon icon={faGithub} />
                  </Info.Icon>
                  <Info.Label>cameronwll</Info.Label>
                </Info.Item>
                <Info.Item>
                  <Info.Icon>
                    <FontAwesomeIcon icon={faBuilding} />
                  </Info.Icon>
                  <Info.Label>Rocketseat</Info.Label>
                </Info.Item>
                <Info.Item>
                  <Info.Icon>
                    <FontAwesomeIcon icon={faUserGroup} />
                  </Info.Icon>
                  <Info.Label>32 seguidores</Info.Label>
                </Info.Item>
              </Info.Root>
            </S.Info>
          </S.Content>
        </Box>
      </S.Profile>

      <S.Search>
        <S.Header>
          <Heading size="small">Publicações</Heading>
          <Text size="small">6 publicações</Text>
        </S.Header>
        <form>
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </S.Search>

      <S.Posts>
        <Grid>
          {[1, 2, 3, 4, 5, 6].map((value) => {
            return (
              <Post
                key={value}
                title="JavaScript data types and data structures"
                summary="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
                datetime="Há 1 dia"
              />
            );
          })}
        </Grid>
      </S.Posts>
    </S.Wrapper>
  );
}
