import styled from "styled-components";

export const Position = styled.div`
  display: flex;
  justify-content: ${({ horizontal }) => horizontal};
  align-items: ${({ vertical }) => vertical};
  height: 100%;
  width: 100%;
  position: relative;
`;
