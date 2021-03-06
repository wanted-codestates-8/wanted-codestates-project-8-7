import { useState } from "react";
import styled from "styled-components";

interface NameProps {
  label: string | undefined;
  placeholder: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Name = ({ label, placeholder, onChangeName, name }: NameProps) => {
  const [inputState, setInputState] = useState(false);

  return (
    <Wrapper>
      <Text>{label}</Text>
      <Input
        onBlur={() => setInputState(true)}
        type="text"
        placeholder={placeholder}
        onChange={onChangeName}
        value={name}
      />
      {name === "" && inputState ? (
        <Warning>{label} 항목은 필수 정보입니다.</Warning>
      ) : null}
    </Wrapper>
  );
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
  color: red;
  font-weight: lighter;
  font-size: 12px;
`;

export default Name;
