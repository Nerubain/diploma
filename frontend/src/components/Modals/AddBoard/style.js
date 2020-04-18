import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const StyledModal = styled.div`
  left: 30% !important;
  width: 296px !important;
  & > i {
    padding-top: 0 !important;
    width: max-content !important;
    height: max-content !important;
  }
`;
export const ModalContent = styled.div`
  padding: 10px 10px 10px 16px !important;
  background-color: ${({ color }) => color || 'transparent'} !important;
  background-image: url(${({ img }) => img || ''}) !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;

  &::before {
    display: ${({ image }) => (image ? 'block' : 'none')};
    content: '';
    position: absolute;
    bottom: 0 !important;
    top: 0 !important;
    right: 0 !important;
    left: 0 !important;
    border-radius: 3px !important;
    background: rgba(0, 0, 0, 0.15) !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    z-index: 0;
  }
  & > div {
    padding: 0 !important;
  }
`;

export const ModalInput = styled.input`
  position: relative;
  width: calc(100% - 65px);
  border: none;
  padding: 2px 8px 2px 8px;
  margin-left: -8px;
  margin-bottom: 5px;
  line-height: 24px;
  font-size: 16px;
  color: white;
  background: transparent !important;
  border-radius: 3px;
  &::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }
  &:hover,
  &:focus {
    background: hsla(0, 0%, 100%, 0.15) !important;
  }
`;
export const StyledDropDown = styled.div`
  background: transparent !important;
  padding: 2px 8px 2px 8px !important;
  margin-left: -8px !important;
  &:hover,
  &:focus {
    background: hsla(0, 0%, 100%, 0.15) !important;
  }
`;
export const ModalForm = styled.form``;

export const BackGrounds = styled.div`
  position: absolute;
  top: 0;
  right: -92px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 83px;
  /* height: 76px; */
`;

export const BackgroundButton = styled.button`
  width: 21px;
  height: 21px;
  position: relative;
  min-height: 0;
  background-size: cover;
  background-position: 50%;
  background-color: ${({ color }) => color || 'transparent'};
  background-image: url(${({ image }) => image || ''});
  border-radius: 3px;
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 6px;
  & > span {
    display: block;
    height: 21px;
  }
  & > i {
    margin-right: 0 !important;
    color: white;
    z-index: 10 !important;
  }
  &::before {
    display: ${({ image }) => (image ? 'block' : 'none')};
    content: '';
    position: absolute;
    bottom: 0 !important;
    top: 0 !important;
    right: 0 !important;
    left: 0 !important;
    border-radius: 3px !important;
    background: rgba(0, 0, 0, 0.15) !important;
    background-color: rgba(0, 0, 0, 0.4) !important;
    z-index: 0;
  }
`;

export const PickerMenuContainer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: ${({ shift }) => shift}px;
  width: 304px;
  background: white;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
  color: #172b4d;
  z-index: 100;
`;

export const PickerMenuHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  padding: 0 12px;
`;

export const PickerMenuTitle = styled.div`
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  line-height: 40px;
  height: 40px;
  text-align: center;
`;

export const ControllIcon = styled(Icon)`
  position: absolute !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  cursor: pointer !important;
  ${({ right }) => right && 'right:7px'}
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0 12px 12px 12px;
  height: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
`;

export const MenuSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuTitle = styled.div`
  flex-grow: 1;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  font-weight: 600;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  text-decoration: underline;
  color: #5e6c84;
  margin: 2px 0;
  padding: 6px 12px;
  user-select: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: none;
  border: none;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }

  &:active {
    background-color: #e4f0f6;
    color: #0079bf;
  }
`;

export const MenuItemList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const MenuItem = styled.div`
  height: 56px;
  width: calc(33.3% - 8px);
  margin-bottom: 8px;
  margin-right: 8px;
  padding-top: 0 !important;

  &:nth-child(3n + 3) {
    margin-right: 0;
  }
`;
export const MenuItemContent = styled.button`
  background-color: ${({ color }) => color};
  background-image: url(${({ image }) => image});
  background-position: 50%;
  background-size: cover;
  border-radius: 3px;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 0;
  min-height: 0;
  padding: 0;
  position: relative;
  line-height: 0;
  border: 0;
  &:hover {
    &:before {
      display: block;
      background: rgba(0, 0, 0, 0.15);
      ${({ selected }) => selected && 'background-color: rgba(0, 0, 0, 0.6);'};
    }
  }
  & > i {
    height: 0 !important;
    z-index: 100;
  }
  &:before {
    content: '';
    display: ${({ selected }) => (selected ? 'block' : ' none')};
    background: rgba(0, 0, 0, 0.15);
    ${({ selected }) => selected && 'background-color: rgba(0, 0, 0, 0.6);'};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    border-radius: 3px;
  }
`;
