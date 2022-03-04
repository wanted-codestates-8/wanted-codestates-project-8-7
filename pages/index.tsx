import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {

  return <Main>
  </Main>;
};

export const Main = styled.main`
  min-width: 50rem;
  max-width: 80rem;
  min-height: 100vh;
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`;

export default Home;
