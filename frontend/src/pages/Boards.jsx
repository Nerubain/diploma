import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import LeftBarMenu from '../components/Boards/LeftBarMenu';
import BoardsPreviewList from '../components/Boards/Prview/BoardsPreviewList';

const img =
  'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/640x960/339535d43a2ebf70cf7a4d16fe476b5d/photo-1582450080665-d9cacb253531.jpg';

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
  margin: 75px auto 0 auto;
  padding: 0 25px;
  width: 100%;
  max-width: 1125px;
  @media (max-width: 780px) {
    padding: 0 15px;
  }
  @media (max-width: 550px) {
    padding: 0 8px;
    margin-top: 50px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 825px;
`;
