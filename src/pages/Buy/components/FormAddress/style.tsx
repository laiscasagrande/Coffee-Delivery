import styled from "styled-components";

export const Form = styled.fieldset`
display: flex;
flex-direction: column;
gap: 1rem;
border: 0 none
`

export const Division = styled.div`
display: flex;
gap: 0.75rem;
`

export const Input = styled.input`
height: 2.7rem;
width: 12.5rem;
border-radius: 4px;
padding: 0.75rem;
border: 0 none;
outline: 0;
backgroud: ${(props) => props.theme['gray-400']} 
`

export const TextArea = styled.textarea`
height: 2.62rem;
width: 35rem;
border-radius: 4px;
padding: 0.75rem;
border: 0 none;
outline: 0;
`

export const TextAreaComplement = styled.textarea`
border: 0 none;
border-radius: 4px;
padding: 0.75rem;
outline: 0;
height: 2.62rem;
width: 21.75rem;
`

export const TextAreaCity = styled.textarea`
height: 2.62rem;
width: 17.25rem;
border: 0 none;
outline: 0;
border-radius: 4px
`
export const Select = styled.select`
height: 2.62rem;
width: 3.75rem;
border: none;
outline: none
`
export const Option = styled.option`

`

