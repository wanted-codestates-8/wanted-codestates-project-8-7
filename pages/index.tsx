import type { NextPage } from "next";
import styled from "styled-components";
import FormList from "../components/FormList";

const Home: NextPage = () => {
  return (
    <Main>
      <FormList />
    </Main>
  );
};

export const Main = styled.main`
  /* min-width: 50rem; */
  max-width: 80rem;
  height: 100vh;
  /* border: solid 1px rgba(0, 0, 0, 0.2); */
  margin: 0 auto;
`;

export default Home;
