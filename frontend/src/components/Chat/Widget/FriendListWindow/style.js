import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DraggableContainer = styled.div`
  position: ${({ drag }) => (drag ? 'absolute' : 'initial')};
  top: 0;
  width: 100%;
  height: ${({ drag }) => (drag ? '100vh' : '0px')};
  z-index: ${({ drag }) => (drag ? '10000' : '1')};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ChatWrapper = styled.div`
  display: block;
  position: ${({ drag }) => (drag ? 'sticky' : 'absolute')};
  left: 80px;
  background-color: white;
  width: 270px;
  height: 370px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  font-size: 12.5px;
  z-index: 1000;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  color: white;
  background-color: #00b5ad;
  cursor: move;
  padding: 0 7px 0 8px;
`;

export const ChatTitle = styled.div`
  width: 100%;
  max-width: 213px;
  height: 30px;
  line-height: 30px;
  padding: 0 3px;
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
`;

export const HeaderIcons = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;

  & > i {
    color: #b6c8dc;
    cursor: pointer;
    height: 100%;
    margin: 0!;
    &:hover {
      color: white;
    }
  }
`;

export const ActiveChatsContainer = styled.div`
  height: 305px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const FriendBlock = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  overflow: hidden;
  white-space: nowrap;

  & > i {
    height: 24px;
    margin: 0 !important;
  }

  &:hover {
    background-color: #ccd5de;
  }
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  width: 100%;
  max-width: 196px;
  line-height: 34px;
  padding-left: 9px;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #42648b;
`;

export const EmptyBlock = styled.div`
  max-width: 235px;
  text-align: center;
  margin: 0 auto;
`;
