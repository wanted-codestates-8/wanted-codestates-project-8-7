import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Form from "components/Form";
import styled, { css } from "styled-components";
import { Main } from "./index";
import { v4 as uuid } from "uuid";
import "react-quill/dist/quill.snow.css";
import { makeStructure } from "utils/makeStructure";

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
  const [title, setTitle] = useState("");
  const [formList, setFormList] = useState<State[]>([]);

  const onChange = (key: string, newField: State) => {
    const idx = formList.findIndex((form) => form.key === key);

    const tempList = [...formList];
    tempList[idx] = newField;

    setFormList(tempList);
  };

  useEffect(() => {
    console.log(formList);
  }, [formList]);

  function addForm() {
    const newData = [...formList];

    newData.push(makeStructure("text"));

    setFormList(newData);
  }

  const removeForm = (key: string) => {
    const filteredFormList = formList.filter((form) => form.key !== key);
    setFormList(filteredFormList);
  };

  return (
    <Main>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <Section>
          <Title>제목*</Title>
          <Input></Input>
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

        <SaveButton>저장 하기</SaveButton>
      </InputForm>
    </Main>
  );

  //   return data.formList.map((data,idx) => <Form key={idx} state={} onChange={}/>);
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
  color: blue;
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
  background-color: blue;
  color: white;
  float: right;
  margin-top: 20px;
  font-size: 18px;
`;

export default Forms;
