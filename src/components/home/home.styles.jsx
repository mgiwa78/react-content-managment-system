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
  min-width: 100vw;
  min-height: 100vh;

  overflow: hidden !important;
`;
export const HomeDisplay = styled.div`
  /* padding: 130px 30px 40px; */
  overflow: hidden !important;

  width: max-content;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
`;
