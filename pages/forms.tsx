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

  onChange: (value: string | boolean | string[]) => void;
}

const Forms: NextPage = () => {
  const [data, setData] = useState({
    title: "",
    fieldList: [] as State[],
  });

  function addField() {
    const newData = {
      ...data,
    };
    newData.fieldList.push({
      key: uuid(),
      id: "name",
      type: "text",
      required: false,
      label: "",
      placeholder: "",
    });

    setData(newData);
  }

  return (
    <Main>
      {/* <Form state={{}} onChange={() => {}} /> */}
      <TitleSection></TitleSection>

      <FieldSection>
        <FieldList>
          {/* map으로 돌아갈것임 */}
          <FieldItem>{/* <Form/> */}</FieldItem>
        </FieldList>
      </FieldSection>

      <AddButton />

      <SaveSection />
    </Main>
  );

  //   return data.fieldList.map((data,idx) => <Form key={idx} state={} onChange={}/>);
};

const TitleSection = styled.section``;
const FieldSection = styled.section``;
const FieldList = styled.ul``;
const FieldItem = styled.li``;
const AddButton = styled.button``;
const SaveSection = styled.section``;

export default Forms;
