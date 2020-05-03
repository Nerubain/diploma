import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WidgetWrapper = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* height: 100vh; */
  width: 100%;
  /* z-index: 999; */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const WidgetContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  background-color: rgba(9, 30, 66, 0.08);
  height: max-content;
  max-height: 338px;
  overflow: hidden;
  z-index: 100;
  border-radius: 3px;
  user-select: none;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ShowChatsButton = styled.div`
  display: block;
  width: 40px;
  padding: 6px;
  cursor: pointer;
  box-sizing: initial;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  padding: 6px 0;
  cursor: pointer;
  justify-content: center;
  & > i {
    font-size: 10px;
    margin-left: 5px;
    margin-top: 1px;
  }
`;

export const ActiveChatsListContainer = styled.div`
  width: 100%;
  height: max-content;
  max-height: 260px;
  overflow: hidden;
`;

export const FriendContainer = styled(Link)`
  position: relative;
  display: block;
  width: 40px;
  padding: 6px;
  box-sizing: initial;
  cursor: pointer;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

export const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  cursor: pointer;
`;

export const FriendName = styled.div``;

export const FriendsCount = styled.div``;
export const OnlineStatus = styled.div`
  position: absolute;
  right: 7px;
  bottom: 5px;
  background-color: #60d960;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
