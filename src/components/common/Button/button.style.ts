
import styled from 'styled-components'

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