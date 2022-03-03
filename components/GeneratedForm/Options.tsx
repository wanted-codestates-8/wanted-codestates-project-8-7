import React from 'react'
import styled from 'styled-components'

const Options = () => {
  return (
      <Wrapper>
          <Text>옵션1</Text>
          <List />
    </Wrapper>
    )
    
}
const Wrapper = styled.div`
    margin-top: 20px;
`

const Text = styled.div`
  font-weight: 800;
`;

const List = styled.div`
  border-style: none;
  border-radius: 10px;
  background-color: #e9e9e9;
  padding: 16px;
  margin-top: 10px;
  width: 400px;
  height: 54px;
`;

export default Options;