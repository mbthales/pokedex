import styled from "styled-components";

import { colors } from '../../AppStyle';

const Header = styled.header`
  height: 200px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 3rem;
    color: ${colors.secundary};
    font-weight: normal;
  }
`;

const LoadingMsg = styled.p`
  margin-top: 60px;
`;

export { Header, LoadingMsg };