import React from 'react';
import styled from 'styled-components';
import { useStoreon } from 'storeon/react';

import Layout from '../components/Layout';
import LeftBarMenu from '../components/Boards/LeftBarMenu';
import BoardsPreviewList from '../components/Boards/Prview/BoardsPreviewList';
import DndPreviewList from '../components/Boards/DragDropPreview/DndPreviewList';

export default function Boards() {
  const { boards } = useStoreon('boards');
  return (
    <Layout>
      <Container>
        <LeftBarMenu />
        <RightContainer>
          {boards.categoriesOrder.map((categoryId) => {
            const category = boards.categories.find((ctg) => ctg.id === categoryId);
            const list = category.boardIds.map((boardId) =>
              boards.list.find((board) => board.id === boardId)
            );
            if (category.favourite) {
              return list.length ? (
                <DndPreviewList key={category.id} category={category} list={list} />
              ) : null;
            }
            return <BoardsPreviewList key={category.id} category={category} list={list} />;
          })}
        </RightContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
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
