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
  overflow: hidden !important;
`;
export const HomeDisplay = styled.div`
  overflow: hidden !important;

  /* padding: 130px 30px 40px; */
  padding: 40px 30px;
  min-width: calc(100vw - 100px);
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: calc(100vh - 60.99px);

  @media screen and (min-width: 700px) {
    min-height: calc(100vh - 80px);
  }
  @media screen and (min-width: 1000px) {
    min-height: calc(100vh - 93.99px);
  }
`;
