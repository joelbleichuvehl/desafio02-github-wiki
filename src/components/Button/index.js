import React from "react";
import styled from "styled-components";

const Button = ({ onClick, disabled }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      Buscar
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  height: 62px;
  width: 50%;
  border-radius: 20px;
  border: 1px solid #fafafa;
  background-color: #fafafa;
  margin: 30px 0;
  font-size: 20px;

  &:hover {
    background-color: #cecece;
    cursor: pointer;
  }
`;
