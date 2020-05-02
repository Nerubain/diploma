import styled from 'styled-components';
import { Input, Dropdown, Button, MenuItem, Menu } from 'semantic-ui-react';

export const Navigator = styled(Menu)`
  ${({ isborder }) => isborder && 'background-color:rgba(0,0,0,.09) !important'};
`;

export const StyledItem = styled(MenuItem)`
  @media (max-width: 550px) {
    display: ${(props) => (props.type ? 'none!important' : '')};
  }
`;
export const MobileItem = styled(MenuItem)`
  display: none !important;
  @media (max-width: 550px) {
    display: block !important;
  }
`;

export const SearchInput = styled(Input)`
  & > input {
    width: 200px;
    transition: width 0.3s ease, box-shadow 0.1s ease, border-color 0.1s ease !important;
  }
  & > input:focus {
    width: 280px !important;
  }
  transition-delay: none;
  transition: width 0.15s !important;
  @media (max-width: 550px) {
    display: none !important;
  }
`;

export const WideDropDown = styled(Dropdown)`
  @media (max-width: 550px) {
    display: none !important;
  }
`;

export const MobileButton = styled(Button)`
  display: none !important;
  @media (max-width: 550px) {
    display: block !important;
  }
`;
