import React, { useState } from "react";
import type { NextPage } from "next";
import Form from "components/Form";
import { makeStructure } from "utils/makeStructure";
import styled, { css } from "styled-components";
import { Main } from "./index";
import { v4 as uuid } from "uuid";
import "react-quill/dist/quill.snow.css";

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
}

const Forms: NextPage = () => {
  const [title, setTitle] = useState("");
  const [formList, setFormList] = useState<State[]>([]);

  const onChange = (key: string, newField: State) => {
    const idx = formList.findIndex((form) => form.key === key);

    setFormList(formList.splice(idx, 1, newField));
  };

  function addForm() {
    const newData = {
      ...formList,
    };
    newData.push({
      key: uuid(),
      id: "name",
      type: "text",
      required: false,
      label: "",
      placeholder: "",
    });

    setFormList(newData);
  }

  return (
    <Main>
      <InputForm>
        <Section>
          <Title>제목*</Title>
          <Input></Input>
        </Section>

        <Section>
          <Title>필드목록*</Title>
          <FormList>
            {/* map으로 돌아갈것임 */}
            <FormItem>
              <Form
                state={{
                  key: "0",
                  id: "0",
                  type: "text",
                  required: true,
                  label: "이름",
                }}
                onChange={onChange}
              />
            </FormItem>
          </FormList>
        </Section>

        <AddButton>필드 추가하기</AddButton>

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
