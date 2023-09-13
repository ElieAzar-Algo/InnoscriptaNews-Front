import styled from 'styled-components';

export const CardContainer = styled.div`

width: 80%;
margin-top:5%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: 2%;

@media (max-width: 1200px) {
  justify-content: space-around;
}

@media (max-width: 768px) {
  flex-direction: column; 
  align-items: center; 
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
`

export const LayoutContainer = styled.div`


`
