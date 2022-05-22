import styled from "styled-components";
import {GeneralStyle} from "./Global";

export const StyledCard = styled.div`
  ${GeneralStyle};

  width: 100%;
  padding: 30px;
  height: {
  "auto"
  };
  background-color: white;
  border: ${({border}) => border};
  border-bottom: ${({borderBottom}) => borderBottom};
  border-left: ${({borderLeft}) => borderLeft};


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 30px;
  }
`;