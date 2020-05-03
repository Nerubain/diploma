import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const ColumnWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  height: 100%;
`;

export const ColumnContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 10px);
  position: relative;
  white-space: normal;
  margin-right: 10px;

  &:first-child {
    margin-left: 4px;
  }
`;

export const ColumnHeader = styled.div`
  padding: 10px 8px 4px 8px;
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
  max-height: 100%;
  min-height: 5px;
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
  cursor:pointer!important;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ColumnBottom = styled.div`
  margin: 2px 8px 8px 8px;
`;

export const AddTaskButton = styled.button`
  width: 100%;
  border-radius: 3px;
  color: #5e6c84;
  display: block;
  flex: 1 0 auto;
  /* margin: 2px 0 8px 8px; */
  padding: 4px 8px;
  position: relative;
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  background: transparent;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }

  &:active {
    background-color: rgba(9, 30, 66, 0.13);
  }
`;

export const NewTaskWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  display: block;
  padding: 6px 8px 2px;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
`;

export const NewTaskInput = styled(TextareaAutosize)`
  width: 100%;
  min-height: 54px;
  resize: none;
  border: 0;
  margin-bottom: 4px;
`;
