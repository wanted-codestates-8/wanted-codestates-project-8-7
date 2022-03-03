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
      <TitleSection></TitleSection>

      <FormSection>
        <FormList>
          {formList.map((form) => (
            <FormItem key={form.key}>
              <Form state={form} onChange={onChange} onRemove={removeForm} />
            </FormItem>
          ))}
        </FormList>
      </FormSection>

      <AddButton onClick={addForm}>+ 추가</AddButton>

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
