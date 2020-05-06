import styled from 'styled-components';

export const FormWrapper = styled.div`
  min-height: 200px;
  max-width: 300px;
  padding-top: 200px;
  margin: 0 auto;
`;

export const ErrorWrapper = styled.div`
  margin-top: -10px;
  margin-bottom: 15px;
  font-size: 9px;
  color: red;
`;

export const LinkButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  width: max-content;
  color: #1e70bf;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  margin-top: 10px;
`;

export const HiddenInput = styled.input`
  position: absolute;
  z-index: -1;
  width: 1px !important;
  height: 1px !important;
`;

export const InputLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
