import styled, {css} from "styled-components";
import {GeneralStyle} from "./Global";

export const styledText = css`
  color: ${({color}) => color};
  font-family: ${({fontFamily}) => fontFamily};
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  line-height: ${({fontHeight}) => fontHeight};
  flex-wrap: nowrap;
  ${GeneralStyle};
`

export const Text = styled.span`${styledText}`;

export const PercentageTextNumber = styled.h2`
  font-size: 2.5rem;
  color: #00A152;
  font-weight: bold;
  margin: 0;
`;

export const PercentageTextTitle = styled.h3`
  color: #918D8D;
  font-weight: bold;
  margin: 0;
`;
