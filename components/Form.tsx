import React, { memo, useState } from "react";
import { FormProps } from "pages/forms";
import { makeStructure } from "utils/makeStructure";
import Editor from "./Editor";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { CgArrowsVAlt } from "react-icons/cg";

function Form({ state, onChange }: FormProps) {
  const [value, setValue] = useState("");
  console.log(value, "1212312312#");
  function handleValue(value: any) {
    console.log(value, "12312312312312411111");
    setValue(value);
  }

  return (
    <EditorWrapper>
      <EditorHeader>
        <Select>
          <option>텍스트</option>
          <option>전화번호</option>
          <option>주소</option>
          <option>드롭다운</option>
          <option>첨부파일</option>
          <option>이용약관</option>
        </Select>
        <Label />
        <CheckBoxWrapper>
          <CheckBox type="checkbox" />
          <div>필수</div>
        </CheckBoxWrapper>

        <Drag>
          <CgArrowsVAlt></CgArrowsVAlt>
        </Drag>
        <DelteBtn>
          <AiOutlineClose size={23}></AiOutlineClose>
        </DelteBtn>
      </EditorHeader>
      <PlaceHolder placeholder="플레이스홀더 예) '예) 11/10(토) 15:00'"></PlaceHolder>
      <Editor value={value} onChange={handleValue} />
    </EditorWrapper>
  );
}
const EditorWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  border: solid 1px #eeeef0;
  margin-top: 20px;
`;
const EditorHeader = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
`;
const Select = styled.select`
  width: 25%;
  height: 100%;
  text-align: start;
  border: none;
  font-size: 18px;
  padding: 0 18px;
  outline: none;
  border-right: solid 1px #eeeef0;
`;
const Option = styled.option`
  background-color: white;
`;
const Label = styled.input`
  width: 45%;
  height: 100%;
  border: none;
  border-right: solid 1px #eeeef0;
  font-size: 18px;
`;
const CheckBoxWrapper = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-right: solid 1px #eeeef0;
  background-color: #f8f8f8;
`;
const CheckBox = styled.input`
  margin-right: 5px;
`;

const Drag = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-right: solid 1px #eeeef0;
  cursor: pointer;
`;

const DelteBtn = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;
`;

const PlaceHolder = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-top: solid 1px #eeeef0;
  border-bottom: solid 1px #eeeef0;
  font-size: 18px;
`;
export default memo(Form);
