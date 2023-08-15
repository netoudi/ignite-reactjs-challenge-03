import { Heading } from '@app/components/Heading';
import { Text } from '@app/components/Text';
import * as S from './styles';

export type PostProps = {
  title: string;
  summary: string;
  datetime: string;
};

export function Post({ title, summary, datetime }: PostProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading size="medium">{title}</Heading>
        <Text size="small" nowrap>
          {datetime}
        </Text>
      </S.Header>
      <S.Summary>
        <Text size="medium" nowrap truncate>
          {summary}
        </Text>
      </S.Summary>
    </S.Wrapper>
  );
}
