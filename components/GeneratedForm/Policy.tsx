import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const Policy = () => {
  return (
    <Wrapper>
      <Label>
        <Items>
          <CheckBtn type="checkbox"></CheckBtn>
          <Text>개인정보 수집 약관 동의 (필수)</Text>
        </Items>
        <PolicyLink>
          <MdKeyboardArrowRight size={24} />
        </PolicyLink>
      </Label>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 20px;
  width: 400px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const CheckBtn = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Text = styled.div``;

const PolicyLink = styled.a`
  cursor: pointer;
`;

export default Policy;
