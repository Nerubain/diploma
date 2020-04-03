import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import LeftBarMenu from '../components/Boards/LeftBarMenu';
import BoardsPreviewList from '../components/Boards/Prview/BoardsPreviewList';

const img =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x294/64da2a2ec6a7dd4080b7c800b2593b87/photo-1577800929753-bb4723761a0d.jpg';

const list = [
  {
    id: 1,
    title: 'Доска #1',
    link: '/board/ID/BOARDNAME',
    img,
  },
  {
    id: 2,
    title: 'Доска #2',
    link: '/board/ID/BOARDNAME',
    img,
  },
  {
    id: 3,
    title: 'Доска #2',
    link: '/board/ID/BOARDNAME',
    img,
  },
  {
    id: 4,
    title: 'Доска #2',
    link: '/board/ID/BOARDNAME',
    img,
  },
  {
    id: 5,
    title: 'Доска #2',
    link: '/board/ID/BOARDNAME',
    img,
  },
];

export default function Boards() {
  return (
    <Layout>
      <Container>
        <LeftBarMenu />
        <RightContainer>
          <BoardsPreviewList label="Отмеченные" type="star" list={list} />
          <BoardsPreviewList label="Недавно просмотренные" type="clock outline" list={list} />
          <BoardsPreviewList label="Персональные" type="user" list={list} />
        </RightContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 16px 0;
  max-width: 825px;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
