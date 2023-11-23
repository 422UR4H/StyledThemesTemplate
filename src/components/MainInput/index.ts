import styled from "styled-components";

const MainInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 24px;

  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;
export default MainInput;
