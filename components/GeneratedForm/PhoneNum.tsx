import React from 'react'
import styled from 'styled-components'

const PhoneNum = () => {
  return (
      <Wrapper>
          <Text>휴대폰 번호</Text>
          <Input />
          <Warning>
              휴대폰 번호가 올바르지 않습니다.
          </Warning>
    </Wrapper>
    )
    
}
const Wrapper = styled.div`
    margin-top: 20px;
`

const Text = styled.div`
  font-weight: 800;
`;

const Input = styled.input`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  padding: 16px;
  margin-top: 10px;
  width: 400px;
  height: 54px;
`;

const Warning = styled.div`
  /* display: ${props => props ? 'block' : 'none'} */
  color: red;
  font-weight: lighter;
  font-size: 12px;
`;

export default PhoneNum;