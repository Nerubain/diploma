import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SegmnetWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const ContainerSegment = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  /* overflow: hidden; */
  display: flex;
  flex: 1;
  border-radius: 5px;
`;

export const ContextSegment = styled.div`
  position: absolute;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 280px;
  max-height: calc(100% - 53px);
  top: 47px;
  background-color: #fff;
  box-shadow: 0 12px 24px -6px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
  border-radius: 3px;
  z-index: 1000;
`;

export const ContextContainer = styled.div`
  width: 100%;
  margin: 8px 4px 8px 8px;
  overflow-x: hidden;
  overflow-y: auto;

  & > * {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  &:nth-child(2) {
    padding-top: 8.65px;
  }
`;

export const ListLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #5e6c84;
  margin-bottom: 5px;
`;

export const ListLabelText = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
  line-height: 19px;
  margin-left: 8px;
`;

export const ListWrapper = styled.div`
  padding-bottom: 8.65px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const ItemContainer = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  margin: 0 4px 4px 0;
  min-width: 0;
  -webkit-user-drag: none;
  user-select: none;
`;

export const SmallImage = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  border-radius: 3px 0 0 3px;
  opacity: 0.6;
`;

export const IconWrapper = styled.div`
  width: 0px;
  transition-duration: 100ms;
  transition-property: width;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${({ favourite }) => (favourite ? '26px' : '0')};
  max-width: ${({ favourite }) => (favourite ? '26px' : '52px')};
  z-index: 10;
  color: ${({ favourite }) => (favourite ? '#f2d600' : 'black')};
  transition-duration: 100ms;
  transition-property: width;
`;

export const ItemBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 36px;
  opacity: 1;
  border-radius: 3px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: 50%;

  &::before {
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.88;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const ItemLink = styled(Link)`
  width: 100%;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
  color: black;
  &:hover {
    color: black;
  }
  &:hover > ${SmallImage} {
    opacity: 0.9;
  }
  &:hover > ${IconContainer}, ${IconWrapper} {
    width: 26px;
  }
  &:hover > ${ItemBackground} {
    opacity: 0.68;
  }
`;

export const BoardTitle = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  width: 100%;
  padding: 9px 0 9px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
`;

export const Title = styled.div`
  font-size: 14px;
  padding-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconButton = styled.div`
  margin: 8px 8px 8px 0;
  font-size: 12px;
  &:hover > i {
    transform: scale(1.2);
    transition-duration: 85ms;
    transition-property: transform;
  }
`;
export const IconSpan = styled.span`
  height: 20px;
  line-height: 20px;
  width: 20px;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const AddBoardButton = styled.button`
  width: 100%;
  text-align: left;
  border: 0;
  border-radius: 3px;
  margin: 2px 4px 2px 2px;
  padding: 6px 10px;
  text-decoration: underline;
  line-height: 20px;
  font-weight: 400;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

export const EmptyListContainer = styled.div`
  color: #7a869a;
  margin: 10px 30px 10px 31px;
  position: relative;
`;
