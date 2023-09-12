import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;
`

export const FormContentWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 60px 120px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  &:hover {
    opacity: 0.7;
    transition: 0.1s ease-in-out;
  }
`
