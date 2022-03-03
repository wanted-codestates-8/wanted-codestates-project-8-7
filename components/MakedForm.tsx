import React, { useState } from 'react'
import Name from './GeneratedForm/Name'
import styled from 'styled-components'
import PhoneNum from './GeneratedForm/PhoneNum';
import Address from './GeneratedForm/Address';
import Options from './GeneratedForm/Options';
import Attachments from './GeneratedForm/Attachments';
import Policy from './GeneratedForm/Policy'
import { useSelector } from 'react-redux';

interface Props {

}

const MakedForm = () => {

    const [form, setForm] = useState([]);

    const forms = useSelector((state) => state)
    console.log(forms)

  return (
    <FormWrapper>
        <Header>Title</Header>
        <Name form={ form}/>
        <PhoneNum />
        <Address /> 
        <Options />
        <Attachments />
        <Policy />
        <Submit>제출하기</Submit>
    </FormWrapper>
    )
}
const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem 2.5rem;
    
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Submit = styled.button``

export default MakedForm