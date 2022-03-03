import React, { useRef, useState } from "react";
import styled from "styled-components";

const options = ["S", "L", "XL", "XXL"];

const Options = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <Text>옵션1</Text>
      <ListWrapper>
        <List onClick={() => setIsActive(!isActive)} />
        {isActive ? (
          <OptionItem>
            {options &&
              options.map((item, idx) => {
                item;
              })}
          </OptionItem>
        ) : null}
      </ListWrapper>
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

const List = styled.select`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  padding: 16px;
  margin-top: 10px;
  width: 400px;
  height: 54px;
`;

const OptionItem = styled.option``;

export default Options;
