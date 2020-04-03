import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 15px;
`;

export const BoardListLabel = styled.div`
  display: flex;
  width: 100%;
  line-height: 24px;
  margin: 4px 0 0;
  padding-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const BoardLabelTitle = styled.div`
  margin-left: 5px;
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
    right: -25px;
    opacity: 0;
    transition: all 0.15s ease;
  }
`;
