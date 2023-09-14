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
  margin-top: 10px;
`;

export const Dropdown = styled.select`
  margin-right: 10px;
`;

export const AddButton = styled.button`
  margin-top: 10px;
`;


export const SubmitButton = styled.button`
  margin-top: 10px;
`;
