import React, { useRef, useState } from "react";
import styled from "styled-components";

const Name: any = () => {

  const [name, setName] = useState<string>('');
  const [isRequired, setIsRequired] = useState<boolean>(true);
  const nameRef = useRef();

  const onChangeNameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value = '') {
      setIsRequired(false);
    }

  }

  return (
    <Wrapper>
      <Text>이름</Text>
      <Input type="name" placeholder="주민등록상 이름 입력" onChange={onChangeNameValue} value={name} />
      <Warning>
        이름 항목은 필수 정보입니다.
      </Warning>
    </Wrapper>
  )
};

const Wrapper = styled.div``;

const Text = styled.div`
  font-weight: 800;
`;

const Input = styled.input`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  padding: 16px;
  margin-top: 10px;
  width: 400px;
  height: 54px;
`;

const Warning = styled.div`
  /* display: ${props => props ? 'block' : 'none'} */
  color: red;
  font-weight: lighter;
  font-size: 12px;
`;

export default Name;