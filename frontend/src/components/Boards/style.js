import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const LeftBarWrapper = styled.div`
  position: sticky;
  top: 0;
  height: max-content;
`;

export const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 272px;
  height: max-content;
  position: sticky;
  margin-top: 45px;
  padding: 0 16px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ListItem = styled(Link)`
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  padding: 6px 8px 6px 0;
  border-radius: 4px;
  color: ${({ active }) => (active ? '#1e70bf' : 'black')};
  background-color: ${({ active }) => (active ? '#e4f0f6' : 'transparent')};
  &:hover {
    background-color: #e4f0f6;
  }
`;

export const ItemMargin = styled.div`
  margin: 0 5px;
`;

export const TopMenu = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #5e6c84;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 8px 6px 0;
  margin: 0 5px;
  letter-spacing: 0.04em;
  line-height: 16px;
  background: transparent;
  user-select: none;
`;

export const AddButton = styled(Button)`
  padding: 0.46571429em 0.46571429em 0.46571429em !important;
  background-color: transparent !important;
  &:hover {
    background-color: #e0e1e2 !important;
  }
`;
