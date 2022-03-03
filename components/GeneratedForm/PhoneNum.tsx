import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface PhoneNumProps {
    label: string,
}

const PhoneNum = ({label}: PhoneNumProps) => {
    const [inputState, setInputState] = useState(false);
    const [number, setNumber] = useState('');
    const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        checkNum();
        if (e.target.value.length === 3 || e.target.value.length === 8) {
            setNumber(e.target.value + '-')
        } else {
            setNumber(e.target.value)
        }
    }
    
    useEffect(() => {
        setNumber(number)
    },[number])
    console.log(number)
    
    function checkNum() {
        const numRegex = (/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{3}$/)
        if (number.match(numRegex)) {
            setInputState(true)
        } else {
            setInputState(false)
        }
    }



    return (
        <Wrapper>
            <Text>휴대폰 번호{label}</Text>
            <Input
                type="text"
                onChange={onChangeNumber}
                value={number}
                onKeyDown={(e) => e.keyCode === 8 ? setNumber(number.replace(/-$/,'')) : null}
                // onKeyDown={(e) => e.keyCode === 8 ? setNumber(number.slice(0,number.length)) : null}
            />
            {
                number.length > 0 && !inputState ?
          <Warning>
            휴대폰 번호가 옳바르지 않습니다.
          </Warning>
          : null
      }
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