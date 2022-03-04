import React from 'react';
import styled from 'styled-components';
import { FaWpforms } from 'react-icons/fa'

const SingleFormList= () => {
  const singleform = ["rabbit", "bear", "hamster", "dragon", "dog"];

  return (
    <>
      {singleform.map((el, idx) => {
        return (
        <SingleFormListWrapper key={idx}>
          <ViewResultBtn />
          <FaWpforms size="7rem" style={{ margin: "1rem 5rem 1rem 5rem" }} />
          <div style={{ fontSize: "3rem" }}>{el}</div>          
        </SingleFormListWrapper>
        )
      })}
    </>
  );
};

const SingleFormListWrapper = styled.div`
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 10px;
  width: 80%;
  min-height: 15rem;
  margin: 4rem 0rem 2rem 0rem;
  background-color: #F5F5F5;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;
  align-items: center;

  flex: 1 1 0;

  :hover {
    /* background-color: #a0c6f1; */
    box-shadow: rgba(46, 124, 240, 0.4) 5px 5px, rgba(46, 124, 240, 0.3) 10px 10px, rgba(46, 124, 240, 0.2) 15px 15px, rgba(46, 124, 240, 0.1) 20px 20px, rgba(46, 124, 240, 0.05) 25px 25px;
  }
`

const ViewResultBtn = styled.button`
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
    content: "VIEW RESULT";
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

export default SingleFormList;