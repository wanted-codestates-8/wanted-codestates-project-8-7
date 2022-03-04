import React, { memo, useEffect, useState } from "react";
import { FormProps } from "pages/forms";
import { makeStructure } from "utils/makeStructure";
import Editor from "./Editor";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { CgArrowsVAlt } from "react-icons/cg";

function Form({ state, provided, onChange, onRemove }: FormProps) {
  const [value, setValue] = useState("");
  const [label, setLabel] = useState(state.label);
  const [placeholder, setPlaceholder] = useState(state.placeholder);
  const [checked, setChecked] = useState(state.required ? true : false);
  const [selected, setSelected] = useState(state.type);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  function handleValue(value: string) {
    setValue(value);
    let newField;

    if (state.type === "agreement") {
      newField = { ...state, contents: value };
    } else {
      newField = { ...state, description: value };
    }

    onChange(state.key, newField);
  }

  const handleDeletTag = (idx: number) => {
    let currentTags = tags;
    currentTags.splice(idx, 1);
    setTags([...currentTags]);
  };

  const onSelectAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tagInput.trim().length > 1 && e.key === ",") {
      const newTags = [...tags, tagInput.slice(0, -1)];
      setTags(newTags);
      setTagInput("");

      const newField = { ...state, options: newTags };
      onChange(state.key, newField);
    }
  };

  const onPlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(e.target.value);
    const newField = { ...state, placeholder: e.target.value };
    onChange(state.key, newField);
  };

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    const newField = { ...state, label: e.target.value };
    onChange(state.key, newField);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newField = makeStructure(e.target.value);
    onChange(state.key, newField);
  };

  return (
    <EditorWrapper>
      <EditorHeader>
        <Select value={selected} onChange={(e) => onSelectChange(e)}>
          <option value="text">텍스트</option>
          <option value="phone">전화번호</option>
          <option value="address">주소</option>
          <option value="select">드롭다운</option>
          <option value="file">첨부파일</option>
          <option value="agreement">이용약관</option>
        </Select>
        <Label value={label} onChange={onLabelChange} />
        <CheckBoxWrapper>
          <CheckBox
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <div>필수</div>
        </CheckBoxWrapper>

        <Drag {...provided.dragHandleProps}>
          <CgArrowsVAlt></CgArrowsVAlt>
        </Drag>
        <DelteBtn onClick={() => onRemove(state.key)}>
          <AiOutlineClose size={23}></AiOutlineClose>
        </DelteBtn>
      </EditorHeader>
      {(state.type === "text" || state.type === "phone") && (
        <Input
          value={placeholder}
          placeholder="플레이스홀더 예) '예) 11/10(토) 15:00'"
          onChange={onPlaceholderChange}
        />
      )}
      {state.type === "select" ? (
        <SelectWrapper>
          <TagsWrapper>
            {tags.length
              ? tags.map((tag, idx) => (
                  <TagItem key={idx}>
                    <TagContent>{tag}</TagContent>
                    <DelteTag onClick={() => handleDeletTag(idx)}>
                      <AiOutlineClose size={15}></AiOutlineClose>
                    </DelteTag>
                  </TagItem>
                ))
              : ""}
          </TagsWrapper>

          <Input
            placeholder="옵션값을 입력하세요"
            onKeyUp={onSelectAdd}
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
        </SelectWrapper>
      ) : (
        <></>
      )}
      <Editor value={value} onChange={handleValue} />
    </EditorWrapper>
  );
}
const EditorWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  border: solid 1px #eeeef0;
  margin-bottom: 20px;
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

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-top: solid 1px #eeeef0;
  border-bottom: solid 1px #eeeef0;
  font-size: 18px;
`;
const SelectWrapper = styled.div`
  width: 100%;
  height: 45px;
  border: none;
  border-top: solid 1px #eeeef0;
  border-bottom: solid 1px #eeeef0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TagsWrapper = styled.ul`
  height: 45px;
  border: none;
  border-top: solid 1px #eeeef0;
  border-bottom: solid 1px #eeeef0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TagItem = styled.li`
  padding: 2px 5px;
  background-color: rgb(69, 208, 107, 0.1);
  border: solid 1px #45d06b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2px;
  border-radius: 3px;
`;
const DelteTag = styled.div`
  width: 15px;
  height: 15px;
  text-align: center;
  margin-left: 5px;
`;
const TagContent = styled.div`
  color: #45d06b;
`;
export default memo(Form);
