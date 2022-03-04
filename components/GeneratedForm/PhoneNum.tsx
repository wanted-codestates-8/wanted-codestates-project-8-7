import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface PhoneNumProps {
  label: string | undefined;
  onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  number: string;
  setNumber: any;
  inputState: boolean;
}

const PhoneNum = ({
  label,
  onChangeNumber,
  number,
  setNumber,
  inputState,
}: PhoneNumProps) => {
  return (
    <Wrapper>
      <Text> {label}</Text>{" "}
      <Input
        type="text"
        onChange={onChangeNumber}
        value={number}
        onKeyDown={(e) =>
          e.keyCode === 8 ? setNumber(number.replace(/-$/, "")) : null
        }
        // onKeyDown={(e) => e.keyCode === 8 ? setNumber(number.slice(0,number.length))
        // : null}
      />
      {number.length > 0 && !inputState ? (
        <Warning>휴대폰 번호가 옳바르지 않습니다.</Warning>
      ) : null}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 20px;
`;

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
  /* display: ${(props) => (props ? "block" : "none")} */
  color: red;
  font-weight: lighter;
  font-size: 12px;
`;

export default PhoneNum;
