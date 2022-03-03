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

  cursor: pointer;
  :hover {
    background-color: #a0c6f1;
    box-shadow: rgba(46, 124, 240, 0.4) 5px 5px, rgba(46, 124, 240, 0.3) 10px 10px, rgba(46, 124, 240, 0.2) 15px 15px, rgba(46, 124, 240, 0.1) 20px 20px, rgba(46, 124, 240, 0.05) 25px 25px;
  }
`

export default SingleFormList;