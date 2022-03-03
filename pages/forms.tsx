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
      <TitleSection></TitleSection>

      <FormSection>
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
      </FormSection>

      <AddButton />

      <SaveSection />
    </Main>
  );

  //   return data.formList.map((data,idx) => <Form key={idx} state={} onChange={}/>);
};

const TitleSection = styled.section``;
const FormSection = styled.section``;
const FormList = styled.ul``;
const FormItem = styled.li``;
const AddButton = styled.button``;
const SaveSection = styled.section``;

export default Forms;
