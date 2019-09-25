import styled from "styled-components";

export const Link = styled.a`
  text-decoration: ${({ decoration }) => decoration || "underline"};
`;
