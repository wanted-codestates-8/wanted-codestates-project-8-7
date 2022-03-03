import React from "react";
import styled from "styled-components";

const Attachments = () => {
  return (
    <Wrapper>
      <Text>첨부파일 (선택)</Text>
      <AttachBox>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path d="M16,4C15.448,4 15,4.448 15,5L15,15L5,15C4.448,15 4,15.448 4,16C4,16.552 4.448,17 5,17L15,17L15,27C15,27.552 15.448,28 16,28C16.552,28 17,27.552 17,27L17,17L27,17C27.552,17 28,16.552 28,16C28,15.448 27.552,15 27,15L17,15L17,5C17,4.448 16.552,4 16,4Z"></path>
        </svg>
        <AttachText>눌러서 파일 등록</AttachText>
      </AttachBox>
      <Description>첨부 파일은 위와 같이 입력할 수 있습니다.</Description>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 20px;
`;

const Text = styled.div`
  font-weight: 800;
`;

const AttachBox = styled.div`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  width: 360px;
  height: 250px;
  cursor: pointer;
  margin: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AttachText = styled.div``;

const Description = styled.div``;

export default Attachments;
