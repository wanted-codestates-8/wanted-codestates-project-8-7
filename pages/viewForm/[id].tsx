import React, { useEffect, useRef, useState } from "react";
import Name from "components/GeneratedForm/Name";
import styled from "styled-components";
import PhoneNum from "components/GeneratedForm/PhoneNum";
import Address from "components/GeneratedForm/Address";
import Attachments from "components/GeneratedForm/Attachments";
import Policy from "components/GeneratedForm/Policy";
import { useRouter } from "next/router";
import DropDown from "components/GeneratedForm/DropDown";
import { useSelector } from "react-redux";
import { State } from "pages/forms";

const testForm = {
  title: "폼 예시",
  data: {
    key: "1",
    id: "name",
    type: "text",
    required: true,
    label: "이름",
    placeholder: "주민등록상 이름 입력",
  },
};

const options = ["XXL", "XL", "L", "s"];

const GeneratedForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isSubmitName, setIsSubmitName] = useState(false);
  const [imgData, setImgData] = useState();

  const [canSubmit, setCanSubmit] = useState(false); // 제출 버튼 활성화/비활성화 상태

  const data = useSelector((state) => state);
  // console.log(testForm);

  // const selectedType = (data: any) => {
  //   data.map((type :any) => (

  //   ))
  // }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // setForm([...form, name])
  };

  const [inputState, setInputState] = useState(false);
  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkNum();
    if (e.target.value.length === 3 || e.target.value.length === 8) {
      setNumber(e.target.value + "-");
    } else {
      setNumber(e.target.value);
    }
  };

  useEffect(() => {
    setNumber(number);
  }, [number]);

  function checkNum() {
    const numRegex = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{3}$/;
    if (number.match(numRegex)) {
      setInputState(true);
    } else {
      setInputState(false);
    }
  }

  const onSubmit = () => {
    console.log(name, number);
  };

  return (
    <FormWrapper>
      <Header> Title</Header>
      <Name
        label={testForm.data.label}
        placeholder={testForm.data.placeholder ? testForm.data.placeholder : ""}
        onChangeName={onChangeName}
        name={name}
      />
      <PhoneNum
        label={testForm.data.label}
        onChangeNumber={onChangeNumber}
        number={number}
        setNumber={setNumber}
        inputState={inputState}
      />
      <Address />
      <DropDown options={options} />
      <Attachments setImgData={setImgData} />
      <Policy />
      <SubmitWrap>
        <Submit onClick={onSubmit}> 제출하기</Submit>
      </SubmitWrap>
    </FormWrapper>
  );
};
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  /* padding: 1rem 1.5rem 2.5rem; */
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 16px;
`;

const SubmitWrap = styled.div`
  margin-top: auto;
  position: sticky;
  bottom: 0;
  padding: 10px;
  box-shadow: 0 -2px 20px 0 rgba(14, 67, 97, 0.06),
    0 1px 0 0 rgba(14, 67, 97, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  background: #e9e9e9;
`;

const Submit = styled.button`
  background-color: salmon;
  width: 400px;
  margin-top: auto;
  height: 52px;
  color: white;
  border-radius: 10px;
`;

export default GeneratedForm;
