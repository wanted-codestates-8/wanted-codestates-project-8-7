import React, { useEffect, useState, useCallback } from "react";
import type { NextPage } from "next";
import Form from "components/Form";
import styled, { css } from "styled-components";
import { Main } from "./index";
import "react-quill/dist/quill.snow.css";
import { makeStructure } from "utils/makeStructure";
import { useDispatch } from "react-redux";
import { addFormData } from "redux/slice";
import { findBlank } from "utils/findBlank";
import { useRouter } from "next/router";
import { debounce } from "utils/debounce";

export interface State {
  key: string;
  id: string;
  type: string;
  required: boolean;
  label: string;
  placeholder?: string;
  options?: string[];
  description?: string;
  contents?: string;
}

export interface FormProps {
  state: State;
  onChange: (key: string, newField: State) => void;
  onRemove: (key: string) => void;
}

const Forms: NextPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [formList, setFormList] = useState<State[]>([]);
  const [submitState, setSubmitState] = useState(false);
  console.log(submitState, "submitState!!!");

  const router = useRouter();

  const onChange = (key: string, newField: State) => {
    const idx = formList.findIndex((form) => form.key === key);

    const tempList = [...formList];
    tempList[idx] = newField;

    setFormList(tempList);
  };

  function addForm() {
    const newData = [...formList];

    newData.push(makeStructure("text"));

    setFormList(newData);
  }

  const removeForm = (key: string) => {
    const filteredFormList = formList.filter((form) => form.key !== key);
    setFormList(filteredFormList);
  };

  const saveForm = () => {
    if (!title || !formList.length || findBlank(formList)) {
      return;
    }

    dispatch(
      addFormData({
        title,
        formList,
      })
    );

    router.push("/");
  };

  const checkBlank = () => {
    if (title && formList.length && !findBlank(formList)) {
      setSubmitState(true);
    } else {
      setSubmitState(false);
    }
  };

  const debounceBlankChecker = useCallback(debounce(300), []);

  useEffect(() => {
    debounceBlankChecker(checkBlank);
  }, [title, formList]);

  return (
    <Main>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <Section>
          <Title>제목*</Title>
          <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        </Section>

        <Section>
          <Title>필드목록*</Title>
          <FormList>
            {formList.map((form) => (
              <FormItem key={form.key}>
                <Form state={form} onChange={onChange} onRemove={removeForm} />
              </FormItem>
            ))}
          </FormList>
        </Section>

        <AddButton onClick={addForm}>필드 추가하기</AddButton>

        <SaveButton onClick={saveForm} className={!submitState ? "inactive" : ""}>
          저장 하기
        </SaveButton>
      </InputForm>
    </Main>
  );
};

const InputForm = styled.form`
  width: 80%;
  margin: 0 auto;
`;
const Title = styled.h3`
  color: grey;
  margin-top: 20px;
`;
const Section = styled.section``;
const Input = styled.input`
  width: 100%;
  height: 45px;
  border: solid 1px #eeeef0;
  border-radius: 10px;
  margin: 0 auto;
`;
const FormList = styled.ul``;
const FormItem = styled.li``;
const AddButton = styled.button`
  border: solid 1px blue;
  color: ${({ theme }) => theme.colors.pointColor};
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  font-size: 18px;
`;
const SaveButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.pointColor};
  color: white;
  float: right;
  margin-top: 20px;
  font-size: 18px;

  &.inactive {
    background-color: ${({ theme }) => theme.colors.grayTwo};
  }
`;

export default Forms;
