import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header";
import SingleFormList from "../components/SingleFormList";



const FormList: NextPage = () => {
  return (
  <FormListWrapper>
    <Header />
    <SingleFormList />
  </FormListWrapper>
  ) 
};

const FormListWrapper = styled.main`
  min-width: 50rem;
  max-width: 80rem;
  height: 100vh;
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export default FormList;