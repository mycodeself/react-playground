import React from 'react';
import styled from '@emotion/styled';
import { IInputProps } from './Input.models';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &::before {
    top: -4px;
    left: 0;
    border-top: 4px black solid;
    border-bottom: 4px black solid;
  }

  &::after {
    top: 0;
    left: -4px;
    border-left: 4px black solid;
    border-right: 4px black solid;
  }
`;

export const InputStyled = styled.input`
  position: relative;
  border: none;
  outline: none;
  padding: 1rem;
`;

export const Input: React.FC<IInputProps> = props => (
  <Wrapper>
    <InputStyled {...props} />
  </Wrapper>
);
