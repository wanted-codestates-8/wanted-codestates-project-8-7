import React, { useRef, useState } from "react";
import styled from "styled-components";

const options = {};

const Options = () => {
  return (
    <Wrapper>
      <Text>옵션 1</Text>
      <ListWrapper>
        <List></List>
      </ListWrapper>
      <OptionItem>
        <button></button>
        <button></button>
        <button></button>
      </OptionItem>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 20px;
`;

const Text = styled.div`
  font-weight: 800;
`;

const ListWrapper = styled.div`
  width: 100%;
`;

const List = styled.div`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  padding: 16px;
  margin-top: 10px;
  width: 400px;
  height: 54px;
`;

const OptionItem = styled.div``;

export default Options;
