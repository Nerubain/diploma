import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const ColumnWrapper = styled.div`
  display: inline-block;
`;

export const ColumnContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
  margin-right: 10px;
`;

export const ColumnHeader = styled.div`
  padding: 10px 8px 0px 8px;
  & > input {
    margin: 0;
    width: 100%;
    max-width: initial;
  }
`;

export const TasksList = styled.div`
  flex: 1 1 auto;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
  overflow: auto;
  max-height: calc(100vh - 160px);
  min-height: 20px;
`;

export const ColumnTextArea = styled(TextareaAutosize)`
  resize: none;
  width: 100%;
  height: 28px;
  padding: 4px 8px;
  color: #172b4d;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 3px;
  line-height: 20px;
  font-weight: 600;
  border: 0;
  background: transparent;

  &:focus {
    background: white;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;

export const DragHook = styled.div`
  ${({ show }) => show && 'display:none;'}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
