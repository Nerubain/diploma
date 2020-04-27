import styled from 'styled-components';

export const MessagesContainer = styled.div`
  display: flex;
  width: 270px;
  max-height: 305px;
  overflow: auto;
  z-index: -1;
`;

export const Messages = styled.div`
  display: flex;
  height: 100%;
  min-height: 299px;
  flex-flow: column-reverse nowrap;
  margin: 6px 16px;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  max-width: 80%;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 6px;
  align-self: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  color: ${({ right }) => (right ? 'white' : '#666')};
  ${({ right }) => (right ? 'right' : 'left')}: -4px;
  background: ${({ right }) => (right ? '#00b5ad' : 'rgba(0, 0, 0, 0.06)')};

  &::after {
    display: ${({ last }) => (last ? 'block' : 'none')};
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    bottom: 0;
    ${({ right }) => (right ? 'right' : 'left')}: -10px;
    ${({ right }) => (right ? 'border-right' : 'border-left')}: 15px solid transparent;
    border-bottom: 15px solid ${({ right }) => (right ? '#00b5ad' : 'rgb(240, 240, 240)')};
  }
`;

export const MessageText = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const MessageContent = styled.div``;

export const MessageTime = styled.div`
  float: right;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 14px;
  text-align: right;
  font-size: 12px;
  color: ${({ right }) => (right ? 'white' : '#a0acb6')};
  user-select: none;
`;
