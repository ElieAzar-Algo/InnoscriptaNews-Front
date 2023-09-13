import React from 'react'
import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  background-color: #14141f;
  color:#dbe5f7;
  opacity:0.7;
  position:sticky;
  top: 0;
  z-index: 100;
  `
  
  export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  
`

export const BrandLink = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: white;
`

export const NavForm = styled.form`
  display: flex;
  align-items: center;
  min-width: 300px;

  @media only screen and (max-width: 768px) {
    min-width: auto;
  }
`

export const FormLabel = styled.label`
  display: none;
`

export const FormInput = styled.input`
  min-width: 300px;
  border: none;
  padding: 5px 10px;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    min-width: auto;
    max-width: 100%;
  }
`

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  color:#dbe5f7;
`

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  margin-left: 20px;
  font-size: 18px;
  color:#dbe5f7;
  a {
    text-decoration: none;
    color: inherit; 
    cursor: pointer; 
  }
  &:first-child {
    margin-left: 0;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;
    font-size: 16px;
  }
`
