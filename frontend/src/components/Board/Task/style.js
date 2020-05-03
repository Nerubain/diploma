import styled from 'styled-components';

export const TaskWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
`;

export const TaskContainer = styled.div`
  overflow: hidden;
  padding: 6px 8px 2px;
  position: relative;
  z-index: 10;
`;

export const TaskTitle = styled.div`
  display: block;
  margin: 0 0 4px;
  overflow: hidden;
  text-decoration: none;
  word-wrap: break-word;
  color: #172b4d;
`;
