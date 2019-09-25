import styled from "styled-components";

export const Field = styled.input`
  border: 1px solid white;
  height: ${({ theme }) => theme.font.large};
  outline: none;
  background: transparent;
  font-size: ${({ theme }) => theme.font.large};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
