import React from "react";
import styled from "styled-components";

const Input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  height: 62px;
  width: 50%;

  input {
    border: 1px solid #fafafa;
    border-radius: 20px;
    background: transparent;
    width: 95%;
    height: 100%;
    padding: 0 20px;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
`;
