import React, { useEffect, useState, useCallback } from "react";
import type { NextPage } from "next";
import Form from "components/Form";
import styled from "styled-components";
import { Main } from "./index";
import "react-quill/dist/quill.snow.css";
import { makeStructure } from "utils/makeStructure";
import { useDispatch } from "react-redux";
import { addFormData } from "redux/slice";
import { findBlank } from "utils/findBlank";
import { useRouter } from "next/router";
import { debounce } from "utils/debounce";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
  DropResult,
  DragStart,
  DraggableProvided,
} from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

resetServerContext();

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
  provided: DraggableProvided;
  onChange: (key: string, newField: State) => void;
  onRemove: (key: string) => void;
}

const Forms: NextPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [formList, setFormList] = useState<State[]>([]);
  const [submitState, setSubmitState] = useState(false);

  const router = useRouter();

  const onChange = useCallback(
    (key: string, newField: State) => {
      const idx = formList.findIndex((form) => form.key === key);

      const tempList = [...formList];
      tempList[idx] = newField;

      setFormList(tempList);
    },
    [formList]
  );

  const addForm = useCallback(() => {
    const newData = [...formList];

    newData.push(makeStructure("text"));

    setFormList(newData);
  }, [formList]);

  const removeForm = useCallback(
    (key: string) => {
      const filteredFormList = formList.filter((form) => form.key !== key);
      setFormList(filteredFormList);
    },
    [formList]
  );

  const saveForm = () => {
    if (!title || !formList.length || findBlank(formList)) {
      return;
    }

    dispatch(
      addFormData({
        id: uuid(),
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

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const currentList = [...formList];
    const draggingItemIndex = result.source.index;
    const dropItemIndex = result.destination.index;

    // ???????????? ????????? ???????????? ??????
    const removeForm = currentList.splice(draggingItemIndex, 1);

    // ????????? ????????? ???????????? ????????? ??????
    currentList.splice(dropItemIndex, 0, removeForm[0]);

    setFormList(currentList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Main>
        <InputForm onSubmit={(e) => e.preventDefault()}>
          <Section>
            <Title>??????*</Title>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </Section>

          <Section>
            <Title>????????????*</Title>
            <Droppable droppableId="fields">
              {(provided) => (
                <FormList {...provided.droppableProps} ref={provided.innerRef}>
                  {formList.map((form, index) => (
                    <Draggable
                      key={form.key}
                      draggableId={form.key}
                      index={index}
                    >
                      {(provided) => (
                        <FormItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <Form
                            state={form}
                            onChange={onChange}
                            onRemove={removeForm}
                            provided={provided}
                          />
                        </FormItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </FormList>
              )}
            </Droppable>
          </Section>

          <AddButton type="button" onClick={addForm}>
            ?????? ????????????
          </AddButton>
          <SaveButtonWrapper>
            <GoBackButton
              type="button"
              onClick={() => {
                router.push("/");
              }}
            >
              ?????? ??????
            </GoBackButton>

            <SaveButton
              type="button"
              onClick={saveForm}
              className={!submitState ? "inactive" : ""}
            >
              ?????? ??????
            </SaveButton>
          </SaveButtonWrapper>
        </InputForm>
      </Main>
    </DragDropContext>
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
const SaveButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.pointColor};
  color: white;
  margin: 20px 0;
  margin: 20px 0;
  font-size: 18px;

  &.inactive {
    background-color: ${({ theme }) => theme.colors.grayTwo};
  }
`;

const GoBackButton = styled(SaveButton)`
  margin-right: 2rem;
`;

export default Forms;
