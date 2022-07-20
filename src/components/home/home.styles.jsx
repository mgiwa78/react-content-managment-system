import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  .mobile {
    display: block ;
  }
  .desktop {
    display: none ;
  }
  @media screen and (min-width: 700px) {
    .mobile {
      display: none ;
    }
    .desktop {
      display: block ;
    }
  } 
    
`;

export const HomeContainer = styled.div`
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
`;
export const HomeDisplay = styled.div`
  padding: 100px 30px 40px;
  background-color: #20212c;
  height: inherit;
  min-width: 100vw;
  width: max-content;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
