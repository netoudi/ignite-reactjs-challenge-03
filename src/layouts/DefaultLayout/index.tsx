import { Outlet } from 'react-router-dom';
import { Header } from '@app/components/Header';
import * as S from './styles';

export function DefaultLayout() {
  return (
    <S.Wrapper>
      <Header />

      <S.Content>
        <Outlet />
      </S.Content>
    </S.Wrapper>
  );
}
