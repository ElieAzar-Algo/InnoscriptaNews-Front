import styled from 'styled-components';

// Styled components
export const SidebarWrapper = styled.div`
  position: fixed;
  top: 8%;
  right: 0;
  height: 100%;
  width: 15%;
  background-color: #14141f;
  opacity: 0.7;
  color: #dbe5f7;
  padding: 20px;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media only screen and (min-width: 1800px) {
    top: 5%;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    height: auto;
    top: auto;
    bottom: 0;
  }
`

export const SidebarTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`

export const DateFilter = styled.div`
  margin-bottom: 20px;
`

export const DateLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`

export const DateInput = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`

export const AuthorsDropdown = styled.div`
  margin-bottom: 20px;
`

export const AuthorsLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`

export const AuthorsSelect = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`
