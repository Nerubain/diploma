import styled from 'styled-components';

export const SubMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 4px 4px 4px;
  background: rgba(0, 0, 0, 0.24);
`;

export const TransparentName = styled.div`
  background: transparent;
  color: white;
  cursor: default;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0;
  margin: 0 4px 4px 0;
  border-radius: 3px;
  text-decoration: none;
  max-width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.32);
    cursor: pointer;
  }
`;

export const TransparentText = styled.span`
  /* display: ${({ show }) => (show ? 'none' : 'block')}; */
  ${({ show }) => show && 'display:none;'}
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  white-space: nowrap;
  padding: 0 12px;

`;

export const Input = styled.input`
 ${({ show }) => !show && 'display:none;'}
  width: ${({ width }) => width}px;
  min-width: 32px;
  white-space: nowrap;
  background-color: #fff;
  border: 0;
  font-weight: 700;
  font-size: 18px;
  font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  height: 32px;
  margin: 0;
  padding: 0 12px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  -webkit-appearance: none;
  border-radius: 3px;
  line-height: 20px;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
`;

export const Button = styled.button`
  padding: 0 12px;
  margin: ${({ top }) => (top ? '4px' : '0 4px 4px 0;')};
  background-color: hsla(0, 0%, 100%, 0.24);
  cursor: pointer;
  height: 32px;
  border: 0;
  border-radius: 3px;
  color: ${({ favourite }) => (favourite ? '#f2d600' : 'white !important')};

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.32);
  }

  &:active {
    background-color: hsla(0, 0%, 100%, 0.4);
  }

  & > i {
    margin: 0 !important;
  }
`;

export const BoardContent = styled.div`
  position: absolute;
  padding-top: 10px;
  user-select: none;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ColumnContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  /* position: absolute; */
  border-radius: 3px;
  height: max-content;
  min-height: 32px;
  padding: 4px 4px 4px 4px;
  margin-right: 5px;
  margin-top: -4px;

  background-color: ${({ select }) => (select ? '#ebecf0' : 'transparent')};
  transition: all 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;
`;

export const ColumnInput = styled.input`
  background: #fff;
  border: none;
  height: 28px;
  box-shadow: inset 0 0 0 2px #0079bf;
  display: block;
  margin: 0;
  transition: margin 85ms ease-in, background 85ms ease-in;
  width: 100%;
  max-width: 224px;
  color: #172b4d;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 3px;
  line-height: 20px;
  margin-bottom: 4px;
  padding: 6px 12px;
`;
