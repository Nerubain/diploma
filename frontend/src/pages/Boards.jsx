import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreon } from 'storeon/react';
import { useRouteMatch } from 'react-router-dom';

import Layout from '../components/Layout';
import LeftBarMenu from '../components/Boards/LeftBarMenu';
import BoardsPreviewList from '../components/Boards/BoardsPreviewList';
import BoardsListWrapper from '../components/Dnd/BoardsListWrapper';

export default function Boards() {
  const { boards } = useStoreon('boards');
  const [selectedTeam, setTeam] = useState({});
  const [show, setShow] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    const urlParams = Object.keys(match.params);
    if (urlParams[0] === 'team') {
      const newState = {
        ...boards,
        categories: boards.categories.filter((ctg) => ctg.id === match.params.team),
      };
      setTeam(newState);
      setShow(false);
    } else {
      setTeam(boards);
      setShow(true);
    }
  }, [match, boards]);

  return (
    <Layout>
      <Container>
        <LeftBarMenu />
        <RightContainer>
          {selectedTeam.categories &&
            selectedTeam.categories.map((category) => {
              const boardsList = category.boardsIds.map((id) =>
                selectedTeam.boards.find((board) => board.id === id)
              );
              if (category.type === 'favourite') {
                return category.boardsIds.length ? (
                  <BoardsListWrapper key={category.id}>
                    <BoardsPreviewList category={category} boards={boardsList} />
                  </BoardsListWrapper>
                ) : null;
              }
              return (
                <BoardsPreviewList
                  key={category.id}
                  category={category}
                  boards={boardsList}
                  showNavigation={!category.type && show}
                />
              );
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
