import styled from "styled-components";
import {GeneralStyle} from "./Global";

export const Flex = styled.div`
  ${GeneralStyle};
  display: flex;
  align-items: ${({alignItems}) => alignItems || "center"};
  flex: ${({flex}) => flex};
  box-shadow: ${({boxShadow}) => boxShadow};

  & > div,
  & > ul {
    flex: 1;

  }
`;

export const ContentBox = styled(Flex)`
  flex-direction: column;
  border-radius: 5%;
  box-shadow: 0 0 0.2em #CBCBCB;
`;

export const SupportNameBox = styled(Flex)`
  font-weight: bold;
  border-radius: 10px;
  max-width: 60px;
  justify-content: center;
  height: 60px;
  background-color: #FFC732;
  margin: 5px 10px 0 0;
`;
