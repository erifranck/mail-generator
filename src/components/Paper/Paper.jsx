import styled from "styled-components";

export const Paper = styled.div`
  background-color: ${({ bg, theme }) => bg || theme.colors.white};
  color: ${({ color, theme }) => color || theme.colors.black};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  box-shadow: ${({ deph, theme }) => theme.dephs[deph || 0]};
  padding: ${({ padding }) => padding || ""};
  position: ${({ position }) => position || "static"};
  box-sizing: border-box;
`;
