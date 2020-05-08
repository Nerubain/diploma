import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSegment = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  /* overflow: hidden; */
  display: flex;
  flex: 1;
  border-radius: 5px;
`;

export const SegmentMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SegmentMenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const MobileSegmentListWrapper = styled.div`
  padding-right: 5px;
  @media (max-width: 600px) {
    padding: 8px 9px 0px 8px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 128px);
  }
`;

export const SegmentListItem = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #172b4d;
  font-weight: 400;
  text-align: left;
  vertical-align: middle;
  padding: 6px 12px;
  border: 0;
  background-color: white;
  &:hover {
    background-color: rgba(9, 30, 66, 0.04);
    color: #172b4d;
  }
  &:active {
    background-color: #e4f0f6;
  }

  &:nth-child(4) {
    border-top: 1px solid rgba(9, 30, 66, 0.13);
    margin-top: 5px;
  }
`;
export const SegmentItemHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const SegmentItemIcon = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export const SegmentItemTitle = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export const SegmentItemDescription = styled.div`
  width: 100%;
  color: #5e6c84;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 4px 0 0;
  padding: 0;
`;

export const SegmentHeader = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  padding: 0 12px;
  position: relative;
  text-align: center;
`;

export const SegmentTitle = styled.div`
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  line-height: 40px;
  height: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0;
  background-color: transparent;
  line-height: 40px;
  border: 0;
  cursor: pointer;
  &:hover {
    color: #172b4d !important;
  }
`;

export const ContextSegment = styled.div`
  position: absolute;
  display: flex;
  width: 280px;
  max-height: calc(100% - 53px);
  top: 47px;
  background-color: #fff;
  box-shadow: 0 12px 24px -6px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
  border-radius: 3px;
  z-index: 9999;

  @media (max-width: 600px) {
    max-height: calc(100% - 0px);
    width: 100%;
    top: 0;
  }
`;

export const ContextContainer = styled.div`
  width: 100%;
  margin: 8px 4px 8px 8px;

  overflow-x: hidden;
  overflow-y: auto;
  & > * {
    width: 100%;
  }
  & > .input {
    padding-right: 5px !important;
    padding-left: 5px !important;
  }
  @media (max-width: 600px) {
    overflow: hidden;
    margin: 0;
  }
`;

export const ListContainer = styled.div`
  &:nth-child(1) {
    padding-top: 8.65px;
  }
  @media (max-width: 600px) {
    &:nth-child(2) {
      padding-top: 0;
    }
    &:nth-child(1) {
      padding-top: 8.65px;
    }
  }
`;

export const ListLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #5e6c84;
  margin-bottom: 5px;
  padding-left: 10px;
  & > button {
    margin-right: 0 !important;
  }
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

export const ListLabelLink = styled(Link)`
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  color: #5e6c84;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
  line-height: 19px;
  margin-left: 8px;
  text-decoration: underline;
`;

export const ListWrapper = styled.div`
  padding-bottom: 8.65px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const SmallImage = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${({ image }) => image});
  color: ${({ color }) => color};
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
  background-color: ${({ color }) => color};
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
  max-width: 268px;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
  color: black;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  margin: 0 4px 4px 0;
  min-width: 0;
  -webkit-user-drag: none;
  user-select: none;
  cursor: pointer !important;

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
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const BoardTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  width: 100%;
  padding: 9px 0 9px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  z-index: 1000;
`;

export const Title = styled.div`
  font-size: 14px;
  padding-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 190px;
`;

export const TeamTitle = styled.div`
  font-size: 12px;
  padding-right: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
  line-height: 12px;
  max-width: 190px;
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
  flex-direction: column;
`;

export const EmptyListContainer = styled.div`
  color: #7a869a;
  margin: 10px 30px 10px 31px;
  position: relative;
  cursor: text;
  user-select: none;
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
