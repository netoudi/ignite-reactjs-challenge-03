import logo from '@app/assets/logo.svg';
import * as S from './styles';

export function Logo() {
  return (
    <S.Wrapper>
      <img src={logo} alt="Github Blog" />
    </S.Wrapper>
  );
}
