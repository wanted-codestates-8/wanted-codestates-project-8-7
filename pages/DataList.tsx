import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/Header";
import { FcTodoList } from 'react-icons/fc'

const DataList: NextPage = () => {
  return (
    <>
      <DataListWrapper>
        <Header />
        <Data>
          <TitleValue>
            <FcTodoList 
            size="2.5rem" 
            style={{ marginRight:"15px"}} />
            이름</TitleValue>
          <InputValue>김혜영</InputValue>
          <TitleValue>
            <FcTodoList 
            size="2.5rem" 
            style={{ marginRight:"15px"}} />
            휴대폰 번호</TitleValue>
          <InputValue>010-1234-5678</InputValue>
          <TitleValue>
            <FcTodoList 
            size="2.5rem" 
            style={{ marginRight:"15px"}} />
            배송지</TitleValue>
          <InputValue>서울 성동구 독서당로 160 한남하이츠아파트 상가 1층</InputValue>
          <TitleValue>
            <FcTodoList 
            size="2.5rem" 
            style={{ marginRight:"15px"}} />
            옵션 1</TitleValue>
          <InputValue>사이즈 S</InputValue>
          <TitleValue>
          <FcTodoList 
            size="2.5rem" 
            style={{ marginRight:"15px"}} />첨부파일</TitleValue>
            <PrevBtn />
            <NextBtn />
        </Data>
      </DataListWrapper>
    </>
  ) 
};

const DataListWrapper = styled.main`
  min-width: 50rem;
  max-width: 80rem;
  /* height: 100vh; */
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  /* overflow: scroll; */
`;

const Data = styled.div`
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 10px;
  width: 80%;
  /* height: 80%; */
  margin: 4rem 0rem 2rem 0rem;
  background-color: #F5F5F5;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  padding: 5% 10% 0% 10%;

  flex-grow: 1;

  overflow: scroll;

`
const TitleValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 2rem 3rem;
`

const InputValue = styled.div`
  background-color: white;
  font-size: 2rem;
  margin: 1rem 0 2rem 0;
  min-height: 5rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
  padding: 0.2rem 0.2rem 0.2rem 3rem;
  line-height: 5rem;
  overflow: auto
`

const PrevBtn = styled.button`
  position: relative;
  display: inline-flex;
  width: 150px;
  height: 55px;
  margin: 45px 35px 35px 35px;
  perspective: none;

  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;

  :before,:after {
    position: absolute;
    content: "PREV";
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid rgba(46, 124, 240);
    box-sizing: border-box;
  }

  :before {
    color: #fff;
    background: rgba(46, 124, 240);
    transform: rotateY(0deg) translateZ(25px);
  }

  :after {
    color: rgba(46, 124, 240);
    transform: rotateX(90deg) translateZ(25px);
  }

  :hover{
  transform: translateZ(-25px) rotateX(-90deg);
}
`

const NextBtn = styled(PrevBtn)`
  :before,:after {
    content: "NEXT";
  }
`

export default DataList;