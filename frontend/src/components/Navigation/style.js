import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const SearchInput = styled(Input)`
  & > input {
    width: 180px;
    transition: width 0.3s ease, box-shadow 0.1s ease, border-color 0.1s ease !important;
  }
  & > input:focus {
    width: 280px !important;
  }
  transition-delay: none;
  transition: width 0.15s !important;
`;
