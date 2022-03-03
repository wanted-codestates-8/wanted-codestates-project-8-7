import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoName>datable</LogoName>
        <CreateFormBtn />
      </HeaderWrapper>

    </>
  );

};

const HeaderWrapper = styled.div`
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* border-bottom: 1px solid black; */
`

const LogoName = styled.div`
  font-size: 7rem;
  font-weight: 700;
  padding: 3rem;
  width: 50rem;
  height: 10rem;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
`

const CreateFormBtn = styled.button`
  position: relative;
  display: inline-flex;
  width: 180px;
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
    content: "CREATE FORM";
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid rgba(46, 124, 240);
    box-sizing: border-box;
    border-radius: 5px;
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

export default Header;