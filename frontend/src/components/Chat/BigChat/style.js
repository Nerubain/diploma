import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { Resizable } from 're-resizable';
import { Icon } from 'semantic-ui-react';

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
`;

export const LeftContainer = styled(Resizable)`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
  height: calc(100vh - 45px);
  background: white;

  @media (max-width: 690px) {
    display: ${({ show }) => (show ? 'none' : 'flex')};
    width: 100% !important;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background: white;
  & input {
    background: #f1f1f1 !important;
    &:focus {
      background-color: white !important;
    }
  }
`;

export const FriendListContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  background: white;
  max-height: calc(100vh - 105px);
`;

export const FriendListWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export const FriendBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 62px;
  padding: 7px 10px;
  user-select: none;
  background: ${({ selected }) => (selected ? '#00b5ad' : 'white')};

  &:hover {
    background: ${({ selected }) => (selected ? '00b5ad' : 'rgba(9,30,66,0.08)')};
  }
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 14px;
  & > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

export const UserDataBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const UserDataHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const UserName = styled.div`
  width: 100%;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;

export const LastTime = styled.div`
  max-width: 36px;
  color: ${({ selected }) => (selected ? 'white' : '#bfbfbf')};
`;

export const LastMessage = styled.div`
  width: 100%;
  color: ${({ selected }) => (selected ? 'white' : '#bfbfbf')};
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-width: 379px;

  @media (max-width: 690px) {
    display: ${({ show }) => (show ? 'block' : 'none')};
    min-width: initial;
  }
`;

export const ChatButtons = styled.div`
  display: flex;
`;

export const UserTitleWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background: white;

  border: 1px solid rgba(34, 36, 38, 0.15);
`;

export const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserTitleName = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 800px;
  height: max-content;
  color: black;
`;

export const UserLastSeen = styled.div`
  width: 100%;
  color: #bfbfbf;
  font-size: 12px;
  height: max-content;
  line-height: 16px;
`;

export const MessagesWrapper = styled.div`
  max-height: calc(100% - ${({ height }) => height}px);
  height: calc(100% - ${({ height }) => height}px);
  background: url('https://i.pinimg.com/originals/6f/2d/34/6f2d34fe6c8746c56c14fbc55308ef99.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: auto;
`;

export const Messages = styled.div`
  /* height: 100%; */
  overflow: hidden;
`;

export const MessagesListContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  flex-flow: column-reverse nowrap;
  padding: 5px 10px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  max-width: 428px;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 6px;
  align-self: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  color: ${({ right }) => (right ? 'white' : '#666')};
  ${({ right }) => (right ? 'right' : 'left')}: -4px;
  background: ${({ right }) => (right ? '#00b5ad' : 'rgb(240, 240, 240)')};

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

  @media (max-width: 760px) {
    max-width: 94%;
  }
`;

export const MessageText = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MessageContent = styled.div`
  word-break: break-all;
`;

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

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 11px;
  min-height: 46px;
  background: white;
  border: 1px solid rgba(34, 36, 38, 0.15);
`;

export const Input = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
  min-height: 20px;
  border: 0;
  font-size: 14px;
`;

export const IconWrapper = styled.div`
  height: 100%;
  align-self: flex-end;
`;

export const Reset = styled(Icon)`
  cursor: pointer !important;
  pointer-events: initial !important;
`;
