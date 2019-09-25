import styled from "styled-components";

export const Text = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme, color }) => color || theme.colors.black};
  font-size: ${({ theme, size }) => theme.font[size || "small"]};
`;
