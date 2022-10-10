import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.main};
`;

function Input() {
    return <StyledInput />;
}

export default Input;
