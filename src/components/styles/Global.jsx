import {createGlobalStyle, css} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #F2F2F2;
  }
`;

export const GeneralStyle = css`
  background-color: ${({bg}) => bg};
  width: ${({width}) => width || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || 'auto'};
  height: ${({height}) => height || 'auto'};
  border-radius: ${({radius}) => radius};
  justify-content: ${({justifyContent}) => justifyContent};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  display: ${({display}) => display};
  min-width: ${({minWidth}) => minWidth};
  flex-direction: ${({flexDirection}) => flexDirection};
  box-shadow: ${({boxShadow}) => boxShadow};
`;