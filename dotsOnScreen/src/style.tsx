import styled from "styled-components";

interface Props {
  top: number;
  left: number;
}

export const DotStyle = styled.div<Props>`
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: red;
`;
