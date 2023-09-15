// src/components/PreferenceSelector.js
import React, { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreferenceGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    position: relative;
    text-align: center;
    flex-direction: row;
    margin-top:1%

`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

`
export const TitleText =styled.h2`
margin-top:5%;
align-items: center;

`
export const SelectLabel = styled.label`
  font-size:larger;
`
export const Dropdown = styled.select`
  position: relative;
  width: 100%;
  padding:5px;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
`