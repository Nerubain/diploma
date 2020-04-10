import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`;

export const BoardListLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin: 4px 0 0;
  padding-bottom: 8px;
  font-size: 16px;
  font-weight: 700;

  & > i {
    margin-top: 5px !important;
  }
`;
export const BoardLabelTitle = styled.div`
  flex: 1;
  margin-left: 5px;
  margin-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 28px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 900px) {
    max-width: 576px;
  }
`;

export const Fade = styled.span`
  background-color: rgba(0, 0, 0, 0.15);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  max-width: 23.5%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-color: #97a0af;
  background-size: cover;
  background-position: 50%;
  margin: 0 2% 2% 0;
  padding: 8px;
  cursor: pointer !important;
  &:hover > ${Fade} {
    background-color: rgba(0, 0, 0, 0.25);
  }

  &:hover i {
    right: 0px;
    opacity: 1;
  }
  &:nth-child(4n + 4) {
    margin: 0 0 2% 0;
  }
  @media (max-width: 900px) {
    max-width: 32%;
    &:nth-child(4n + 4) {
      margin: 0 2% 2% 0;
    }
    &:nth-child(3n + 3) {
      margin: 0 0 2% 0;
    }
  }
  @media (max-width: 730px) {
    max-width: calc(49% - 4px);
    &:nth-child(4n + 4),
    &:nth-child(3n + 3) {
      margin: 0 2% 2% 0;
    }
    &:nth-child(2n + 2) {
      margin: 0 0 2% 0;
    }
  }
`;

export const PreviewBlock = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PreviewTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  user-select: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: white;
  overflow: hidden;
  & > i {
    position: relative;
    height: initial !important;
    right: ${({ favourite }) => (favourite ? '0px' : '-25px')};
    opacity: ${({ favourite }) => (favourite ? '1' : '0')};
    color: ${({ favourite }) => (favourite ? '#f2d600' : 'white')};
    transition: all 0.15s ease;
  }
`;

export const AddButton = styled.div`
  width: 100%;
  height: 94px;
  max-width: 23.5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #172b4d;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;

  background-color: rgba(9, 30, 66, 0.04);
  margin: 0 0 2% 0;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }
  &:active {
    background-color: #e4f0f6;
    color: #0079bf;
  }
  @media (max-width: 900px) {
    max-width: 32%;
    margin: 0 0 2% 0;
  }
  @media (max-width: 730px) {
    max-width: calc(49% - 4px);
  }
`;

export const LabelLinks = styled.div`
  display: flex;
  @media (max-width: 730px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const LabelLink = styled(Link)`
  border-radius: 3px;
  text-decoration: none;
  position: relative;
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  padding: 4px 12px 4px 6px;
  background-color: rgba(9, 30, 66, 0.04);
  color: #091e42;

  & > i {
    margin-right: 8px;
  }

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #091e42;
    box-shadow: none;
    border: none;
    outline: 0;
  }
  &:focus {
    background-color: #e4f0f6;
    box-shadow: none;
    border: none;
    color: #0079bf;
  }

  @media (max-width: 730px) {
    margin: 0 8px 8px 0;
    width: calc(50% - 8px);
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      width: 100%;
      text-align: center;
      margin-left: 0;
    }
  }
`;
