import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  .mobile {
    display: block ;
  }
  .desktop {
    display: none !important ;
  }
  @media screen and (min-width: 700px) {
    .mobile {
      display: none ;
    }
    .desktop {
      display: block !important;
    }
  } 
    
`;

export const HomeContainer = styled.div`
  height: inherit;

  height: inherit;
  overflow: hidden;
  width: 100vw;
`;
export const HomeDisplay = styled.div`
  overflow: hidden;
  width: 100vw;

  /* padding: 130px 30px 40px; */
  min-width: 100vw;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: calc(100vh - 60.99px);
  /* 
  @media screen and (min-width: 700px) {
    min-height: calc(100vh - 300px);
    height: max-content;
  }
  @media screen and (min-width: 1000px) {
    min-height: calc(100vh - 93.99px);
  } */
`;
