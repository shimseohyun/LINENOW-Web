import styled from 'styled-components';

export const LoginBottomsheetContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const LoginBottomsheetContentTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.25rem;
  gap: 0.75rem;
`;

export const LoginBottomsheetContentTopTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.font.black};
`;

export const LoginBottomsheetContentTopSubTitle = styled.div`
  ${({ theme }) => theme.fonts.b1}
  color: ${({ theme }) => theme.colors.font.blackLight};
`;
