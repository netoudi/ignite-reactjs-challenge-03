import React from 'react';
import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  nowrap?: boolean;
  truncate?: boolean;
};

export function Text({ children, size = 'medium', nowrap = false, truncate = false }: TextProps) {
  return (
    <S.Wrapper size={size} nowrap={nowrap} truncate={truncate}>
      {children}
    </S.Wrapper>
  );
}
