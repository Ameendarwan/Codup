import { FC } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Topbar from "./components/Topbar";
import FindProduct from "./pages/findProduct";

const Main = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;
  overflow-x: hidden;

  > article {
    padding: ${({ theme }) => theme.size24} ${({ theme }) => theme.size40};
  }
`;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <article>
          <Topbar />
          <FindProduct />
        </article>
      </Main>
    </>
  );
};

export default App;
