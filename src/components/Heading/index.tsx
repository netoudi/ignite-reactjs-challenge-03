import React from 'react';
import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

export function Heading({ children, size = 'medium' }: HeadingProps) {
  return <S.Wrapper size={size}>{children}</S.Wrapper>;
}
